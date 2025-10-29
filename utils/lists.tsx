export const navItems: Record<
  string,
  { id: number; label: string; redirectTo: string; icon: string }[]
> = {
  Navegação: [
    {
      id: 1,
      label: "Painel geral",
      redirectTo: "/painel",
      icon: "pi-desktop",
    },
    {
      id: 2,
      label: "Dashboard",
      redirectTo: "/dashboard",
      icon: "pi-chart-pie",
    },
    { id: 3, label: "Perfil", redirectTo: "/profile", icon: "pi-user" },
  ],
  Controle: [
    {
      id: 4,
      label: "Agendamentos",
      redirectTo: "/agendamentos",
      icon: "pi-calendar",
    },
    {
      id: 5,
      label: "Avisos",
      redirectTo: "/avisos",
      icon: "pi-bell",
    },
    {
      id: 6,
      label: "Colaboradores",
      redirectTo: "/colaboradores",
      icon: "pi-face-smile",
    },
    {
      id: 7,
      label: "Espaços",
      redirectTo: "/espacos",
      icon: "pi-map-marker",
    },
    { id: 8, label: "Moradores", redirectTo: "/moradores", icon: "pi-users" },
    {
      id: 9,
      label: "Solicitações",
      redirectTo: "/solicitacoes",
      icon: "pi-flag",
    },
  ],
  Utilidades: [
    {
      id: 10,
      label: "Relatórios",
      redirectTo: "/relatorios",
      icon: "pi-file",
    },
    {
      id: 11,
      label: "Insights com IA",
      redirectTo: "/insights",
      icon: "pi-lightbulb",
    },
  ],
  Outros: [
    {
      id: 12,
      label: "Configurações",
      redirectTo: "/settings",
      icon: "pi-cog",
    },
    {
      id: 13,
      label: "Ajuda",
      redirectTo: "/ajuda",
      icon: "pi-question",
    },
  ],
};
