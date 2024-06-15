import type { Metadata } from "next";

import React from "react";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import LeftSideBar from "@/components/shared/admin-nav/LeftSidebar";
import TopBar from "@/components/shared/admin-nav/TopBar";

export const metadata: Metadata = {
  title: "GadgetBD - Admin Dashboard",
  description: "Admin dashboard to manage GadgetBD's data",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ToasterProvider />
      <div className="flex max-lg:flex-col">
        <LeftSideBar />
        <TopBar />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
