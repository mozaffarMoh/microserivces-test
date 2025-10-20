export interface User {
  id: string | number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export interface UserFormValues {
  id?: string | number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}
