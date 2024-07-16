

interface SuccessResponse {
    success: true;
    message: string;
    data?: any;
  }
  
  interface ErrorResponse {
    success: false;
    message: string;
    error: any;
  }
  
  export const OPERATION_SUCCESS = (message: string, data?: any): SuccessResponse => ({
    success: true,
    message,
    data,
  });
  
  export const OPERATION_FAILED = (message: string, error: any): ErrorResponse => ({
    success: false,
    message,
    error,
  });
  