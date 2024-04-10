"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

import LayoutPage from "@/components/layout/LayoutPage";
import ChatPageLayout from "./ChatPageLayout";
import Image from "next/image";
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
} from "@ant-design/icons";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUsers, HiChartBarSquare } from "react-icons/hi2";
import { Layout, Menu, Button, theme, Input, Avatar, Select } from "antd";
import logo from "@/asset/logo/logo.png";
const { Header, Sider, Content } = Layout;

export default function ChatPage(_prop: any) {
  return (
    <Layout
      style={{
        width: "100%",
        height: "100%",
      }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={true}
        className="main-menu"
        style={{
          background: "#fff",
          borderInlineEnd: "1px solid rgba(5, 5, 5, 0.06)",
        }}
        width={50}>
        <div className="flex items-center justify-center my-5">
          <Image width={35} height={35} src={logo} alt={""} />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <IoChatbubbleEllipses />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <GrAnnounce />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <HiMiniUsers />,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <HiChartBarSquare />,
              label: "nav 4",
            },
            {
              key: "5",
              icon: <IoIosSettings />,
              label: "nav 5",
            },
          ]}
          style={{
            borderInlineEnd: "0",
            padding: "0 17px",
          }}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 20px",
            background: "#fff",
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <div className="flex items-center ">
            <Button
              style={{
                width: "25px",
                color: "#6D6D6D",
              }}
              type="link"
              block
              icon={<BellFilled />}></Button>
            <Input
              style={{
                width: "105px",
                margin: "0 10px",
              }}
              suffix={<SwapOutlined />}
            />
            <Avatar size={32} icon={<UserOutlined />} />
          </div>
        </Header>
        <Content
          style={{
            minHeight: 740,
            background: "#F4F5F9",
          }}>
          <ChatPageLayout />
        </Content>
      </Layout>
    </Layout>
  );
}
