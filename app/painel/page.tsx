import RedirectButton from "@/components/panelComponents/redirectButton";
import SectionBox from "@/components/panelComponents/sectionBox";

export default function MainPage() {
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
              <RedirectButton
                className="col-span-2"
                type="wide"
                status="warning"
                value={4}
                description={"Em aberto"}
                redirectTo="/residents"
              />

              <RedirectButton
                type="square"
                status="normal"
                value={2}
                description={"Em andamento"}
                redirectTo="/residents"
              />

              <RedirectButton
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
              <RedirectButton
                status="warning"
                value={1}
                description={"Esperando aprovação"}
                redirectTo="/residents"
              />

              <RedirectButton
                status="normal"
                value={2}
                description={"Agendado esse mês"}
                redirectTo="/residents"
              />

              <RedirectButton
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
              <RedirectButton
                status="normal"
                indicator="grow"
                value={609}
                description={"Total moradores"}
                redirectTo="/residents"
              />

              <RedirectButton
                status="normal"
                indicator="grow"
                value={18}
                description={"Novos moradores"}
                redirectTo="/residents"
              />

              <RedirectButton
                status="normal"
                value={2}
                description={"Moradores saídos"}
                redirectTo="/residents"
              />

              <RedirectButton
                status="dark"
                value={0.22}
                description={"N° saídas por entrada"}
              />
            </div>
          </div>
        </SectionBox>
      </div>
    </div>
  );
}
