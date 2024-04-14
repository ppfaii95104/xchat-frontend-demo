"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

export default function TimeMessenge(_prop: any) {
  return (
    <div className="flex justify-center w-full mb-2">
      <span className="p-1 bg-grey-box rounded-md text-xs text-[#6D6D6D]">
        31 ม.ค. 67 | 12:38
      </span>
    </div>
  );
}
