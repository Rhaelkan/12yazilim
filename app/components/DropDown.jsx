"use client";

import React, { useState } from "react";
import Link from "next/link";

const DropDown = ({ itemTitle, id }) => {
  const [isHover, setIsHover] = useState(false);

  const navDropDownItems = [
    {
      item1: "ERP12",
      item2: "ERP12",
    },
    {
      item1: "ERP12",
      item2: "ERP12",
    },
  ];

  return (
    <div className="relative">
      <Link
        onMouseOver={() => setIsHover(true)}
        href="#"
        className="hover:text-red-500 duration-150"
      >
        {itemTitle}
      </Link>

      {isHover && (
        <div
          onMouseLeave={() => setIsHover(false)}
          className={`absolute top-8 bg-white shadow-lg ${id >= 2 && "hidden"}`}
        >
          {navDropDownItems.map((item, index) => (
            <div className="w-48">
              <h1 className="px-4 py-3 font-medium border-b cursor-pointer">
                {item.item1}
              </h1>
              <h1 className="px-4 py-3 font-medium border-b cursor-pointer">
                {item.item2}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
