"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type formData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = (data: formData) => {
    //adiciona cookie e redireciona
    document.cookie = `communityon_admin-token=1; path=/; Secure; SameSite=Strict`;
    router.push("/panel");
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex p-3 gap-x-3 bg-gray-100 ">
      <div className="w-1/2 h-full rounded-2xl bg-primary px-6 flex items-center justify-center">
        <p className="text-[200px] font-bold break-words w-full text-zinc-200 leading-[1]">
          COMMUNITY
          <span className="font-medium">ON</span>
        </p>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <form
          className="flex flex-col gap-y-8 mt-5 w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className="text-3xl font-semibold text-zinc-800">
              Painel do Administrador
            </h1>
            <h2 className="text-xl mb-6 text-zinc-600">Bem-vindo de volta!</h2>
          </div>

          <div>
            <FloatLabel>
              <InputText
                id="username"
                className="w-full"
                {...register("username")}
              />
              <label htmlFor="username">Usuário</label>
            </FloatLabel>
          </div>

          <div>
            <FloatLabel>
              <InputText
                id="password"
                className="w-full"
                {...register("password")}
              />
              <label htmlFor="password">Senha</label>
            </FloatLabel>
          </div>

          <Button
            type="submit"
            label="Entrar"
            severity="secondary"
            className="w-full !bg-primary text-zinc-200"
          ></Button>
        </form>
      </div>
    </div>
  );
}
