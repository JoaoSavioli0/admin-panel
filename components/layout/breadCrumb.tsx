import Link from "next/link";
import React from "react";

export type BreadCrumbItem = {
  label: string;
  redirectTo?: string;
};

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  className?: string;
}

export default function BreadCrumb({ items, className }: BreadCrumbProps) {
  const pagesCategories: Record<string, string[]> = {
    Navegação: ["painel", "dashboard", "perfil"],
    Controle: ["solicitacoes", "agendamentos", "avisos", "moradores"],
    Utilidades: ["relatorios", "insights"],
  };

  const category = Object.entries(pagesCategories).find(([_, values]) =>
    values.includes(items[0].label.toLowerCase())
  )?.[0];

  const fullItems = category ? [{ label: category }, ...items] : items;

  return (
    <nav
      aria-label="breadcrumb"
      className={` flex items-center gap-x-1.5 text-sm ${className}`}
    >
      <Link
        href={"/home"}
        className="mb-[-2px] text-blue-600 hover:text-blue-700"
      >
        <i className="pi pi-home" style={{ fontSize: "0.9rem" }}></i>
      </Link>
      <i
        className="pi pi-angle-right text-zinc-600"
        style={{ fontSize: "0.8rem" }}
      />
      {fullItems.map((item, index) => {
        const isLast = index == fullItems.length - 1;

        return (
          <React.Fragment key={index}>
            {!isLast && item.redirectTo && (
              <Link
                href={item.redirectTo!}
                className="text-blue-500 hover:underline hover:text-blue-600 cursor-pointer"
              >
                {item.label}
              </Link>
            )}

            {!isLast && !item.redirectTo && (
              <span className="text-zinc-600">{item.label}</span>
            )}
            {isLast && <span className="text-zinc-600">{item.label}</span>}

            {!isLast && (
              <i
                className="pi pi-angle-right text-zinc-600"
                style={{ fontSize: "0.8rem" }}
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
