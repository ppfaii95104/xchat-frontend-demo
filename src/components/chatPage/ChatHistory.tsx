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
export default function ChatHistory(_prop: any) {
  return (
    <div className=" p-2 flex items-center relative border-b-[1px] border-grey ">
      {_prop?.data.image ? (
        <Avatar size={40} src={_prop?.data.image} />
      ) : (
        <Avatar size={40} icon={<UserOutlined />} />
      )}

      <div className="flex flex-col mx-2 w-[45%]">
        <div className="flex  items-center">
          {_prop?.data.app === "Chatfast.app" ? (
            <MessengerLogo />
          ) : _prop?.data.app === "Telegram" ? (
            <TelegramLogo />
          ) : _prop?.data.app === "Tiktok" ? (
            <TiktokLogo />
          ) : _prop?.data.app === "WhatsApp" ? (
            <WhatsAppLogo />
          ) : null}

          <p className="font-noto text-xs ml-1 truncate">{_prop?.data.app}</p>
        </div>
        <p className="font-noto chat-name my-1 truncate">{_prop?.data.name}</p>
        <p className="font-noto chat-messenge truncate">{_prop?.data.text}</p>
      </div>
      <div className="w-[35%]">
        <div className="flex items-baseline justify-end">
          <UserOutlined className="text-[10px]" />
          <span className="font-noto text-[10px] ml-1">
            {_prop?.data.admin}
          </span>
        </div>
        <span className="font-noto flex justify-end my-1">
          {_prop?.data.time}
        </span>
      </div>
    </div>
  );
}
