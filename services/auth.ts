import { apiRequest } from './api';

export type CreateUserPayload = {
  wallet_address: string;
  password: string;
};

export type CreateUserResponse = {
  userid: number;
  wallet_address: string;
};

export async function createUser(payload: CreateUserPayload) {
  return apiRequest<CreateUserResponse>('/api/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export type LoginPayload = {
  wallet_address: string;
  password: string;
};

export type LoginResponse = {
  userid: number;
  wallet_address: string;
};

export async function login(payload: LoginPayload) {
  return apiRequest<LoginResponse>('/api/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
