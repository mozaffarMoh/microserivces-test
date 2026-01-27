import React, { useState } from "react";
import { BranchList } from "../components/BranchList";
import { BranchForm } from "../components/BranchForm";
import { branchService } from "../services/branchService";
import { Branch, BranchFormValues } from "../types";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";

export const BranchesPage: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBranch, setEditingBranch] = useState<BranchFormValues | undefined>(undefined);

  const handleEdit = (branch: Branch) => {
    setEditingBranch(branch);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await branchService.deleteBranch(id);
    setBranches((prev) => prev.filter((branch) => branch.id !== id));
  };

  const handleFormSubmit = async (values: BranchFormValues) => {
    try {
      if (editingBranch) {
        const updatedBranch = await branchService.updateBranch(editingBranch.id!, values);
        setBranches((prev) =>
          prev.map((branch) => (branch.id === editingBranch.id ? updatedBranch : branch)),
        );
        setEditingBranch(undefined);
      } else {
        const newBranch = await branchService.createBranch(values);
        setBranches((prev) => [...prev, newBranch]);
      }
      setShowForm(false);
    } catch (error) {
      console.error("Error saving branch:", error);
    }
  };

  const fetchBranches = async () => {
    try {
      const fetchedBranches = await branchService.fetchBranches();
      setBranches(fetchedBranches);
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  React.useEffect(() => {
    fetchBranches();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Branches Management</h1>
        <Button onClick={() => setShowForm(true)} variant="primary" size="lg">
          Add Branch
        </Button>
      </div>

      <BranchList branches={branches} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingBranch(undefined);
        }}
        title={editingBranch ? "Edit Branch" : "Add Branch"}
      >
        <BranchForm onSubmit={handleFormSubmit} branch={editingBranch} />
      </Modal>
    </div>
  );
};
