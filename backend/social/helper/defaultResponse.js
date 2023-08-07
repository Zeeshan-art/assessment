module.exports = () => {
    return {
      success: (res, data = null, message = "Operation successful", statusCode = 200) => {
        // List of common HTTP request code
        const codes = [200, 201, 500];
        // Get matched code
        const findCode = codes.find((code) => code == statusCode);
  
        if (!findCode) statusCode = 500;
        else statusCode = findCode;
        res.status(statusCode).json({
          data: data,
          message: message,
          error: false,
        });
      },
  
      error: (res, message, statusCode, data = null) => {
        // List of common HTTP request code
        const codes = [400, 404, 500];
  
        // Get matched code
        const findCode = codes.find((code) => code == statusCode);
  
        if (!findCode) statusCode = 500;
        else statusCode = findCode;
  
        res.status(statusCode).json({
          data: data,
          message: message,
          error: true,
        });
      },
    };
  };