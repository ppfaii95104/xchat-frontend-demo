"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
export default function ChatRoomLock(_prop: any) {
  return (
    <div className="w-full h-full p-4 bg-white">
      <div className="w-full h-full p-2 bg-grey rounded-md text-drak-grey">
        <span className="font-noto ">
          เลือก [มอบหมายให้ฉัน] หากคุณต้องการตอบกลับข้อความด้วยตัวเอง
        </span>
      </div>
    </div>
  );
}
