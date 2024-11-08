import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import AppSidebar from "./_components/AppSideBar";

export default function SideBarComponent({children}: {children:React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <div>
        <SidebarTrigger />
        {children}
        </div>
    </SidebarProvider>
  );
}
