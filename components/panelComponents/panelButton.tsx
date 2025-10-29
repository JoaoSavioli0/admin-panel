"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface redirectButton {
  className?: string;
  type?: "wide" | "square" | "parent";
  value?: number;
  description?: string;
  redirectTo?: string;
  indicator?: "grow" | "decrease";
  status: "warning" | "warning-border" | "normal" | "dark";
  children?: React.ReactNode;
}

export default function RedirectButton({
  className,
  type = "square",
  value,
  description,
  redirectTo,
  indicator,
  status,
  children,
}: redirectButton) {
  const router = useRouter();

  const redirect = () => {
    if (redirectTo) router.push(redirectTo);
  };

  const brokenDescription = description ? description.split(" ") : "";

  return (
    <button
      onClick={redirect}
      className={`rounded-lg w-full pl-3 text-primary border-3 transition-colors duration-200 h-[90px] ${className}
        ${redirectTo ? "cursor-pointer" : ""}
    ${status == "warning" ? "bg-warning border-warning hover:bg-default " : ""}
    ${
      status == "warning-border"
        ? "bg-default border-warning hover:bg-warning"
        : ""
    }
    ${
      status == "normal"
        ? "bg-default border-primary hover:text-default hover:bg-primary"
        : ""
    }
        ${
          status == "dark"
            ? "bg-primary !text-default hover:bg-default hover:!text-primary border-primary"
            : ""
        }`}
    >
      {type !== "parent" ? (
        <div className={`${type == "wide" ? "flex" : ""}`}>
          {value && (
            <h1
              className={`font-semibold text-left ${
                type == "wide" ? "text-6xl" : "text-4xl"
              }`}
            >
              {value}
              {indicator && (
                <span>
                  <i
                    className={`pi ${
                      indicator == "grow"
                        ? "pi-angle-double-up"
                        : "pi-angle-double-down"
                    }`}
                  ></i>
                </span>
              )}
            </h1>
          )}
          <div
            className={`relative w-full ${
              type == "square" ? "mt-0.5" : "ml-1"
            }`}
          >
            {type == "square" && brokenDescription && (
              <h2 className="w-full text-sm text-wrap line-clamp-2 leading-[1] text-left font-medium break-all whitespace-pre-line">
                {brokenDescription
                  .slice(0, brokenDescription.length / 2)
                  .join(" ")}
                <br></br>
                {brokenDescription.length > 1 &&
                  brokenDescription
                    .slice(brokenDescription.length / 2)
                    .join(" ")}
              </h2>
            )}
            {type == "wide" && (
              <p className="max-w-[80%] text-left font-medium text-lg">
                {description}
              </p>
            )}

            {redirectTo && (
              <i
                className="pi pi-angle-right absolute end-[5px] top-1/2 -translate-y-1/2"
                style={{ fontSize: "1.3rem" }}
              ></i>
            )}
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
