"use client";

import PanelButton from "@/components/panelComponents/panelButton";
import SectionBox from "@/components/panelComponents/sectionBox";
import { ProgressBar } from "primereact/progressbar";

export default function MainPage() {
  const valueTemplate = (value: number) => {
    return (
      <>
        {value}/<b>100</b>
      </>
    );
  };

  return (
    <div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
      <div className="row-span-2">
        <SectionBox
          title="Solicitações"
          redirectDescription="Ver todas"
          warning={true}
        >
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-2 gap-1">
              <PanelButton
                className="col-span-2"
                type="wide"
                status="warning"
                value={4}
                description={"Em aberto"}
                redirectTo="/residents"
              />

              <PanelButton
                type="square"
                status="normal"
                value={2}
                description={"Em andamento"}
                redirectTo="/residents"
              />

              <PanelButton
                type="square"
                status="normal"
                value={2}
                description={"Já concluídas"}
                redirectTo="/residents"
              />
            </div>
          </div>
        </SectionBox>
      </div>

      <div className="row-span-2">
        <SectionBox
          title="Agendamentos"
          redirectDescription="Ver todos"
          warning={false}
        >
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-2 gap-1">
              <PanelButton
                status="warning"
                value={1}
                description={"Esperando aprovação"}
                redirectTo="/residents"
              />

              <PanelButton
                status="normal"
                value={2}
                description={"Agendado esse mês"}
                redirectTo="/residents"
              />

              <PanelButton
                className="col-span-2"
                type="wide"
                status="normal"
                description={"Cadastrar espaço"}
                redirectTo="/residents"
              />
            </div>
          </div>
        </SectionBox>
      </div>

      <div className="row-span-2 col-span-2">
        <SectionBox
          title="Moradores"
          redirectDescription="Ver todos"
          warning={true}
        >
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-4 gap-1">
              <PanelButton
                status="normal"
                indicator="grow"
                value={609}
                description={"Total moradores"}
                redirectTo="/moradores"
              />

              <PanelButton
                status="normal"
                indicator="grow"
                value={18}
                description={"Novos moradores"}
                redirectTo="/moradores"
              />

              <PanelButton
                status="normal"
                value={2}
                description={"Moradores saídos"}
                redirectTo="/moradores"
              />

              <PanelButton
                status="dark"
                value={0.22}
                description={"N° saídas por entrada"}
              />

              <PanelButton
                className="col-span-2 pr-3 cursor-pointer group"
                status="dark"
                type="parent"
                redirectTo="/moradores"
              >
                <div className="w-full h-full flex flex-col gap-y-1 items-center justify-center">
                  <span className="w-full text-start text-lg font-semibold">
                    141/179
                  </span>
                  <div className="rounded-sm h-[6px] w-full bg-zinc-600 relative group-hover:bg-zinc-300 transition-colors">
                    <div className="absolute h-[6px] start-0 top-0 w-[80%] bg-default group-hover:bg-primary transition-colors"></div>
                  </div>
                  <div className="w-full flex gap-x-1.5 items-center">
                    <h1 className="text-sm">Imóveis ocupados</h1>
                    <i className="pi pi-angle-right"></i>
                  </div>
                </div>
              </PanelButton>

              <PanelButton
                className="col-span-2"
                type="wide"
                status="normal"
                description={"Cadastrar morador"}
                redirectTo="/moradores"
              />
            </div>
          </div>
        </SectionBox>
      </div>
    </div>
  );
}
