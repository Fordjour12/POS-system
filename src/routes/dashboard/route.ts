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
    path: "/dashboard/orders",
    name: "Orders",
    icon: icons.Reciept
  }, {
    id: 4,
    path: "/dashboard/admin/inventory",
    name: "Inventory",
    icon: icons.Inventory
  }, {
    id: 5,
    path: "/dashboard/admin/report",
    name: "Report",
    icon: icons.Report,
  }, {
    id: 6,
    path: "/dashboard/admin/setup",
    name: "Setup",
    icon: icons.Setup
  }

]
