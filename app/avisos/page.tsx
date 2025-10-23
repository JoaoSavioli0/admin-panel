"use client";

import { MockDataContext, Notification } from "@/context/MockDataContext";
import { formatDate } from "@/utils/dateUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { TabMenu } from "primereact/tabmenu";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const notificationSchema = z.object({
  title: z.string().min(1, "Insira um título"),
  description: z.string().min(1, "Insira uma descrição"),
  releaseDate: z.date(),
  target: z
    .object({
      blocks: z.string(),
      floors: z.string(),
      apartments: z.string(),
    })
    .optional(),
});

export default function AvisoPage() {
  const { showToast, mockNotifications } = useContext(MockDataContext) as any;
  const [targetType, setTargetType] = useState(1);
  const targetOptions = [
    { name: "Todos os moradores", value: 1 },
    { name: "Grupo específico", value: 2 },
  ];

  const formattedTargets = (target: Notification["target"]) => {
    if (!target?.apartments && !target?.blocks && !target?.floors)
      return "Para todos";

    const truncate = (str: string, max = 15) =>
      str.length > max ? str.slice(0, max) + "..." : str;

    const labels: { key: keyof typeof target; label: string }[] = [
      { key: "apartments", label: "Apartamentos" },
      { key: "blocks", label: "Blocos" },
      { key: "floors", label: "Andares" },
    ];

    return labels
      .filter(({ key }) => !!target[key])
      .map(({ key, label }) => `${label}: ${truncate(target[key]!)}`)
      .join(" - ");
  };

  type NewNotification = z.infer<typeof notificationSchema>;

  const submitNotification = (data: NewNotification) => {
    showToast({
      title: "Sucesso",
      text: "Aviso criado com sucesso",
      duration: 6000,
      type: "success",
    });
    console.log(data);
    setTargetType(1);
    resetForm();
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<NewNotification>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      releaseDate: new Date(),
    },
  });

  const [tabView, setTabView] = useState(0);

  const tabItems = [
    {
      label: "Criar aviso",
      icon: "pi pi-plus",
    },
    {
      label: "Avisos publicados",
      icon: "pi pi-bell",
    },
  ];

  return (
    <div className="w-full px-4 pt-2 pb-4 flex flex-col rounded-lg bg-white border border-gray-300">
      <div className="w-full">
        <TabMenu
          model={tabItems}
          activeIndex={tabView}
          onTabChange={(e) => setTabView(e.index)}
        />
      </div>
      {tabView == 0 && (
        <div className="w-full mt-4">
          <h1 className="text-2xl font-semibold">+ Criar Novo Aviso</h1>
          <p className="text-zinc-600 text-sm">
            Crie um aviso e envie para quem desejar
          </p>
          <form
            onSubmit={handleSubmit(submitNotification)}
            className="w-full grid grid-cols-2 mt-4 gap-4"
          >
            <div className="col-span-1">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="title" className="font-medium text-sm">
                  Título *
                </label>
                <InputText
                  id="title"
                  className="!bg-default !text-sm"
                  aria-describedby="username-help"
                  placeholder="Ex: Piscina indisponível durante a próxima semana"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-xs text-red-600">{errors.title.message}</p>
                )}
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="releaseDate" className="font-medium text-sm">
                  Data de publicação *
                </label>
                <Controller
                  name="releaseDate"
                  control={control}
                  render={({ field }) => (
                    <Calendar
                      id="releaseDate"
                      value={field.value}
                      className="*:!bg-default *:!text-sm"
                      onChange={(e) => field.onChange(e.value)}
                      dateFormat="dd/mm/yy"
                    />
                  )}
                />
                {errors.releaseDate && (
                  <p className="text-xs text-red-600">
                    {errors.releaseDate.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-2">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="releaseDate" className="font-medium text-sm">
                  Descrição *
                </label>
                <InputTextarea
                  autoResize
                  placeholder="Descreva o aviso em detalhes"
                  className="!bg-default !text-sm"
                  {...register("description")}
                  rows={5}
                  cols={30}
                />
                {errors.description && (
                  <p className="text-xs text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-2">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="releaseDate" className="font-medium text-sm">
                  Alvo
                </label>
                <Dropdown
                  className="!bg-default *:!text-sm"
                  options={targetOptions}
                  optionValue="value"
                  optionLabel="name"
                  value={targetType}
                  onChange={(e) => setTargetType(e.target.value)}
                />
              </div>
            </div>

            {targetType == 2 && (
              <div className="col-span-2">
                <div className="w-full p-4 bg-default rounded-lg border border-gray-300">
                  <div className="flex flex-col gap-y-2">
                    <label
                      htmlFor="releaseDate"
                      className="font-medium text-sm"
                    >
                      Selecionar grupo específico
                    </label>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="flex flex-col gap-y-2">
                        <label htmlFor="blocks" className="font-medium text-sm">
                          Blocos
                        </label>
                        <InputText
                          id="blocks"
                          className="!bg-white !text-sm"
                          aria-describedby="username-help"
                          placeholder="Ex: A, B, C"
                          {...register("target.blocks")}
                        />
                        {errors.target?.blocks && (
                          <p className="text-xs text-red-600">
                            {errors.target.blocks.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-y-2">
                        <label htmlFor="floors" className="font-medium text-sm">
                          Andares
                        </label>
                        <InputText
                          id="floors"
                          className="!bg-white !text-sm"
                          aria-describedby="username-help"
                          placeholder="Ex: 1-3, 5, 9"
                          {...register("target.floors")}
                        />
                        {errors.target?.floors && (
                          <p className="text-xs text-red-600">
                            {errors.target.floors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-y-2">
                        <label
                          htmlFor="apartments"
                          className="font-medium text-sm"
                        >
                          Apartamentos
                        </label>
                        <InputText
                          id="apartments"
                          className="!bg-white !text-sm"
                          aria-describedby="username-help"
                          placeholder="Ex: 101, 102, 103"
                          {...register("target.apartments")}
                        />
                        {errors.target?.apartments && (
                          <p className="text-xs text-red-600">
                            {errors.target.apartments.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Separe múltiplos valores por vírgula. Deixe em branco para
                      não filtrar por esse critério.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button
              className="!w-fit !text-sm !h-[40px] !bg-blue-500 !border-blue-500"
              label="Enviar aviso"
              type="submit"
            />
          </form>
        </div>
      )}

      {/* avisos */}
      {tabView == 1 && (
        <div className="w-full mt-4">
          <h1 className="text-2xl font-semibold">Avisos publicados (4)</h1>
          <div className="flex flex-col gap-y-4 mt-4">
            {mockNotifications.map((n: Notification) => (
              <div className="p-6 border border-gray-300 rounded-lg relative">
                <Button
                  className="!absolute top-[15px] end-[20px]"
                  icon="pi pi-trash"
                  rounded
                  text
                  severity="danger"
                  aria-label="Cancel"
                />
                <h1 className="font-medium">{n.title}</h1>
                <span className="flex items-center gap-x-1 text-gray-600 text-[12px] mt-1">
                  <i
                    className="pi pi-calendar mb-[2px]"
                    style={{ fontSize: "0.7rem" }}
                  ></i>
                  {formatDate(n.releaseDate.toISOString(), true)}
                </span>
                <p className="mt-4 text-[13px] text-gray-600">
                  {n.description}
                </p>
                <div className="flex gap-x-2 mt-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      n.status == "Pendente" ? "bg-warning" : "bg-lime-400"
                    }`}
                  >
                    {n.status}
                  </span>

                  <div className="px-2 py-1 rounded-full bg-blue-500 text-xs text-default">
                    <span>{formattedTargets(n.target)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
