"use client"; // This is a client component 👈🏽
import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  Form,
  Checkbox,
  Space,
  InputRef,
  FormProps,
  Segmented,
  Tag,
  SelectProps,
} from "antd";
import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import {
  LeftOutlined,
  BarsOutlined,
  SearchOutlined,
  UserOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import { historyListSample } from "@/app/chat/sampleData";
import ChatHistory from "./ChatHistory";

type FieldType = {
  search?: string;
  type?: string;
  assign?: number;
  priority?: number;
};

export default function TabHistory(_prop: any) {
  const [listHistory, setListHistory] = useState<any>([]);
  useEffect(() => {
    setListHistory(historyListSample);
  }, []);
  return (
    <div className="p-[5px] mb-2">
      {" "}
      {_.isEmpty(listHistory) ? (
        <span className="font-noto text-sm text-drak-grey my-5 flex justify-center">
          {" "}
          ยังไม่มีประวัติการสนทนา
        </span>
      ) : (
        <>
          {_.map(listHistory, (item) => {
            return (
              <ChatHistory key={item.id} className="chat-room" data={item} />
            );
          })}
        </>
      )}
    </div>
  );
}
