import React from 'react';
import { User } from '../types';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">Users</h1>
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Role: {user.role}</p>
              <p className="text-sm text-gray-500">Status: {user.status}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(user)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(Number(user.id))}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
