"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import * as z from "zod";

const notificationSchema = z.object({
  title: z.string().min(1, "Insira um título"),
  description: z.string().min(1, "Insira uma descrição"),
  releaseDate: z.date(),
  type: z.string(),
});

export default function AvisoPage() {
  type NewNotification = z.infer<typeof notificationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewNotification>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      releaseDate: new Date(),
    },
  });

  return (
    <div className="w-full p-4 flex flex-col rounded-lg bg-zinc-100 border border-gray-300">
      <h1 className="text-2xl font-semibold">+ Criar Novo Aviso</h1>
      <p className="text-zinc-600 text-sm">
        Crie um aviso e envie para quem desejar
      </p>
      <div className="w-full grid grid-cols-2 mt-4 gap-4">
        <div className="col-span-1">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="title" className="font-medium">
              Título
            </label>
            <InputText
              id="title"
              aria-describedby="username-help"
              placeholder="Ex: Piscina indisponível durante a próxima semana"
              {...register("title")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="releaseDate" className="font-medium">
              Data de publicação
            </label>
            <Calendar id="releaseDate" {...register("releaseDate")} showIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
