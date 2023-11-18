import { Product, columns } from "@/components/MaterialsTable/columns";
import { DataTable } from "@/components/ProductsTable/data-table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
    {
      id: "728ed52f",
      name: "Bolsa nova",
      cost: 10.5,
      price: 13,
    },
  ];
}

export default function Products() {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const init = async () => {
      const d = await getData();

      setData(d);
    };

    init();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-auto p-8 w-full pb-8">
      <div className="mb-4">
        <h1>Produtos</h1>
      </div>
      <div className="h-full flex overflow-auto mt-8">
        <div className="flex flex-1 flex-col overflow-auto inline-block min-w-full shadow rounded-lg">
          <div>{data && <DataTable columns={columns} data={data} />}</div>
        </div>
      </div>
      <div className="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between">
        <div className="inline-flex mt-2 xs:mt-0 gap-x-2">
          <Button>Anterior</Button>
          <Button>Próximo</Button>
        </div>
      </div>
    </div>
  );
}
