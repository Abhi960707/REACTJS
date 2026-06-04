import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Todolist from './components/Todolist';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';
import NotificationDetailPage from './components/NotificationDetailPage';
import TaskDetailPage from './components/TaskDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import GuestRoute from './components/GuestRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest routes - accessible only when NOT logged in */}
        <Route path="/" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />

        {/* Protected routes - accessible only when logged in */}
        <Route path="/todolist" element={<ProtectedRoute><Todolist /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/user/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/task/:id" element={<ProtectedRoute><TaskDetailPage /></ProtectedRoute>} />
        <Route path="/notification/:id" element={<ProtectedRoute><NotificationDetailPage /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        {/* Add other protected routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;