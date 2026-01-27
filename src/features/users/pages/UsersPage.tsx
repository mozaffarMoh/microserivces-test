import React, { useState } from "react";
import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";
import { userService } from "../services/userService";
import { User, UserFormValues } from "../types";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<UserFormValues | undefined>(undefined);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = async (id: string | number) => {
    await userService.deleteUser(id);
    setUsers((prev) => prev.filter((user) => String(user.id) === String(id)));
  };

  const handleFormSubmit = async (values: UserFormValues) => {
    try {
      if (editingUser) {
        const updatedUser = await userService.updateUser(String(editingUser.id), values);
        setUsers((prev) => prev.map((user) => (user.id === editingUser.id ? updatedUser : user)));
        setEditingUser(undefined);
      } else {
        const newUser = await userService.createUser();
        setUsers((prev) => [...prev, newUser]);
      }
      setShowForm(false);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await userService.fetchUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users Management</h1>
        <Button onClick={() => setShowForm(true)} variant="primary" size="md">
          Add User
        </Button>
      </div>

      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingUser(undefined);
        }}
        title={editingUser ? "Edit User" : "Add User"}
      >
        <UserForm onSubmit={handleFormSubmit} user={editingUser} />
      </Modal>
    </div>
  );
};
