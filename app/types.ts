// types.ts
export interface Transaction {
  id: number;
  created_at: string;
  created_by: string | null;
  money: number;
  owner: string | null;
  recipient: string | null;
  type: string;
}
