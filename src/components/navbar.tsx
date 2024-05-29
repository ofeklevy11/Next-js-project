"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import AuthButton from "./authBtn";



const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/our-services",
    label: "our services",
  },
  {
    href: "/protected-route",
    label: "protected route",
  },
  {
    href: "/create-post",
    label: "Create Post",
  },
  {
    href: "/all-posts",
    label: "All Posts",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="py-4 flex items-center justify-between ">
      <a href="/" className="text-4xl tracking-wide">
        Ofek<span className="font-bold text-yellow-500">Levy</span>
      </a>
      <ul className="flex gap-8 ">
        {navLinks.map((link) => (
          <li
            className={
              pathName === link.href
                ? `capitalize text-yellow-500 font-semibold`
                : "capitalize"
            }
            key={link.label}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <AuthButton />
    </nav>
  );
};

export default Navbar;
