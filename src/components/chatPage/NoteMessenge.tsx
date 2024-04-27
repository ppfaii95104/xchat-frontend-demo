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

import { UserOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
export default function NoteMessenge(_prop: any) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full">
        <div className="w-[100%] py-2 pr-3 pl-[25%] my-2 ">
          <div className="mb-2 flex items-center justify-end">
            <span className="text-xs text-[#6D6D6D] ml-2">
              31 ม.ค. 67 | 12:38
            </span>
            <span className="p-1 font-semibold text-xs ml-1">Admin</span>
            {_prop?.data?.image ? (
              <Avatar size={25} src={_prop?.data.image} />
            ) : (
              <Avatar size={25} icon={<UserOutlined />} />
            )}
          </div>
          <div className="mb-2 flex items-center justify-end relative right-[25px]">
            <div className="inline-block bg-[#FEF3C7]  rounded-b-2xl rounded-l-2xl ">
              <div className="inline-block px-4 py-2 max-h-[200px] overflow-hidden">
                <span className="inline-block">{_prop?.messenge}</span>
              </div>
              <Divider className="my-1" />
              <Button
                type="link"
                className="flex items-center text-drak-grey px-4 py-2 font-noto"
                onClick={() => {
                  setOpen(!open);
                }}
                icon={
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.64627 7.04851H3.83293C3.55693 7.04851 3.33293 6.82451 3.33293 6.54851C3.33293 6.27251 3.55693 6.04851 3.83293 6.04851H8.64627C8.92227 6.04851 9.14627 6.27251 9.14627 6.54851C9.14627 6.82451 8.92227 7.04851 8.64627 7.04851ZM8.64627 9.55451H3.83293C3.55693 9.55451 3.33293 9.33051 3.33293 9.05451C3.33293 8.77851 3.55693 8.55451 3.83293 8.55451H8.64627C8.92227 8.55451 9.14627 8.77851 9.14627 9.05451C9.14627 9.33051 8.92227 9.55451 8.64627 9.55451ZM3.83293 3.54118H5.6696C5.9456 3.54118 6.1696 3.76518 6.1696 4.04118C6.1696 4.31718 5.9456 4.54118 5.6696 4.54118H3.83293C3.55693 4.54118 3.33293 4.31718 3.33293 4.04118C3.33293 3.76518 3.55693 3.54118 3.83293 3.54118ZM6.2496 0.0898438C1.87293 0.0898438 0.322266 1.79118 0.322266 6.59051C0.322266 11.3892 1.87293 13.0905 6.2496 13.0905C10.6256 13.0905 12.1769 11.3892 12.1769 6.59051C12.1769 1.79118 10.6256 0.0898438 6.2496 0.0898438Z"
                      fill="#ECB903"
                    />
                  </svg>
                }>
                โน๊ตส่วนตัว
                {open ? <UpOutlined /> : <DownOutlined />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
