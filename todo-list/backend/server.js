require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://abhi:abhi123@cluster0.jow73br.mongodb.net/todo?appName=Cluster0";
const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    process.env.CLIENT_ORIGIN
].filter(Boolean);

app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
                var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err.message));

app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo", require("./routes/todo"));
app.use("/api/todo/:todoId/subtasks", require("./routes/subtask"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
