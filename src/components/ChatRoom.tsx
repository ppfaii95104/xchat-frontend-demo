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
export default function ChatRoom(_prop: any) {
  return (
    <div className="px-2 py-4 flex items-center relative">
      <Avatar size={40} icon={<UserOutlined />} />
      <div className="flex flex-col mx-2 w-[45%]">
        <div className="flex  items-center">
          <MessengerLogo />
          <span className="font-noto text-xs ml-1">Chatfast.app</span>
        </div>
        <span className="font-noto chat-name">Jane Meldrum</span>
        <span className="font-noto chat-messenge">Jane Meldrum</span>
      </div>
      <div className="w-[35%]">
        <div className="flex items-baseline justify-end">
          <UserOutlined className="text-[10px]" />
          <span className="font-noto text-[10px] ml-1">ยังไม่มอบหมาย</span>
        </div>
        <span className="font-noto flex justify-end">7 นาที</span>
        <div className="flex justify-end">
          <Avatar className="bg-gradient " size={15}>
            <span className="font-noto">1</span>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
