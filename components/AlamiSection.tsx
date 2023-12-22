import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import GetText from "./GetText";

type Props = {};

const AlamiSection = (props: Props) => {
  return (
    <div className="bg-[#B9B1A6] py-16">
      <div className="container mx-auto">
        <div className="md:text-6xl text-4xl text-[#918D82] uppercase font-sans tracking-[0.16em]">
          {["affection", "legacy", "adventure", "memory", "intimacy"].map(
            (word, index) => (
              <h1 key={index} className="font-serif ">
                <span className="text-white space-y-2 font-serif ">
                  {word[0]}
                </span>
                {word.slice(1)}
              </h1>
            )
          )}
        </div>
        <div className="flex flex-col md:flex-row  py-8 justify-between gap-8 items-center text-white ">
          <p className="flex-1 max-w-4xl text-xs font-sans md:text-lg">
            <GetText id="wedding_films_affection_legacy_content"/>
          </p>
          <div className="flex items-start md:w-fit w-full md:items-center gap-4 flex-col">
            <h2 className="text-2xl text-[#454643] font-semibold">
              <GetText id="wedding_films_affection_legacy_button_subtitle"/>
            </h2>
            <Link href={"/contact"}>
              <Button className="bg-[#454643] uppercase text-white font-sans hover:bg-[#393a37]">
                <GetText id="wedding_films_affection_legacy_button"/>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlamiSection;
