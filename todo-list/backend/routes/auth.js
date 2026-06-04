const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const createToken = (userId) => jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });

const sanitizeUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
});

router.get("/test", (req, res) => {
    res.json("Auth Route Are Working");
});

router.post("/signup", async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password?.trim();
        const secretKeyword = req.body.secretKeyword?.trim();

        if (!name || !email || !password || !secretKeyword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 4) {
            return res.status(400).json({ message: "Password must be at least 4 characters" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Already Account Exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            secretKeyword,
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            token: createToken(savedUser._id),
            user: sanitizeUser(savedUser),
            message: "Signup successful",
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Already Account Exist" });
        }

        res.status(500).json({ message: "Unable to create account" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password?.trim();

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({
            token: createToken(user._id),
            user: sanitizeUser(user),
            message: "Login successful",
        });
    } catch (err) {
        res.status(500).json({ message: "Unable to login" });
    }
});

router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ user: sanitizeUser(user) });
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch profile" });
    }
});

router.get("/users", auth, async (req, res) => {
    try {
        // Only return users that THIS logged-in user personally created
        const users = await User.find(
            { createdBy: req.user.id },
            "name email createdAt createdBy"
        ).sort({ createdAt: -1 });
        res.json({
            users: users.map((u) => ({
                ...sanitizeUser(u),
                createdBy: u.createdBy,
            }))
        });
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch users" });
    }
});

router.post("/create-user", auth, async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password?.trim();
        const secretKeyword = req.body.secretKeyword?.trim();

        if (!name || !email || !password || !secretKeyword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 4) {
            return res.status(400).json({ message: "Password must be at least 4 characters" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "This email already exists so try another one" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            secretKeyword,
            createdBy: req.user.id,   // track who created this user
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: `User "${savedUser.name}" created successfully`,
            user: sanitizeUser(savedUser),
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "An account with this email already exists" });
        }
        res.status(500).json({ message: "Unable to create user" });
    }
});

router.put("/change-password", auth, async (req, res) => {
    try {
        const currentPassword = req.body.currentPassword?.trim();
        const newPassword = req.body.newPassword?.trim();

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: "Both password fields are required" });
        }

        if (newPassword.length < 4) {
            return res.status(400).json({ message: "Password must be at least 4 characters" });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: "Password changed successfully" });
    } catch (err) {
        res.status(500).json({ message: "Unable to change password" });
    }
});
router.get("/all-users", auth, async (req, res) => {
    try {
        const users = await User.find({}, "name email createdAt").sort({ name: 1 });
        res.json({ users: users.map(sanitizeUser) });
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch all users" });
    }
});

router.get("/user/:id", auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate("createdBy", "name email")
            .select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            createdBy: user.createdBy,
        });
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch user profile" });
    }
});

router.delete("/user/:id", auth, async (req, res) => {
    try {
        const userToDelete = await User.findById(req.params.id);

        if (!userToDelete) {
            return res.status(404).json({ message: "User not found" });
        }

        // Only the creator of this user account can delete it
        const creatorId = userToDelete.createdBy?.toString();
        if (creatorId !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to delete this user" });
        }

        await User.findByIdAndDelete(req.params.id);
        res.json({ message: `User "${userToDelete.name}" deleted successfully` });
    } catch (err) {
        res.status(500).json({ message: "Unable to delete user" });
    }
});

router.post("/request-password-reset", async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const secretKeyword = req.body.secretKeyword?.trim();

        if (!email || !secretKeyword) {
            return res.status(400).json({ message: "Email and secret keyword are required" });
        }

        const user = await User.findOne({ email, secretKeyword });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or secret keyword" });
        }

        res.status(200).json({ message: "Details verified. Proceed to reset password." });
    } catch (err) {
        console.error("Forgot password request error:", err);
        res.status(500).json({ message: "Unable to process password reset request." });
    }
});

router.post("/reset-password", async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const secretKeyword = req.body.secretKeyword?.trim();
        const newPassword = req.body.newPassword?.trim();

        if (!email || !secretKeyword || !newPassword) {
            return res.status(400).json({ message: "Email, secret keyword and new password are required." });
        }

        if (newPassword.length < 4) {
            return res.status(400).json({ message: "Password must be at least 4 characters." });
        }

        const user = await User.findOne({ email, secretKeyword });
        if (!user) {
            return res.status(404).json({ message: "User not found or invalid details." });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.status(200).json({ message: "Reset Password Successfully!" });
    } catch (err) {
        console.error("Reset password error:", err);
        res.status(500).json({ message: "Unable to reset password." });
    }
});

module.exports = router;
