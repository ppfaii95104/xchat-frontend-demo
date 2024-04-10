"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import {
  Layout,
  Menu,
  Button,
  theme,
  Input,
  Divider,
  Select,
  Empty,
  Avatar,
} from "antd";

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
  NotificationFilled,
  SearchOutlined,
  BarsOutlined,
} from "@ant-design/icons";
export default function TimeMessenge(_prop: any) {
  return (
    <div className="flex justify-center w-full mb-2">
      <span className="p-1 bg-grey-box rounded-md text-xs text-[#6D6D6D]">
        31 ม.ค. 67 | 12:38
      </span>
    </div>
  );
}
