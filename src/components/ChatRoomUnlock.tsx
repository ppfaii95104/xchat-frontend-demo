"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

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
  FormProps,
} from "antd";

import {
  CheckCircleOutlined,
  PlaySquareFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";
import LeftMessenge from "@/components/LeftMessenge";
import RightMessenge from "@/components/RightMessenge";
import TimeMessenge from "@/components/TimeMessenge";
import NoteMessenge from "@/components/NoteMessenge";
const { TextArea } = Input;
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { TfiClip } from "react-icons/tfi";
type FieldType = {
  messnge?: string;
  note?: string;
};
export default function ChatRoomUnlock(_prop: any) {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log({ values });
    if (values.messnge) {
      _prop.addMessenge({
        element: <RightMessenge messenge={values.messnge} />,
      });
    } else if (values.note) {
      _prop.addMessenge({
        element: <NoteMessenge messenge={values.messnge} />,
      });
    }
  };

  return (
    <div className="w-full h-ful tab-color">
      <Form
        name="basic"
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        form={form}>
        <Tabs defaultActiveKey="1" type="card">
          <Tabs.TabPane
            tab="ตอบกลับ"
            key="1"
            className="w-full h-[136px] bg-white p-2">
            <div className="w-full h-full bg-grey  p-2 rounded-md">
              <Form.Item<FieldType>
                name="messnge"
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
              <div className="flex justify-between my-4">
                <div className="flex">
                  <Button
                    type="primary"
                    className=" btn-icon-grey2 mr-2"
                    icon={<BsFillEmojiSmileFill />}
                  />
                  <Button
                    type="primary"
                    className="btn-icon-grey2"
                    icon={<TfiClip />}
                  />
                </div>
                <Button
                  className="btn-gradient"
                  onClick={() => {
                    form.submit();
                  }}
                  icon={
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.1378 2.87545C18.0986 2.80212 18.0395 2.74212 17.9662 2.70295C16.2278 1.77795 5.82865 5.00128 3.13865 6.55295C2.43782 6.95712 2.12532 7.43212 2.21115 7.96212C2.45865 9.49712 6.59448 10.6604 8.83865 11.1813L13.0528 6.96795C13.297 6.72378 13.6928 6.72378 13.937 6.96795C14.1812 7.21212 14.1812 7.60795 13.937 7.85212L9.68198 12.1054C10.2162 14.3729 11.367 18.3854 12.8778 18.6288C12.9345 18.6379 12.9911 18.643 13.047 18.643C13.5087 18.643 13.9253 18.3263 14.2862 17.7013C15.8378 15.0138 19.0637 4.61628 18.1378 2.87545Z"
                        fill="white"
                      />
                    </svg>
                  }></Button>
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
              <Form.Item<FieldType>
                name="note"
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
