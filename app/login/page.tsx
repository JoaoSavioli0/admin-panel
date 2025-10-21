"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Ripple } from "primereact/ripple";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import * as z from "zod";
import { useState } from "react";

type formData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<formData>();

  const router = useRouter();

  const onSubmit = async (data: formData) => {
    setErroLogin(false);
    setIsLoading(true);
    //adiciona cookie e redireciona
    await new Promise((r) => setTimeout(r, 2000)); //simulando requisição de login

    if (data.password == "123" && data.username == "admin@communityon.com.br") {
      document.cookie = `communityon_admin-token=1; path=/; Secure; SameSite=Strict`;
      router.push("/painel");
    } else {
      setErroLogin(true);
      setIsLoading(false);
    }
  };

  const [visiblePassword, setVisiblePassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [erroLogin, setErroLogin] = useState(false);

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
                invalid={erroLogin}
                {...register("username")}
              />
              <label htmlFor="username">Usuário</label>
            </FloatLabel>
          </div>

          <div>
            <FloatLabel className="relative">
              <InputText
                id="password"
                className="w-full"
                invalid={erroLogin}
                type={visiblePassword ? "text" : "password"}
                {...register("password")}
              />
              <label htmlFor="password">Senha</label>
              <i
                onClick={() => setVisiblePassword(!visiblePassword)}
                className={`rounded-full hover:bg-zinc-50 hover:text-gray-500 p-1 transition-colors duration-100 pi absolute end-[12px] -translate-y-1/2 top-1/2 text-gray-600 cursor-pointer ${
                  visiblePassword ? "pi-eye" : "pi-eye-slash"
                }`}
                style={{ fontSize: "1.3rem" }}
              ></i>
            </FloatLabel>
            {erroLogin && (
              <p className="mt-2 text-xs text-red-600">
                Usuário ou senha inválidos.
              </p>
            )}
          </div>

          <Button
            type="submit"
            label={!isLoading ? "Entrar" : ""}
            loading={isLoading}
            severity="secondary"
            className="!w-full !bg-primary text-zinc-200"
          ></Button>
        </form>
      </div>
    </div>
  );
}
