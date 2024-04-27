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
export default function LeftMessenge(_prop: any) {
  return (
    <div className="w-[75%] p-3 my-2">
      <div className="mb-2">
        {_prop?.data?.image ? (
          <Avatar size={25} src={_prop?.data.image} />
        ) : (
          <Avatar size={25} icon={<UserOutlined />} />
        )}
        <span className="p-1 font-semibold text-xs ml-1">
          {_prop?.data?.name}
        </span>
        <span className="text-xs text-[#6D6D6D] ml-2">31 ม.ค. 67 | 12:38</span>
      </div>

      <div className="inline-block bg-grey-box px-4 py-2 rounded-b-2xl rounded-r-2xl relative left-[26px]">
        <span className="inline-block">It is a long established</span>
        <div className="border-l-2 border-[#6D6D6D] flex flex-col mt-1">
          <span className="text-[10px] text-[#595959] ml-2">แปลอัตโนมัติ</span>
          <span className="text-[12px] inline-block  ml-2">
            มันเป็นความจริงที่ยาวนานว่าผู้อ่านจะถูกทำให้สะเทือน
          </span>
        </div>
      </div>
    </div>
  );
}
