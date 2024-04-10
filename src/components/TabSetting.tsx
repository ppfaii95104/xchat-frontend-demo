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
  Form,
  Checkbox,
} from "antd";
import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import { LeftOutlined, BarsOutlined } from "@ant-design/icons";
export default function TabSetting(_prop: any) {
  return (
    <div>
      <Form name="basic" autoComplete="off" layout="vertical">
        <Form.Item
          label="มอบหมาย"
          name="password"
          className="px-[15px] py-[5px] mb-2"
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input your password!',
          //   },
          // ]}
        >
          <Select
            showSearch
            placeholder="มอบหมายให้พนักงาน, ทีม หรือตัวเอง"
            optionFilterProp="children"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Form.Item>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <Form.Item
          label="ลำดับความสำคัญ"
          name="password"
          className="px-[15px] py-[5px] mb-2"
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input your password!',
          //   },
          // ]}
        >
          <Select
            showSearch
            placeholder="มอบหมายให้พนักงาน, ทีม หรือตัวเอง"
            optionFilterProp="children"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Form.Item>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <div className="px-[15px] py-[5px] mb-2 flex flex-col">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">แท็ก</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}>
              เพิ่มแท็ก
            </Button>
          </div>
          <span className="font-noto text-sm text-drak-grey mt-3">
            {" "}
            เพิ่มแท็กกำกับการสนทนา
          </span>
        </div>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <div className="px-[15px] py-[5px] mb-2 flex flex-col">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">รายชื่อผู้เข้าร่วม</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}>
              เพิ่มรายชื่อ
            </Button>
          </div>
          <span className="font-noto text-sm text-drak-grey mt-3">
            เพิ่มผู้เข้าร่วมกำกับการสนทนา
          </span>
        </div>
      </Form>
    </div>
  );
}
