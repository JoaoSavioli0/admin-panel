"use client";

import { GetPathForBreadCrumb } from "@/utils/pathUtils";
import BreadCrumb, { BreadCrumbItem } from "./breadCrumb";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

export default function SectionTitle({ title, subTitle }: SectionTitleProps) {
  const breadCrumbItems: BreadCrumbItem[] = GetPathForBreadCrumb();

  return (
    <div className="w-full pb-10">
      <div className="w-full pb-4">
        <BreadCrumb items={breadCrumbItems} />
      </div>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <h2 className="text-sm text-zinc-600 font-medium">{subTitle}</h2>
    </div>
  );
}
