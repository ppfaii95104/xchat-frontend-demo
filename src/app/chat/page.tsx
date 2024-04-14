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
import ChatRoom from "@/components/ChatRoom";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import ChatRoomLock from "@/components/ChatRoomLock";
import ChatRoomInput from "@/components/ChatRoomInput";
import TabSetting from "@/components/TabSetting";
import LeftMessenge from "@/components/LeftMessenge";
import RightMessenge from "@/components/RightMessenge";
import TimeMessenge from "@/components/TimeMessenge";
import NoteMessenge from "@/components/NoteMessenge";
import { IoChatbubbleEllipses, IoLogIn, IoReader } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUser } from "react-icons/hi2";
import { FaAt, FaUserPlus } from "react-icons/fa";
import SearchModal from "@/components/SearchModal";
import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { BsPinFill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { text } from "stream/consumers";

import AddTagModal from "@/components/AddTagModal";

import TagComponents from "@/components/TagComponents";
import MessengeBoxComponents from "@/components/MessengeBoxComponents";
const { Header, Footer, Sider, Content } = Layout;
import { tagType } from "./typeData";
import { messenge, options, tagSample, userListSample } from "./sampleData";
import ChatRoomUnlock from "@/components/ChatRoomUnlock";

export default function ChatPage(_prop: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [userChatRoomLock, setUserChatRoomLock] = useState<any>({});

  const [open, setOpen] = useState(false);

  const [openTagModal, setOpenTagModal] = useState(false);
  const [userList, setUserList] = useState<any[]>([]);
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
  useEffect(() => {
    setListTag(tagSample);
    setUserList(userListSample);
  }, []);

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Layout
        style={{
          width: "100%",
          maxHeight: "100%",
        }}>
        {!collapsed ? (
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
            }}
            className="gray-menu">
            <div className="w-full h-full overflow-y-auto">
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
              />
              <Divider className="mt-2 mb-4" />
              <span className="font-noto text-black">กล่องข้อความ</span>
              <Button
                type="link"
                className="flex items-center text-drak-grey p-0 font-noto"
                icon={<BiSolidPlusSquare />}>
                เพิ่มรายชื่อ
              </Button>
              <MessengeBoxComponents listTag={listTag} />
              <Divider className="mt-2 mb-4" />
              <span className="font-noto text-black">แท็ก</span>
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
        ) : null}
        <div className="pt-4  w-[300px]">
          <div className="w-[300px] relative">
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
          <div className="w-[300px] h-full bg-white border overflow-y-auto">
            <div className="sticky top-0 bg-white z-1 pt-3">
              <div className="flex flex-col  px-3">
                <span className="font-noto text-black text-base pl-2 font-semibold">
                  การสนทนาทั้งหมด
                </span>
                <span className="font-noto text-drak-grey pl-2 font-xs">
                  Inboxs : {userList.length}
                </span>
              </div>

              <Divider className="mt-2 mb-4" />
              <div className="flex px-3 pb-3">
                <Input
                  placeholder="ค้นหา..."
                  className="font-noto mr-2"
                  prefix={<SearchOutlined />}
                />{" "}
                <Button
                  style={{
                    background: "#F4F5F9",
                  }}
                  onClick={() => setOpen(true)}
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
                        d="M9.23727 14.51H3.8431C3.3831 14.51 3.00977 14.8825 3.00977 15.3433C3.00977 15.8042 3.3831 16.1767 3.8431 16.1767H9.23727C9.69727 16.1767 10.0706 15.8042 10.0706 15.3433C10.0706 14.8825 9.69727 14.51 9.23727 14.51Z"
                        fill="#595959"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.8896 12.6594C12.9579 12.6594 12.2046 13.4119 12.2046 15.3444C12.2046 17.2769 12.9579 18.0294 14.8896 18.0294C16.8221 18.0294 17.5746 17.2769 17.5746 15.3444C17.5746 13.4119 16.8221 12.6594 14.8896 12.6594Z"
                        fill="#595959"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1571 5.769H11.7646C11.3046 5.769 10.9313 6.1415 10.9313 6.60234C10.9313 7.06317 11.3046 7.43567 11.7646 7.43567H17.1571C17.6171 7.43567 17.9905 7.06317 17.9905 6.60234C17.9905 6.1415 17.6171 5.769 17.1571 5.769Z"
                        fill="#595959"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.11148 9.28699C8.04398 9.28699 8.79648 8.53449 8.79648 6.60116C8.79648 4.66949 8.04398 3.91699 6.11148 3.91699C4.17898 3.91699 3.42648 4.66949 3.42648 6.60116C3.42648 8.53449 4.17898 9.28699 6.11148 9.28699Z"
                        fill="#595959"
                      />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="py-2 px-3">
              {userList.length > 0 ? (
                <div>
                  {_.map(userList, (item) => {
                    return (
                      <ChatRoom
                        className="chat-room"
                        data={item}
                        setUserChatRoomLock={setUserChatRoomLock}
                      />
                    );
                  })}
                </div>
              ) : (
                <EmtyChat />
              )}
            </div>
          </div>
        </div>

        <Layout
          style={{
            width: "100%",
            maxHeight: "100%",
          }}
          className=" bg-grey pt-4">
          {/* <EmtyChatRoom /> */}
          {_.isEmpty(userChatRoomLock) ? (
            <EmtyChatRoom />
          ) : (
            <ChatRoomUnlock
              setUserChatRoomLock={setUserChatRoomLock}
              userChatRoomLock={userChatRoomLock}
            />
          )}
        </Layout>
      </Layout>
      <SearchModal setOpen={setOpen} open={open} />

      <AddTagModal
        setOpen={setOpenTagModal}
        open={openTagModal}
        addTag={addTag}
      />
    </>
  );
}
