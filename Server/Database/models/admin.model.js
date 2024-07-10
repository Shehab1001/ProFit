// Import necessary modules
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

// Define the admin schema with various fields and their properties
const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Full Name is required."], // First name is required with a custom error message
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required."], // Last name is required with a custom error message
    },
    email: {
      type: String,
      required: [true, "Email is required."], // Email is required with a custom error message
      unique: true, // Ensures email is unique in the database
      lowercase: true, // Converts email to lowercase before saving
      trim: true, // Trims whitespace from the email
    },
    password: {
      type: String,
      required: [true, "Password is required."], // Password is required with a custom error message
    },
    profilePhoto: {
      type: String,
      default: "", // Default value for profile photo is an empty string
    },
    profilePhotoHash: {
      type: String,
      default: "", // Default value for profile photo hash is an empty string
    },
    role: {
      type: String,
      default: "admin", // Default role is set to "admin"
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Middleware to hash the password before saving the document
adminSchema.pre("save", async function (next) {
  // If the password field has not been modified, move to the next middleware
  if (!this.isModified("password")) return next();
  try {
    // Generate a salt with a cost factor of 10
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt
    this.password = await bcrypt.hash(this.password, salt);
    // Proceed to the next middleware or save the document
    next();
  } catch (error) {
    // Pass any error to the next middleware
    next(error);
  }
});

// Create the model from the schema and export it
export const adminModel = model("Admin", adminSchema);
