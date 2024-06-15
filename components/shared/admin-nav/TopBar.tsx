"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { dashLinks } from "@/constants";

const TopBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-between bg-slate-100/50 px-8 py-4 shadow-xl lg:hidden">
      <Link href="/">
        <p className="text-2xl font-semibold text-black">GadgetBD</p>
      </Link>

      <div className="flex gap-8 max-md:hidden">
        {dashLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 font-medium ${pathname === link.url ? "text-gray-900" : "text-gray-700"}`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex items-center gap-4">
        <Menu
          className="cursor-pointer text-black md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute right-6 top-10 flex flex-col gap-8 rounded-lg bg-white p-5 text-black shadow-xl">
            {dashLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className="flex gap-4 font-medium"
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
