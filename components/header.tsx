import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <header className={"py-2"}>
      <div className={"container mx-auto"}>
        <nav className={"flex flex-col items-start font-light justify-between"}>
          <ul className={"flex gap-10"}>
            <li>
              <Link href={"/"}>About me</Link>
            </li>
            <li>
              <Link href={"/resume"}>Resume</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
