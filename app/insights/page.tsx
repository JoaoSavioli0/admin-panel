"use client";

import {
  Insight,
  InsightMetric,
  MockDataContext,
} from "@/context/MockDataContext";
import { Button } from "primereact/button";
import { useContext } from "react";

export default function InsightsPage() {
  const { mockInsights } = useContext(MockDataContext) as any;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-white border border-black/20 p-7 h-[170px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-3 items-center h-fit">
              <i
                className="pi pi-sparkles text-blue-500"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <h1 className="text-lg font-medium">Seus créditos</h1>
            </div>
            <button className="flex items-center gap-x-1.5 rounded-full bg-white border border-blue-700 text-primary px-3 py-1 text-sm font-medium hover:bg-blue-600 hover:text-default transition-colors duration-200 cursor-pointer">
              Comprar
              <i
                className="pi pi-angle-right"
                style={{ fontSize: "0.8rem" }}
              ></i>
            </button>
          </div>
          <div>
            <span className="text-4xl font-semibold block">1</span>
            <span className="text-sm text-gray-500"> análises disponíveis</span>
          </div>
        </div>

        <div className="rounded-lg bg-white border border-green-800/20 p-7 h-[170px] flex flex-col justify-between">
          <div className="flex items-center h-fit gap-x-3">
            <i
              className="pi pi-calendar text-green-500 mb-[3px]"
              style={{ fontSize: "1.2rem" }}
            ></i>
            <h1 className="text-lg font-medium">Última análise</h1>
          </div>
          <div>
            <span className="text-2xl font-semibold block">20/10/2025</span>
            <span className="text-sm text-gray-500"> insight mais recente</span>
          </div>
        </div>

        <div className="rounded-lg bg-white border border-yellow-800/20 p-7 h-[170px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-3 items-center h-fit">
              <i
                className="pi pi-stopwatch text-yellow-500"
                style={{ fontSize: "1.2rem" }}
              ></i>
              <h1 className="text-lg font-medium">Próxima análise</h1>
            </div>
            <button className="flex items-center gap-x-1.5 rounded-full bg-white border border-yellow-500 text-primary px-3 py-1 text-sm font-medium hover:bg-yellow-400 transition-colors duration-200 cursor-pointer">
              Alterar
              <i
                className="pi pi-angle-right"
                style={{ fontSize: "0.8rem" }}
              ></i>
            </button>
          </div>
          <div>
            <span className="text-2xl font-semibold block">Em 7 dias</span>
            <span className="text-sm text-gray-500">
              {" "}
              agendada para 30/10/2025
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-4">
        <h1 className="font-semibold text-xl">
          Insights gerados ({mockInsights.length})
        </h1>
        <div className="flex items-center justify-center rounded-full h-[42px] w-[200px] bg-gradient-to-l from-rose-500 from-0% via-yellow-400 via-50% to-blue-600 to-100% cursor-pointer">
          <button className="text-primary cursor-pointer font-medium bg-white h-[40px] w-[198px] text-sm flex gap-x-2 items-center justify-center rounded-full">
            <i className="pi pi-sparkles"></i>
            <span>Gerar novo insight</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-y-4">
        {mockInsights.map((i: Insight) => (
          <div
            key={i.id}
            className="w-full p-6 rounded-md border border-black/20 bg-white"
          >
            <div className="w-full flex items-center justify-between">
              <h1 className="font-medium pb-1.5 text-lg w-[85%]">{i.title}</h1>
              <span></span>
            </div>
            <span className="text-[11px] font-medium border border-black/20 text-primary rounded-full px-3 py-0.5">
              {i.category}
            </span>
            <p className="text-gray-500 mt-6 text-sm">{i.description}</p>
            <div className="rounded-lg p-4 bg-default mt-6">
              <h2 className="font-medium">Métricas</h2>
              <div
                className={`mt-3 w-full grid grid-cols-${i.metrics?.length}`}
              >
                {i.metrics?.map((m: InsightMetric) => (
                  <div>
                    <span className="text-xs text-gray-500 block">
                      {m.label}
                    </span>
                    <span className="font-medium">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full rounded-md p-6 border border-blue-500/20 bg-blue-500/10 mt-6">
        <div className="flex gap-x-2 items-center">
          <i className="pi pi-sparkles"></i>
          <h1 className="font-medium text-lg">Como funciona o Agente IA</h1>
        </div>
        <p className="text-sm mt-4">
          O agente de IA analisa periodicamente todos os dados do sistema para
          identificar padrões e tendências importantes:
          <ul className="list-disc ml-6 mt-1.5 leading-[22px]">
            <li>
              Correlação entre categorias de solicitações e condições climáticas
            </li>
            <li>
              Identificação de solicitações recorrentes após eventos específicos
            </li>
            <li>Análise de perfis demográficos e tipos de solicitações</li>
            <li>Previsão de demandas futuras baseada em padrões históricos</li>
            <li>Sugestões de manutenção preventiva</li>
          </ul>
        </p>
        <p className="mt-2 text-xs italic text-gray-400">
          Os insights são gerados automaticamente e atualizados periodicamente
          para ajudar na gestão proativa do condomínio.
        </p>
      </div>
    </div>
  );
}
