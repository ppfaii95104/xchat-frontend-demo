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
  Tabs,
  Form,
  Tooltip,
} from "antd";

import {
  CheckCircleOutlined,
  PlaySquareFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
export default function ChatRoomUnlock(_prop) {
  return (
    <div className="w-full h-ful tab-color">
      <Form name="basic" autoComplete="off" layout="vertical">
        <Tabs defaultActiveKey="1" type="card">
          <Tabs.TabPane
            tab="ตอบกลับ"
            key="1"
            className="w-full h-[136px] bg-white p-2">
            <div className="w-full h-full bg-grey  p-2">
              <Form.Item
                name="password"
                className="mb-0"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <TextArea
                  rows={2}
                  placeholder="พิพม์ข้อความ (Shift + Enter เพื่อขึ้นบรรทัดใหม่ , Enter เพื่อส่ง)"
                  variant="borderless"
                />
              </Form.Item>
              <div className="flex justify-between my-1">
                <div className="flex">
                  <Button
                    type="primary"
                    className=" btn-icon-grey2 mr-2"
                    icon={<CheckCircleOutlined />}
                  />
                  <Button
                    type="primary"
                    className="btn-icon-grey2"
                    icon={<CheckCircleOutlined />}
                  />
                </div>
                <Button
                  className="btn-gradient"
                  icon={<CheckCircleOutlined />}></Button>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="คีย์ลัด"
            key="2"
            className="w-full h-[136px] bg-white p-2 ">
            <div className="w-full h-full overflow-auto">
              {" "}
              <div className="grid grid-cols-2 gap-2 ">
                <div className="flex justify-between items-center border rounded-md pl-2">
                  <span>
                    โปรโมชัน{" "}
                    <Tooltip title="แรลลี่ ยอมรับสแล็ก เตี๊ยมโรแมนติกเพรส ม้านั่งแชมเปญสตริงรัมเทวาธิราชซีเรียสเปียโนทอล์ควอร์รูม">
                      <InfoCircleOutlined className="text-xs" />
                    </Tooltip>
                  </span>

                  <Button
                    type="link"
                    className="flex items-center text-primary p-0 "
                    icon={<PlaySquareFilled />}></Button>
                </div>
                <div className="flex justify-between items-center border rounded-md pl-2">
                  <span>
                    โปรโมชัน{" "}
                    <Tooltip title="แรลลี่ ยอมรับสแล็ก เตี๊ยมโรแมนติกเพรส ม้านั่งแชมเปญสตริงรัมเทวาธิราชซีเรียสเปียโนทอล์ควอร์รูม">
                      <InfoCircleOutlined className="text-xs" />
                    </Tooltip>
                  </span>

                  <Button
                    type="link"
                    className="flex items-center text-primary p-0 "
                    icon={<PlaySquareFilled />}></Button>
                </div>{" "}
                <div className="flex justify-between items-center border rounded-md pl-2">
                  <span>
                    โปรโมชัน{" "}
                    <Tooltip title="แรลลี่ ยอมรับสแล็ก เตี๊ยมโรแมนติกเพรส ม้านั่งแชมเปญสตริงรัมเทวาธิราชซีเรียสเปียโนทอล์ควอร์รูม">
                      <InfoCircleOutlined className="text-xs" />
                    </Tooltip>
                  </span>

                  <Button
                    type="link"
                    className="flex items-center text-primary p-0 "
                    icon={<PlaySquareFilled />}></Button>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="โน๊ตส่วนตัว"
            key="3"
           className="w-full h-[136px] bg-white p-2">
            <div className="w-full h-full bg-[#FFFBEB]  p-2">
              <Form.Item
                name="password"
                className="mb-0"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <TextArea
                  rows={2}
                  placeholder="พิพม์ข้อความ (Shift + Enter เพื่อขึ้นบรรทัดใหม่ , Enter เพื่อส่ง)"
                  variant="borderless"
                />
              </Form.Item>
              <div className="flex justify-between my-1">
                <div className="flex">
                  <Button
                    type="primary"
                    className=" btn-icon-grey2 mr-2"
                    icon={<CheckCircleOutlined />}
                  />
                  <Button
                    type="primary"
                    className="btn-icon-grey2"
                    icon={<CheckCircleOutlined />}
                  />
                </div>
                <Button
                  className="btn-gradient"
                  icon={<CheckCircleOutlined />}></Button>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </div>
  );
}
