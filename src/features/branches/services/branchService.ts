import { Branch, BranchFormValues } from '../types';

export const branchService = {
  fetchBranches: async (): Promise<Branch[]> => {
    // TODO: Implement API call to fetch branches
    return [];
  },

  createBranch: async (branchData: BranchFormValues): Promise<Branch> => {
    // TODO: Implement API call to create branch
    console.log(branchData)
    return {} as Branch;
  },

  updateBranch: async (id: number, branchData: BranchFormValues): Promise<Branch> => {
    // TODO: Implement API call to update branch
    console.log(id, branchData);

    return {} as Branch;
  },

  deleteBranch: async (id: number): Promise<void> => {
    // TODO: Implement API call to delete branch
    console.log(id);
  },
};
