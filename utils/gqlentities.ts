export interface User {
  username?: string;
  email?: string;
  password?: string;
}

export interface UserResponse {
  user?: User;
  successful?: boolean;
  error?: { message?: string; target?: string };
}
