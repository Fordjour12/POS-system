import type { TypeIcon } from "lucide-svelte";
import type { ComponentType } from "svelte";
import * as icons from "./icons";

export type PageRoute = {
  id: number;
  path: string;
  name: string;
  icon: ComponentType<TypeIcon>
}[]



export const pageRoutes: PageRoute = [
  {
    id: 1,
    path: "/dashboard",
    name: "Dashboard",
    icon: icons.House
  },
  {
    id: 2,
    path: "/dashboard/sales",
    name: "Sales",
    icon: icons.BarChart
  }, {
    id: 3,
    path: "/dashboard/reciept",
    name: "Reciept",
    icon: icons.Reciept
  }]
