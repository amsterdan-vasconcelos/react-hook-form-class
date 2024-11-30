"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink() {
  const pathname = usePathname();

  const paths = [
    "simple-form",
    "email-array-form",
    "controller-form",
    "multistep-form-with-zod",
    "multistep-form-without-zod",
  ];

  return (
    <div className="flex items-center justify-center gap-2 py-10 px-16">
      {paths.map((path) => (
        <Link
          className={`underline underline-offset-4 ${
            pathname === `/${path}` && "text-red-500"
          }`}
          href={path}
          key={path}
        >
          {path}
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
