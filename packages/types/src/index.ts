export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Animal {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  age?: number;
  description?: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}