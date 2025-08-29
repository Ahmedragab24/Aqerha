export interface ErrorItem {
  [key: string]: string[];
}

export interface ErrorType {
  data: {
    message: string;
    massage: string;
    errors: ErrorItem;
  };
  status: number;
}
