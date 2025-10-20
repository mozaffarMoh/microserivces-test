import { User, UserFormValues } from '../types';

export const userService = {
  fetchUsers: async (): Promise<User[]> => {
    try {
      // TODO: Implement API call to fetch users
      return [];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  createUser: async (): Promise<User> => {
    try {
      // TODO: Implement API call to create user
      return {} as User;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  updateUser: async (id: string | number, userData: UserFormValues): Promise<User> => {
    try {
      // TODO: Implement API call to update user
      console.log(id, userData);

      return {} as User;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  deleteUser: async (id: string | number): Promise<void> => {
    try {
      console.log(id)
      // TODO: Implement API call to delete user
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};
