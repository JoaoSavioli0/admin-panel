"use client";

import { MockDataContext } from "@/context/MockDataContext";
import { formatDate } from "@/utils/dateUtils";
import { Avatar } from "primereact/avatar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext } from "react";

export default function MoradoresPage() {
  const { mockResidents } = useContext(MockDataContext) as any;
  return (
    <div className="w-full h-full flex flex-col">
      <DataTable
        value={mockResidents}
        paginator
        rows={10}
        stripedRows
        sortMode="multiple"
        className="!text-xs !w-full rounded-lg border border-gray-200"
      >
        <Column field="id" header="ID" style={{ width: "50px" }} sortable />
        <Column
          field="name"
          header="Nome"
          body={(rowData) => (
            <div className="flex items-center gap-x-2">
              <Avatar image={rowData.avatar} shape="circle" />
              <span>{rowData.name}</span>
            </div>
          )}
          sortable
        />
        <Column
          field="createdAt"
          header="Data de cadastro"
          sortable
          body={(rowData) => <span>{formatDate(rowData.createdAt)}</span>}
        />
        <Column field="place" header="Endereço" sortable />
        <Column field="age" header="Idade" sortable />
        <Column field="phone" header="Telefone" />
        <Column field="email" header="Email" />
        <Column
          style={{ width: "70px" }}
          body={(rowData) => (
            <div className="flex items-center">
              <button className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-1 cursor-pointer">
                Visualizar
              </button>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
}
