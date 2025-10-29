"use client";

import { useRouter } from "next/navigation";

interface HomeButtonProps {
  redirectTo: string;
  label: string;
  icon: string;
}

export default function HomeButton({
  redirectTo,
  label,
  icon,
}: HomeButtonProps) {
  const router = useRouter();
  return (
    <button
      className="cursor-pointer flex items-center justify-between w-full p-4 bg-primary border text-default break-words border-gray-300 rounded-lg hover:scale-[101%] transition-transform"
      onClick={() => router.push(redirectTo)}
    >
      <div className="flex items-center gap-x-2">
        <i
          className={`text-default pi ${icon}`}
          style={{ fontSize: "1.2rem" }}
        ></i>
        <h1 className="font-medium">{label}</h1>
      </div>
      <i className="pi pi-angle-right"></i>
    </button>
  );
}
