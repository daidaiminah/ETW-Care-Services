import jwt from 'jsonwebtoken';
import db from '../models/index.js';
import dotenv from 'dotenv';

dotenv.config();

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Find admin by email
    const admin = await db.Admin.findOne({ where: { email } });

    // Check if admin exists and password matches
    if (!admin || !(await admin.checkPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(admin.id);

    // Return admin data and token
    res.status(200).json({
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get admin profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    res.status(200).json(req.admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Register a new admin (only accessible by superadmin)
// @route   POST /api/auth/register
// @access  Private/SuperAdmin
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if admin already exists
    const adminExists = await db.Admin.findOne({ where: { email } });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists with this email' });
    }

    // Create admin
    const admin = await db.Admin.create({
      name,
      email,
      password,
      role: role || 'admin' // Default to admin if role not specified
    });

    if (admin) {
      res.status(201).json({
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        message: 'Admin created successfully'
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update admin password
// @route   PUT /api/auth/update-password
// @access  Private
export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    // Get admin with password
    const admin = await db.Admin.findByPk(req.admin.id);
    
    // Check current password
    if (!(await admin.checkPassword(currentPassword))) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    
    // Update password
    admin.password = newPassword;
    await admin.save();
    
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
