type ResponseData = {};

type ApiResponse = {
  statusCode: number;
  data: ResponseData;
  message: string;
  success: boolean;
};

export { ApiResponse, ResponseData };
