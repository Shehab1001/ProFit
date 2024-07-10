// Export the global error handling middleware function
export const globalErrorHandling = (err, req, res, next) => {
  // Extract the error message from the error object
  let error = err.message;
  
  // Extract the status code from the error object, defaulting to 500 if not provided
  let code = err.statuscode || 500;
  
  // Check if the application is running in development mode
  if (process.env.MODE == "dev") {
    // If in development mode, send the error message along with the stack trace
    res.status(code).json({ error, stack: err.stack });
  } else {
    // If not in development mode, send only the error message
    res.status(code).json({ error });
  }
};

// Usage:
// This middleware should be used in an Express application to handle errors globally.
// It should be added after all route handlers and other middleware.
// Example:
// const express = require('express');
// const app = express();
// const { globalErrorHandling } = require('./path/to/globalErrorHandling');

// // Other route handlers and middleware...

// // Use the global error handling middleware
// app.use(globalErrorHandling);
