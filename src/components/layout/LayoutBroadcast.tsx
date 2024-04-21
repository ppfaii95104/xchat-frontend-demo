"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  UserOutlined,
  CheckSquareFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Input, Divider } from "antd";

import { IoChatbubbleEllipses, IoLogIn, IoReader } from "react-icons/io5";

import { HiMiniUser } from "react-icons/hi2";
import { FaAt, FaUserPlus } from "react-icons/fa";

import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { BsPinFill } from "react-icons/bs";

const { Header, Footer, Sider, Content } = Layout;

import { IoIosSettings } from "react-icons/io";

import LayoutPage from "./LayoutPage";
import { usePathname, useRouter } from "next/navigation";
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
} from "react-icons/tb";

export default function LayoutBroadcast(_prop: any) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const location = usePathname();
  return (
    <LayoutPage>
      <Layout
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
          width="220"
          style={{
            background: "#F4F5F9",
            padding: "25px 15px",
            marginRight: "16px",
            border: "none",
            fontFamily: "var(--font-noto)",
            display: collapsed ? "none" : "block",
          }}
          className="gray-menu">
          <div className="w-full h-full overflow-y-auto">
            <span className="font-noto text-drak-grey font-semibold">
              Broadcast - Line
            </span>

            <Menu
              mode="inline"
              selectedKeys={[location]}
              onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
                router.push(key);
              }}
              items={[
                {
                  key: "/broadcast/line/setting",
                  icon: <IoIosSettings />,
                  label: "ตั้งค่าบรอดแคสต์",
                },
                {
                  key: "/broadcast/line/admin",
                  icon: <HiMiniUser />,
                  label: "จัดการแอดมิน",
                },
                {
                  key: "/broadcast/line/oa",
                  icon: <FaAt />,
                  label: "จัดการไลน์",
                },
              ]}
              style={{
                borderInlineEnd: "0",
                fontFamily: "var(--font-noto)",
              }}
            />
            <Divider className="mt-2 mb-4" />
            <span className="font-noto text-drak-grey font-semibold">
              Broadcast - Telegram
            </span>

            <Menu
              selectedKeys={[location]}
              mode="inline"
              items={[
                {
                  key: "1",
                  icon: <IoIosSettings />,
                  label: "ตั้งค่าบรอดแคสต์",
                },
              ]}
              style={{
                borderInlineEnd: "0",
                fontFamily: "var(--font-noto)",
              }}
            />
          </div>
        </Sider>
        <div className=" relative">
          <Button
            className="flex justify-center items-center z-[2]"
            style={{
              background: "#F4F5F9",
              // border: "1px solid rgba(5, 5, 5, 0.06)",
              border: "none",
              position: "absolute",
              top: "20px",
              left: "-11px",
              padding: "3px 5px",
            }}
            onClick={() => {
              setCollapsed(!collapsed);
            }}>
            {collapsed ? (
              <TbSquareRoundedChevronRightFilled className="text-lg" />
            ) : (
              <TbSquareRoundedChevronLeftFilled className="text-lg" />
            )}
          </Button>{" "}
        </div>
        <Content className="bg-white rounded-md mt-4">{_prop.children}</Content>
        {/* ================================ CHAT ROOM ================================ */}
      </Layout>
    </LayoutPage>
  );
}
