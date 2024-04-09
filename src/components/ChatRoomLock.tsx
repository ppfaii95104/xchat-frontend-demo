"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import MessengerLogo from "./MessengerLogo";
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
