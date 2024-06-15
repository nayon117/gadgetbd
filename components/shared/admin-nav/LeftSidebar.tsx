"use client";

import { dashLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky left-0 top-0 flex h-screen flex-col gap-16 bg-slate-100/50 p-10 shadow-xl max-lg:hidden">
     <Link href="/">
     <p className="text-2xl font-semibold text-black">GadgetBD</p>
     </Link>

      <div className="flex flex-col gap-12">
        {dashLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 font-medium ${
              pathname === link.url ? "text-gray-900" : "text-gray-700"
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 font-medium text-black">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
