import { Outlet } from "@remix-run/react";
import LayoutAdmin from "~/component/layout-admin";

export default function Admin() {
  return (
    <LayoutAdmin>
      <Outlet />
    </LayoutAdmin>
  );
}
