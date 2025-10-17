"use client";

import { usePathname } from "next/navigation";

export function GetPathForBreadCrumb() {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);
  return segments.map((seg, i) => ({
    label: seg.charAt(0).toUpperCase() + seg.slice(1),
    redirectTo: segments.slice(0, i + 1).join("/"),
  }));
}
