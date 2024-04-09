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
  Form,
} from "antd";

import { LeftOutlined, BarsOutlined } from "@ant-design/icons";
export default function TabSetting(_prop) {
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
            <span className="font-noto">ข้อมูลผู้ติดต่อ </span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 "
              icon={<LeftOutlined />}>
              เพิ่มข้อมูล
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
            <span className="font-noto">ข้อมูลผู้ติดต่อ </span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 "
              icon={<LeftOutlined />}>
              เพิ่มข้อมูล
            </Button>
          </div>
          <span className="font-noto text-sm text-drak-grey mt-3">
            {" "}
            เพิ่มแท็กกำกับการสนทนา
          </span>
        </div>
      </Form>
    </div>
  );
}
