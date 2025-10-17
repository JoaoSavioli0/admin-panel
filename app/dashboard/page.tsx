import RedirectButton from "@/components/panelComponents/redirectButton";

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex items-center justify-center pl-[260px]">
      <RedirectButton
        status="normal"
        value={4}
        description={"Novos moradores"}
        redirectTo="/residents"
      />

      <RedirectButton
        status="warning"
        value={4}
        description={"Novos moradores"}
        redirectTo="/residents"
      />

      <RedirectButton
        status="warning-border"
        value={4}
        description={"Novos moradores"}
        redirectTo="/residents"
      />
    </div>
  );
}
