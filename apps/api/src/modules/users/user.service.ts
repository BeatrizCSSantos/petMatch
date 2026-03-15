import { User, ApiResponse } from '@petmatch/types';

export function getUser(): ApiResponse<User> {
  return {
    data: {
      id: '1',
      name: 'Jane Doe',
      email: 'janedoe@email.com',
      createdAt: new Date(),
    },
  };
}
