import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  uom: string;
  quantity: number;
  cost: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "cost",
    header: "Custo",
  },
  {
    accessorKey: "price",
    header: "Preço de venda",
  },
];
