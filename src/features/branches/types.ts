export interface Branch {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status: 'active' | 'inactive';
}

export interface BranchFormValues {
  id?: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status: 'active' | 'inactive';
}
