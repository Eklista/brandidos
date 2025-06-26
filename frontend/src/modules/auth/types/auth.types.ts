export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'client';
}

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: AuthUser | null;
}