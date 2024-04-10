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
export default function ChatRoom(_prop: any) {
  return (

    <div
      className=" px-2 py-4 flex items-center relative border-b-[1px] border-grey "
      onClick={() => {
        console.log({ _prop });
        _prop.setUserChatRoomLock(_prop.data);
      }}>
      {_prop.data.image ? (
        <Avatar size={42} src={_prop.data.image} />
      ) : (
        <Avatar size={42} icon={<UserOutlined />} />
      )}

      <div className="flex flex-col mx-2 w-[45%]">
        <div className="flex  items-center">
          {_prop.data.app === "Chatfast.app" ? (
            <MessengerLogo />
          ) : _prop.data.app === "Telegram" ? (
            <TelegramLogo />
          ) : _prop.data.app === "Tiktok" ? (
            <TiktokLogo />
          ) : _prop.data.app === "WhatsApp" ? (
            <WhatsAppLogo />
          ) : null}

          <span className="font-noto text-xs ml-1">{_prop.data.app}</span>
        </div>
        <span className="font-noto chat-name my-1">{_prop.data.name}</span>
        <span className="font-noto chat-messenge">{_prop.data.text}</span>
      </div>
      <div className="w-[35%]">
        <div className="flex items-baseline justify-end">
          <UserOutlined className="text-[10px]" />
          <span className="font-noto text-[10px] ml-1">
            {_prop.data.status}
          </span>
        </div>
        <span className="font-noto flex justify-end my-1">
          {_prop.data.time}
        </span>
        <div className="flex justify-end">
          <Avatar className="bg-gradient " size={15}>
            <span className="font-noto">{_prop.data.num}</span>
          </Avatar>
        </div>
      </div>
    </div>

  );
}
