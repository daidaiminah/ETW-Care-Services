import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./models/index.js";
import { errorHandler } from "./utils/errorHandler.js";

// Import routes
import authRoutes from "./routers/authRoutes.js";
import serviceRoutes from "./routers/serviceRoutes.js";
import testimonialRoutes from "./routers/testimonialRoutes.js";
import contactRoutes from "./routers/contactRoutes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure CORS to accept requests from the React client
app.use(cors({
  origin: ['https://etw-care-services.onrender.com/'], // Allow client ports
  //origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3700'], // Allow client ports
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Database connection
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync database models
    await db.sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// API Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ETW Care Services API" });
});

// Mount routers
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contacts", contactRoutes);

// Error handling middleware
app.use(errorHandler);

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Set port
const port = process.env.PORT || 3400;

// Start server
app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
