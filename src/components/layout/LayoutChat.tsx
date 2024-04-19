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
} from "antd";
import EmtyChat from "@/components/EmtyChat";

import EmtyChatRoom from "@/components/EmtyChatRoom";
import ChatRoom from "@/components/chatPage/ChatRoom";

import { IoChatbubbleEllipses, IoLogIn, IoReader } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUser } from "react-icons/hi2";
import { FaAt, FaUserPlus } from "react-icons/fa";
import SearchModal from "@/components/chatPage/SearchModal";
import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { BsPinFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { text } from "stream/consumers";

import AddTagModal from "@/components/chatPage/AddTagModal";

import TagComponents from "@/components/chatPage/TagComponents";
import MessengeBoxComponents from "@/components/chatPage/MessengeBoxComponents";
const { Header, Footer, Sider, Content } = Layout;
import { tagType } from "../../app/chat/typeData";
import {
  messenge,
  options,
  tagSample,
  userListSample,
} from "../../app/chat/sampleData";
import ChatRoomUnlock from "@/components/chatPage/ChatRoomUnlock";
import LayoutPage from "./LayoutPage";
import { useRouter } from "next/navigation";

export default function LayoutChat(_prop: any) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const [openTagModal, setOpenTagModal] = useState(false);
  const [listTag, setListTag] = useState<tagType[]>([]);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const addTag = (value: any) => {
    console.log("addTag", value);
    const newlist = listTag;
    setListTag([]);
    newlist.push(value);
    console.log("newlist", newlist);
    setListTag(newlist);
  };

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <LayoutPage>
      <Layout
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }}>
        {/* ================================ MENU ================================ */}
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
            <span className="font-noto text-grey-lable ">สถานะ</span>
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
              onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
                router.push(key);
              }}
              style={{
                borderInlineEnd: "0",
                fontFamily: "var(--font-noto)",
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
                fontFamily: "var(--font-noto)",
              }}
              onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
                router.push(key);
              }}
            />
            <Divider className="mt-2 mb-4" />
            <span className="font-noto text-grey-lable">กล่องข้อความ</span>
            <Button
              type="link"
              className="flex items-center text-drak-grey p-0 font-noto"
              icon={<BiSolidPlusSquare />}>
              เพิ่มรายชื่อ
            </Button>
            <MessengeBoxComponents listTag={listTag} />
            <Divider className="mt-2 mb-4" />
            <span className="font-noto text-grey-lable">แท็ก</span>
            <Button
              type="link"
              className="flex items-center text-drak-grey p-0 font-noto"
              icon={<BiSolidPlusSquare />}
              onClick={() => {
                setOpenTagModal(true);
              }}>
              เพิ่มแท็ก
            </Button>
            <TagComponents listTag={listTag} />
          </div>
        </Sider>
        {/* ================================ CHAT LIST ================================ */}
        <div className="relative">
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
            onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        {_prop.children}
      </Layout>

      <AddTagModal
        setOpen={setOpenTagModal}
        open={openTagModal}
        addTag={addTag}
      />
    </LayoutPage>
  );
}
