import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export const Header = () => {
    const {asPath} = useRouter();
    console.log(asPath);
    return (
    <header className={"py-2"}>
      <div className={"container mx-auto"}>
        <nav className={"flex flex-col items-start text-sm font-light justify-between"}>
            <ul className={'flex gap-8'}>
                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/resume'}>Resume</Link></li>
                <li><Link href={'/projects'}>Projects</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}