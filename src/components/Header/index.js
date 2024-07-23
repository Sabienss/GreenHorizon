 import { Heading } from "./..";
 import React from "react";

export default function Header ({ ...props }) {
    return (
    <header
    {...props}
    className={`${props.className} flex self-stretch justify-center items-center h-[114px] lg:h-auto md:h-auto p-11 md:p-5 sm:p-4 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat`}
    >
    <ul className="flex flex-wrap gap-[152px] lg:gap-5 md:gap-5"> 
    <li>
        <a href="#">
        <Heading size="headingxs" as="h6" className=" !text-black-900">
    Home
    </Heading>
        </a>
    </li>
        <li>
        <a href="#">
    <Heading size="headingxs"as="h6" className="Itext-black-900">
    About us </Heading>
    </a>
        </li>
    <li>
    <a href="#">
    <Heading
    size="headingxs"
    as="h6" className=" |text-black-900">
    More </Heading>
    </a>
    </li>  
      </ul>
    </header>
    );
}