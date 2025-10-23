"use client";

import { MockDataContext } from "@/context/MockDataContext";
import { formatDate } from "@/utils/dateUtils";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext } from "react";

export default function ColaboradoresPage() {
  const { mockCollaborators } = useContext(MockDataContext) as any;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[30px]">
        <Button
          type="submit"
          label="+ Novo colaborador"
          severity="info"
          className="text-zinc-200 !h-full !bg-blue-500 *:!font-medium !text-sm !px-3"
        ></Button>
      </div>
      <div className="w-full mt-2">
        <DataTable
          value={mockCollaborators}
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
          {/* <Column
          field="createdAt"
          header="Data de cadastro"
          sortable
          body={(rowData) => <span>{formatDate(rowData.createdAt)}</span>}
        /> */}
          <Column field="age" header="Idade" sortable />
          <Column field="phone" header="Telefone" />
          <Column
            field="occupations"
            header="Função"
            body={(rowData) => <span>{rowData.occupations.join(", ")}</span>}
          />
          <Column field="workSchedule" header="Carga horária" />
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
    </div>
  );
}
