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
  };

  const path = usePathname();

  const segments = path.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1];

  const pageData = labels[currentPage] ?? {
    title: "Página não encontrada",
    subTitle: "",
  };

  return (
    <div className="w-full min-h-screen pl-[260px]">
      <div className="w-full h-full px-4 py-12">
        <SectionTitle title={pageData.title} subTitle={pageData.subTitle} />
        {children}
      </div>
    </div>
  );
}
