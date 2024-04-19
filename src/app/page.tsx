"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/chat/dashboard", { scroll: false });
  }, []);

  return <></>;
}
