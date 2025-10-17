import React from "react";
import RedirectButton from "./redirectButton";

interface SectionBoxProps {
  children: React.ReactNode;
  title: string;
  redirectDescription?: string;
  redirectTo?: string;
  className?: string;
  warning: boolean;
}

export default function SectionBox({
  children,
  title,
  redirectDescription,
  redirectTo,
  className,
  warning = false,
}: SectionBoxProps) {
  return (
    <div
      className={`w-full h-full rounded-lg border-2 border-primary/20 p-4 relative ${className}`}
    >
      {warning && (
        <span className="absolute top-[10px] end-[10px] bg-warning rounded-full size-[25px] text-primary font-semibold text-center">
          !
        </span>
      )}
      <div className="w-full text-left">
        <h1 className="text-lg font-semibold">{title}</h1>
        {redirectDescription && (
          <div className="flex gap-x-1 items-center text-xs text-zinc-600">
            <p className=" font-medium">{redirectDescription}</p>
            <i className="pi pi-angle-right" style={{ fontSize: "0.7rem" }}></i>
          </div>
        )}
      </div>
      <div className="w-full mt-4">{children}</div>
    </div>
  );
}
