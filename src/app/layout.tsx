import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import LayoutPage from "../components/layout/LayoutPage";
import React, { useState } from "react";
import Image from "next/image";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellFilled,
  SwapOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUsers, HiChartBarSquare } from "react-icons/hi2";
import { Layout, Menu, Button, theme, Input, Avatar, Select } from "antd";
import logo from "@/asset/logo/logo.png";
const { Header, Sider, Content } = Layout;
//👇 Configure our font object
const noto = Noto_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-noto",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable}`}>{children}</body>
    </html>
  );
}
