"use client";

import { MockDataContext } from "@/context/MockDataContext";
import { formatDate, formatBookingSchedule } from "@/utils/dateUtils";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { TabMenu } from "primereact/tabmenu";
import { useContext, useState } from "react";

export default function AgendamentoPage() {
  const tabItems = [
    {
      label: "Agendamentos",
      icon: "pi pi-book",
      command: () => setTabView("agendamentos"),
    },
    {
      label: "Espaços",
      icon: "pi pi-map-marker",
      command: () => setTabView("espacos"),
    },
  ];
  const [tabView, setTabView] = useState("agendamentos");

  const { mockBookings, mockBookablePlaces } = useContext(
    MockDataContext
  ) as any;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full">
        <DataTable
          value={mockBookings}
          paginator
          rows={10}
          sortMode="multiple"
          stripedRows
          className="!text-xs !w-full rounded-lg border border-gray-200"
        >
          <Column field="id" header="ID" style={{ width: "50px" }} sortable />
          <Column field="description" header="Descrição" sortable />
          <Column
            field="placeData.name"
            header="Local"
            style={{ width: "200px" }}
            sortable
          />
          <Column
            field="date"
            header="Data"
            body={(rowData) => <span>{formatDate(rowData.date, true)}</span>}
            sortable
          />
          <Column
            field="period"
            header="Data"
            body={(rowData) => <span>{rowData.period}</span>}
            sortable
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
                    : rowData.status === "Aprovado"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {rowData.status}
              </span>
            )}
            sortable
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
