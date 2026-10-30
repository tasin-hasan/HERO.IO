"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "Installation", href: "/installation" },
  ];

  return (
    <div className="flex gap-4 items-center">

      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-semibold transition-colors ${isActive ? "text-violet-600" : "text-gray-400 hover:text-gray-600"}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
