"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  const logOff = () => {
    document.cookie = `communityon_admin-token=1; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    router.push("/login");
  };

  if (pathName === "/login") {
    return null;
  }

  return (
    <div className="h-full w-full px-3 pt-4 border-r border-gray-600 bg-primary overflow-y-auto relative scrollbar-hidden">
      <h1 className="text-xl font-semibold text-zinc-200 w-full px-1">
        CommunityOn
      </h1>
      <div className="w-full mt-4 flex flex-col relative scrollbar-hidden">
        <nav className="pb-2 scrollbar-hidden">
          <p className="text-zinc-500 text-xs font-semibold pb-3 pt-6">
            NAVEGAÇÃO
          </p>
          <ul className="flex flex-col gap-y-1 *:text-zinc-300 *:cursor-pointer *:hover:text-zinc-200 *:w-full *:h-[45px] *:flex *:items-center *:gap-x-3 *:px-3 *:rounded *:transition-colors *:duration-100">
            <li
              className={
                selected === "panel"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("panel");
                router.push("/painel");
              }}
            >
              <i className="pi pi-desktop"></i>
              <span>Painel geral</span>
            </li>
            <li
              className={
                selected === "dashboard"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("dashboard");
                router.push("/dashboard");
              }}
            >
              <i className="pi pi-chart-pie"></i>
              <span>Dashboards</span>
            </li>
            <li
              className={
                selected === "profile"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => setSelected("profile")}
            >
              <i className="pi pi-user"></i>
              <span>Perfil</span>
            </li>
          </ul>

          <p className="text-zinc-500 text-xs font-semibold pb-3 pt-6">
            CONTROLE
          </p>

          <ul className="flex flex-col gap-y-1 *:text-zinc-300 *:cursor-pointer *:hover:text-zinc-200 *:w-full *:h-[45px] *:flex *:items-center *:gap-x-3 *:px-3 *:rounded *:transition-colors *:duration-100">
            <li
              className={
                selected === "bookings"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("bookings");
                router.push("/agendamentos");
              }}
            >
              <i className="pi pi-calendar"></i>
              <span>Agendamentos</span>
            </li>

            <li
              className={
                selected === "avisos"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("avisos");
                router.push("/avisos");
              }}
            >
              <i className="pi pi-bell"></i>
              <span>Avisos</span>
            </li>

            <li
              className={
                selected === "colaboradores"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("colaboradores");
                router.push("/colaboradores");
              }}
            >
              <i className="pi pi-face-smile"></i>
              <span>Colaboradores</span>
            </li>

            <li
              className={
                selected === "espacos"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("espacos");
                router.push("/espacos");
              }}
            >
              <i className="pi pi-map-marker"></i>
              <span>Espaços</span>
            </li>

            <li
              className={
                selected === "moradores"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("moradores");
                router.push("/moradores");
              }}
            >
              <i className="pi pi-users"></i>
              <span>Moradores</span>
            </li>

            <li
              className={
                selected === "solicitations"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("solicitations");
                router.push("/solicitacoes");
              }}
            >
              <i className="pi pi-flag"></i>
              <span>Solicitações</span>
            </li>
          </ul>

          <p className="text-zinc-500 text-xs font-semibold pb-3 pt-6">
            UTILIDADES
          </p>

          <ul className="flex flex-col gap-y-1 *:text-zinc-300 *:cursor-pointer *:hover:text-zinc-200 *:w-full *:h-[45px] *:flex *:items-center *:gap-x-3 *:px-3 *:rounded *:transition-colors *:duration-100">
            <li
              className={
                selected === "reports"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => setSelected("reports")}
            >
              <i className="pi pi-file"></i>
              <span>Relatórios</span>
            </li>

            <li
              className={
                selected === "insights"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("insights");
                router.push("/insights");
              }}
            >
              <i className="pi pi-lightbulb"></i>
              <span>Insights com IA</span>
            </li>
          </ul>

          <p className="text-zinc-500 text-xs font-semibold pb-3 pt-6">
            OUTROS
          </p>

          <ul className="flex flex-col gap-y-1 *:text-zinc-300 *:cursor-pointer *:hover:text-zinc-200 *:w-full *:h-[45px] *:flex *:items-center *:gap-x-3 *:px-3 *:rounded *:transition-colors *:duration-100">
            <li
              className={
                selected === "settings"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => {
                setSelected("settings"), router.push("/panel/settings");
              }}
            >
              <i className="pi pi-cog"></i>
              <span>Configurações</span>
            </li>

            <li
              className={
                selected === "help"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => setSelected("help")}
            >
              <i className="pi pi-question"></i>
              <span>Ajuda</span>
            </li>

            <li
              className={
                selected === "help"
                  ? "bg-secondary !text-white"
                  : "hover:bg-secondary/50"
              }
              onClick={() => logOff()}
            >
              <i className="pi pi-sign-out -rotate-180"></i>
              <span>Sair</span>
            </li>
          </ul>
        </nav>

        <div className="sticky bottom-0 start-0 py-5 w-full flex gap-x-2 items-center border-t bg-primary border-secondary z-50 text-zinc-200">
          <div className="rounded-full bg-secondary size-[40px]"></div>
          <div className="flex flex-col">
            <div className="flex gap-x-2 items-center">
              <span className="text-xs font-semibold">Admin</span>
              <div className="bg-zinc-200 rounded flex gap-x-1 items-center px-1">
                <div className="rounded-full size-[7px] bg-lime-600 shrink-0"></div>
                <span className="text-zinc-800 text-[10px]">online</span>
              </div>
            </div>
            <span className="text-sm text-zinc-200">João Savioli</span>
          </div>
        </div>
      </div>
    </div>
  );
}
