"use client";

import { MockDataContext } from "@/context/MockDataContext";
import { formatDate } from "@/utils/dateUtils";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import { useContext } from "react";

export default function SolicitacoesPage() {
  const { mockSolicitations, mockCollaborators, setCollaborator } = useContext(
    MockDataContext
  ) as any;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <DataTable
        value={mockSolicitations}
        paginator
        rows={5}
        stripedRows
        className="!text-xs !w-full rounded-lg border border-gray-200"
      >
        <Column field="id" header="ID" style={{ width: "50px" }} />
        <Column field="title" header="Título" />
        <Column
          field="tags"
          header="Categoria"
          style={{ width: "200px" }}
          body={(rowData, row) => (
            <div className="div flex flex-wrap gap-1 items-center">
              {rowData.tags.slice(0, 3).map((t: string, i: number) => (
                <span
                  key={`${row.rowIndex}-${i}`}
                  className="py-0.5 px-1 bg-zinc-200/70 rounded-sm text-zinc-800 w-fit"
                >
                  {t}
                </span>
              ))}
              {rowData.tags?.length > 3 && (
                <span className="text-zinc-800">
                  +{rowData.tags.length - 3}
                </span>
              )}
            </div>
          )}
        />
        <Column field="place" header="Local" style={{ width: "200px" }} />
        <Column
          field="date"
          header="Data"
          style={{ width: "85px" }}
          body={(rowData) => <span>{formatDate(rowData.date)}</span>}
        />
        <Column
          field="status"
          header="Status"
          style={{ minWidth: "135px" }}
          body={(rowData) => (
            <span
              className={`px-2 py-1 rounded ${
                rowData.status === "Pendente"
                  ? "bg-warning text-yellow-800"
                  : rowData.status === "Em andamento"
                  ? "bg-blue-200 text-blue-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {rowData.status}
            </span>
          )}
        />
        <Column
          field="creatorData.name"
          header="Criador"
          body={(rowData) => (
            <div className="flex items-center gap-2">
              <span>{rowData.creatorData.name}</span>
            </div>
          )}
        />
        <Column
          field="assignedColab"
          header="Responsável"
          style={{ width: "200px" }}
          body={(rowData) => (
            <MultiSelect
              className="!h-[40px] !w-full"
              value={rowData.assignedColabs || []} // array de ids
              onChange={(e) => setCollaborator(rowData.id, e.value as number[])}
              options={mockCollaborators}
              optionLabel="name"
              optionValue="id" // <-- importantíssimo
              display="chip"
              filter
            />
          )}
        />
        <Column
          field="creatorData.name"
          header=""
          body={(rowData) => (
            <span className="text-blue-500 flex items-center gap-x-1 cursor-pointer">
              <i
                className="pi pi-angle-down"
                style={{ fontSize: "0.7rem" }}
              ></i>
            </span>
          )}
        />
      </DataTable>
    </div>
  );
}

<style scoped></style>;
