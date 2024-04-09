"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

import {
  UploadOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationFilled,
  SearchOutlined,
  BarsOutlined,
  LeftOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  Input,
  Divider,
  Select,
  Tag,
  Card,
  Avatar,
  Tabs,
  Form,
} from "antd";
import EmtyChat from "@/components/EmtyChat";

import EmtyChatRoom from "@/components/EmtyChatRoom";
import ChatRoom from "@/components/ChatRoom";
import MessengerLogo from "@/components/MessengerLogo";
import ChatRoomLock from "@/components/ChatRoomLock";
import ChatRoomUnlock from "@/components/ChatRoomUnlock";
import TabSetting from "@/components/TabSetting";

import { IoChatbubbleEllipses, IoLogIn } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUser } from "react-icons/hi2";
import { FaAt } from "react-icons/fa";
import { BiSolidFile } from "react-icons/bi";
import { BsPinFill } from "react-icons/bs";
const { Header, Footer, Sider, Content } = Layout;

export default function ChatPageLayout(_prop: any) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const options = [
    {
      label: "ทั้งหมด",
      value: "all",
    },
    {
      label: "เปิด และยังไม่ได้อ่าน",
      value: "1",
    },
    {
      label: "เสร็จสิ้น",
      value: "2",
    },
    {
      label: "กำลังร้องขอ",
      value: "3",
    },
    {
      label: "หลับ",
      value: "4",
    },
  ];

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Layout className="h-full">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width="220"
          style={{
            background: "#F4F5F9",

            padding: "25px 15px",
            marginRight: "16px",
            border: "none",
            fontFamily: "Noto Sans Thai",
          }}
          className="gray-menu">
          <Button
            className="flex justify-center items-center"
            style={{
              background: "#F4F5F9",
              // border: "1px solid rgba(5, 5, 5, 0.06)",
              border: "none",
              position: "absolute",
              top: "28px",
              right: "-28px",
              padding: "3px 5px",
            }}
            onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <span className="font-noto text-black ">สถานะ</span>
          <Select
            // mode="multiple"
            allowClear
            className="w-full my-3 font-noto"
            placeholder="Please select"
            defaultValue={["all"]}
            onChange={handleChange}
            options={options}
            maxTagCount="responsive"
          />
          <Divider className="my-1" />
          <Menu
            mode="inline"
            items={[
              {
                key: "1",
                icon: <GrAnnounce />,
                label: "บรอดแคสต์",
              },
            ]}
            style={{
              borderInlineEnd: "0",
              fontFamily: "Noto Sans Thai",
            }}
          />
          <Divider className="my-1" />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <IoChatbubbleEllipses />,
                label: "ทั้งหมด",
              },
              {
                key: "2",
                icon: <HiMiniUser />,
                label: "ของฉัน",
              },
              {
                key: "3",
                icon: <FaAt />,
                label: "การกล่าวถึง",
              },
              {
                key: "4",
                icon: <BiSolidFile />,
                label: "ไม่ได้รับมอบหมาย",
              },
              {
                key: "5",
                icon: <IoLogIn />,
                label: "ไม่ได้เข้าร่วม",
              },
              {
                key: "6",
                icon: <BsPinFill />,
                label: "ปักหมุด",
              },
            ]}
            style={{
              borderInlineEnd: "0",
              fontFamily: "Noto Sans Thai",
            }}
          />
          <Divider className="mt-2 mb-4" />
          <span className="font-noto text-black">กล่องข้อความ</span>
        </Sider>
        <div className="mt-4 pt-2 px-3 w-[300px] h-auto bg-white border">
          <div className="flex flex-col">
            <span className="font-noto text-black pl-2">การสนทนาทั้งหมด</span>
            <span className="font-noto text-drak-grey pl-2 font-xs">
              Inboxs : 5
            </span>
          </div>

          <Divider className="mt-2 mb-4" />
          <div className="flex">
            <Input
              placeholder="default size"
              className="font-noto mr-2"
              prefix={<SearchOutlined />}
            />{" "}
            <Button
              style={{
                background: "#F4F5F9",
              }}
              icon={<BarsOutlined />}
            />
          </div>
          <div>
            <ChatRoom />
            {/* <EmtyChat /> */}
          </div>
        </div>
        <Layout className="h-full w-full bg-grey pt-4">
          {/* <EmtyChatRoom /> */}

          <Layout
            style={{
              background: "#FFF",
              border: "none",
              fontFamily: "Noto Sans Thai",
            }}>
            <Header
              className="h-[60px] bg-white px-4 py-2"
              style={{ lineHeight: "normal" }}>
              <div className="flex items-center">
                <Button type="link" className="flex items-center text-black">
                  <LeftOutlined />
                </Button>
                <div className="flex flex-col  w-[30%]">
                  <span className="font-noto chat-name">Jane Meldrum</span>
                  <div className="flex  items-center">
                    <MessengerLogo />
                    <span className="font-noto text-xs ml-1">Chatfast.app</span>
                  </div>
                </div>
                <div className="mx-2 w-[25%]">
                  <Tag
                    icon={<CheckCircleOutlined />}
                    bordered={false}
                    color="success">
                    success
                  </Tag>
                </div>
                <div className="flex justify-end">
                  <div className="grid grid-cols-5 gap-x-1">
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                  </div>
                </div>
              </div>
            </Header>
            <Content className="overflow-hidden relative bg-grey  w-full ">
              <div className="w-full p-2 h-full absolute right-0 top-0 overflow-scroll">
                <Card bordered={false} className="w-full p-0 flex fix">
                  <div className="flex items-center">
                    <span className="font-noto chat-name w-[40%]">
                      เคส : 31 ม.ค. 67 | 12:38
                    </span>
                    <div className="flex justify-end w-[60%]">
                      <Button icon={<CheckCircleOutlined />}>จบแชท</Button>
                      <Button className="mx-1" icon={<CheckCircleOutlined />}>
                        ส่งต่อให้...
                      </Button>
                      <Button
                        className="btn-gradient"
                        icon={<CheckCircleOutlined />}>
                        มอบหมายให้ฉัน
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </Content>
            <Footer className="h-[180px] border p-0">
              {/* <ChatRoomLock /> */}
              <ChatRoomUnlock />
            </Footer>
          </Layout>
          <Sider
            width="280"
            style={{
              background: "#FFF",
              fontFamily: "Noto Sans Thai",
              overflow: "hidden",
              position: "relative",
              width: " 100%",
              borderInlineStart: "1px solid rgba(5, 5, 5, 0.06)",
            }}>
            <div className="w-full h-full absolute right-0 top-0 overflow-scroll pt-[25px]">
              <div className="flex px-[15px] py-[5px]">
                <Avatar size={73} icon={<UserOutlined />} />
                <div className="flex flex-col  ml-2 justify-between">
                  <span className="font-noto name ">Jane Meldrum</span>
                  <div className="grid grid-cols-4 gap-x-2">
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                    <Button
                      type="primary"
                      className="btn-icon-grey"
                      icon={<CheckCircleOutlined />}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-[15px] py-[5px]">
                <span className="font-noto text-sm font-medium">
                  ข้อมูลผู้ติดต่อ 
                </span>
                <span className="font-noto text-sm text-drak-grey mt-3">
                  {" "}
                  เพิ่มรายละเอียดเกี่ยวกับผู้คน เช่น ข้อมูลติดต่อ
                </span>
                <Button
                  type="link"
                  className="flex items-center text-primary p-0 "
                  icon={<LeftOutlined />}>
                  เพิ่มข้อมูล
                </Button>
              </div>
              <Divider className="my-2" />
              <div className="tab-wrap">
                <Tabs defaultActiveKey="1" centered>
                  <Tabs.TabPane tab="ตั้งค่า" key="1">
                    <TabSetting />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="ข้อมูล" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="ประวัติแชท" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </Sider>
        </Layout>
      </Layout>
    </>
  );
}
