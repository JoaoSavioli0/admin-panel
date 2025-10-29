"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { navItems } from "@/utils/lists";

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

  useEffect(() => {
    setSelected(pathName.replace("/", ""));
    console.log(pathName);
  }, [pathName]);

  return (
    <div className="h-full w-full px-3 pt-4 border-r border-gray-600 bg-primary overflow-y-auto relative scrollbar-hidden">
      <h1
        className="text-xl font-semibold text-zinc-200 w-full px-1 cursor-pointer"
        onClick={() => router.push("/home")}
      >
        CommunityOn
      </h1>
      <div className="w-full mt-4 flex flex-col relative scrollbar-hidden">
        <nav className="pb-2 scrollbar-hidden">
          {Object.entries(navItems).map(([category, buttons], index) => (
            <React.Fragment key={index}>
              <p className="text-zinc-500 text-xs font-semibold pb-3 pt-6">
                {category}
              </p>
              <ul className="flex flex-col gap-y-1 *:text-zinc-300 *:cursor-pointer *:hover:text-zinc-200 *:w-full *:h-[45px] *:flex *:items-center *:gap-x-3 *:px-3 *:rounded *:transition-colors *:duration-100">
                {buttons.map((button) => (
                  <li
                    key={button.id}
                    className={
                      selected === button.redirectTo.replace("/", "")
                        ? "bg-secondary !text-white"
                        : "hover:bg-secondary/50"
                    }
                    onClick={() => {
                      //setSelected(button.label);
                      router.push(button.redirectTo);
                    }}
                  >
                    <i className={`pi ${button.icon}`}></i>
                    <span>{button.label}</span>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
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
