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
  Tag,
  Badge,
} from "antd";

import { UserOutlined } from "@ant-design/icons";
import { SiLine } from "react-icons/si";
import { HiMiniUser } from "react-icons/hi2";
import _ from "lodash";
export default function LineBox(_prop: any) {
  return (
    <div
      className=" px-2 py-4 flex items-center relative border-b-[1px] border-grey "
      onClick={() => {
        _prop?.setLineId(_prop?.data);
      }}>
      {_prop?.data.image ? (
        <Avatar size={50} src={_prop?.data.image} />
      ) : (
        <Avatar size={50} icon={<UserOutlined />} />
      )}

      <div className="flex flex-col ml-4 mr-2 w-[80%]">
        <div className="flex  items-center">
          <SiLine className="text-[#3ACE01] p-[2px] bg-white text-base" />
          <span className="font-noto text-xs ml-1">{_prop?.data.idLine}</span>
        </div>
        <span className="font-noto chat-name my-1">{_prop?.data.name}</span>
        <div className="flex  items-center">
          <Tag color="#EDF3FF">
            <span className="text-drak-grey font-noto flex items-center">
              <HiMiniUser className="text-[#4A84F6] mr-1" />
              {_prop?.data.account} คน
            </span>
          </Tag>
          <Tag color="var(--success-light)">
            <span className="text-drak-grey font-noto">
              <Badge color="var(--success)" className="mr-1" size="small" />
              พร้อมใช้งาน
            </span>
          </Tag>
        </div>
      </div>
    </div>
  );
}
