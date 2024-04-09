"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

import LayoutPage from "@/components/layout/LayoutPage";
import ChatPageLayout from "./ChatPageLayout";

export default function ChatPage(_prop: any) {
  return (
    <>
      <LayoutPage page={<ChatPageLayout />} />
    </>
  );
}
