import React, { useState } from 'react';
import { UserFormValues } from '../types';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

interface UserFormProps {
  onSubmit: (values: UserFormValues) => void;
  user?: UserFormValues;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState<UserFormValues>(
    user || {
      name: '',
      email: '',
      role: 'user',
      status: 'active'
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[var(--spacing-lg)]">
      <div className="form-group">
        <Input
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="role" className="form-label">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="block w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-card)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
          required
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="block w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-card)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="primary">
          {user ? 'Update User' : 'Add User'}
        </Button>
      </div>
    </form>
  );
};
