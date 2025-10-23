"use client";

import { usePathname } from "next/navigation";
import SectionTitle from "./sectionTitle";

interface SectionLayout {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayout) {
  const labels: Record<string, { title: string; subTitle: string }> = {
    painel: {
      title: "Painel Geral",
      subTitle: "Informações gerais para visualização rápida",
    },
    dashboard: {
      title: "Dashboard",
      subTitle: "Analise seus dados com gráficos visuais",
    },
    solicitacoes: {
      title: "Solicitações",
      subTitle: "Visualize e controle as solicitações dos seus moradores",
    },
    agendamentos: {
      title: "Agendamentos",
      subTitle: "Visualize e controle os agendamentos dos espaços sociais",
    },
    espacos: {
      title: "Espaços",
      subTitle: "Visualize e cadastre espaços sociais do seu condomínio",
    },
    moradores: {
      title: "Moradores",
      subTitle: "Visualize e controle os moradores do seu condomínio",
    },
    avisos: {
      title: "Avisos",
      subTitle: "Publique avisos importantes para os moradores",
    },
    colaboradores: {
      title: "Colaboradores",
      subTitle:
        "Viualize e cadastre os fornecedores de serviços do seu condomínio",
    },
    insights: {
      title: "Insights",
      subTitle: "Análises inteligentes geradas automaticamente pelo sistema",
    },
  };

  const path = usePathname();

  const isLoginPage = path === "/login";

  const segments = path.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1];

  const pageData = labels[currentPage] ?? {
    title: "Página não encontrada",
    subTitle: "",
  };

  return (
    <div className={`w-full min-h-screen ${!isLoginPage ? "pl-[260px]" : ""}`}>
      <div className={`w-full h-full ${!isLoginPage ? "py-12 px-4" : ""}`}>
        <SectionTitle title={pageData.title} subTitle={pageData.subTitle} />
        {children}
      </div>
    </div>
  );
}
