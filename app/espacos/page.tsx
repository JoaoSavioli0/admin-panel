"use client";

import { MockDataContext } from "@/context/MockDataContext";
import { formatDate, formatBookingSchedule } from "@/utils/dateUtils";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { TabMenu } from "primereact/tabmenu";
import { useContext, useState } from "react";

export default function AgendamentoPage() {
  const { mockBookablePlaces } = useContext(MockDataContext) as any;

  const [filter, setFilter] = useState("");

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[30px]">
        <Button
          type="submit"
          label="Novo espaço +"
          severity="info"
          className="text-zinc-200 !h-full !bg-blue-500 *:!font-medium !text-sm"
        ></Button>
      </div>
      <div className="w-full mt-2">
        <DataTable
          value={mockBookablePlaces}
          paginator
          rows={10}
          stripedRows
          sortMode="multiple"
          className="!text-xs !w-full rounded-lg border border-gray-200"
        >
          <Column field="id" header="ID" style={{ width: "50px" }} sortable />
          <Column field="name" header="Nome" sortable />
          <Column field="maxGuests" header="Lotação Máxima" sortable />
          <Column
            field="schedule"
            header="Funcionamento"
            body={(rowData) => (
              <span>{formatBookingSchedule(rowData.schedule)}</span>
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
