import React from 'react';
import { Branch } from '../types';

interface BranchListProps {
  branches: Branch[];
  onEdit: (branch: Branch) => void;
  onDelete: (id: number) => void;
}

export const BranchList: React.FC<BranchListProps> = ({ branches, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">Branches</h1>
      {branches.map((branch) => (
        <div key={branch.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{branch.name}</h3>
              <p className="text-gray-600">{branch.address}</p>
              <p className="text-sm text-gray-500">{branch.city}, {branch.state} {branch.zipCode}</p>
              <p className="text-sm text-gray-500">Status: {branch.status}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(branch)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(branch.id)}
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
