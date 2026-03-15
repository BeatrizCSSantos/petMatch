import type { User, ApiResponse } from '@petmatch/types';

export async function fetchUser(): Promise<ApiResponse<User>> {
  const response = await fetch('/api/user');
  return response.json();
}
