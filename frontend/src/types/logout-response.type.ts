export type LogoutResponseType = {
  error: true;
  message: string;
  validation?: Array<{ key: string; message: string }>;
}