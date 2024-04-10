"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import _ from "lodash";
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
  Form,
  Modal,
  Checkbox,
  Badge,
} from "antd";
import EmtyChat from "@/components/EmtyChat";

import EmtyChatRoom from "@/components/EmtyChatRoom";
import ChatRoom from "@/components/ChatRoom";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import ChatRoomLock from "@/components/ChatRoomLock";
import ChatRoomUnlock from "@/components/ChatRoomUnlock";
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
import ChangeAdminModal from "@/components/ChangeAdminModal";
import AddTagModal from "@/components/AddTagModal";
import AssignedModal from "@/components/AssignedModal";
const { Header, Footer, Sider, Content } = Layout;
type tagType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
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
const messenge = [
  { element: <TimeMessenge /> },
  { element: <LeftMessenge /> },
  { element: <RightMessenge /> },
  { element: <RightMessenge /> },
  { element: <TimeMessenge /> },
  { element: <NoteMessenge /> },
];
const tagSample: tagType[] = [
  { messenge: "TikTok", name: "สมาชิกใหม่", desc: "", color: "#4A84F6" },
  { messenge: "TikTok", name: "On precess", desc: "", color: "#F6A74A" },
  { messenge: "TikTok", name: "ยังไม่ว่าง", desc: "", color: "#F64A4A" },
];
const userList = [
  {
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "Salome Simoes",
    text: "Lorem ipsum dolor",
    app: "Tiktok",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
  },
  {
    name: "Trevor Virtue",
    text: "Lorem ipsum dolor",
    app: "WhatsApp",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
  },
];
export default function ChatPageLayout(_prop: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [userChatRoomLock, setUserChatRoomLock] = useState<any>({});
  const [listMessenge, setListMessenge] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [openChangeAdmin, setOpenChangeAdmin] = useState(false);
  const [openAssigned, setOpenAssigned] = useState(false);

  const [openTagModal, setOpenTagModal] = useState(false);
  const [listTag, setListTag] = useState<tagType[]>([]);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const addMessenge = (value: any) => {
    console.log("addMessenge", value);
    const newlist = listMessenge;
    setListMessenge([]);
    newlist.push(value);
    console.log("newlist", newlist);
    setListMessenge(newlist);
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
    setListMessenge(messenge);
    setListTag(tagSample);
  }, []);

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
          className="gray-menu overflow-auto">
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
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto"
            icon={<BiSolidPlusSquare />}>
            เพิ่มรายชื่อ
          </Button>
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto">
            <Checkbox className="flex items-center">
              <div className="p-[5px] bg-white rounded-lg">
                <MessengerLogo />
              </div>
            </Checkbox>
            Facebook
          </Button>
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto">
            <Checkbox className="flex items-center">
              <div className="p-[5px] bg-white rounded-lg">
                <TelegramLogo />
              </div>
            </Checkbox>
            Telegram
          </Button>
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto">
            <Checkbox className="flex items-center">
              <div className="p-[5px] bg-white rounded-lg">
                {" "}
                <TiktokLogo />
              </div>
            </Checkbox>
            Tiktok
          </Button>
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto">
            <Checkbox className="flex items-center">
              <div className="p-[5px] bg-white rounded-lg">
                <WhatsAppLogo />
              </div>
            </Checkbox>
            WhatsAppLogo
          </Button>
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
          {_.map(listTag, (item) => {
            console.log("🚀 ~ {_.map ~ item:", item);
            return (
              <Button
                type="link"
                className="flex items-center text-drak-grey p-0 font-noto">
                <Badge color={item.color} className="mr-2" />
                {item.name}
              </Button>
            );
          })}
        </Sider>
        <div className="mt-4 pt-2 px-3 w-[300px] h-auto bg-white border">
          <div className="flex flex-col">
            <span className="font-noto text-black text-base pl-2 font-semibold">
              การสนทนาทั้งหมด
            </span>
            <span className="font-noto text-drak-grey pl-2 font-xs">
              Inboxs : {userList.length}
            </span>
          </div>

          <Divider className="mt-2 mb-4" />
          <div className="flex">
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
          <div>
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
        <Layout className="h-full w-full bg-grey pt-4">
          {/* <EmtyChatRoom /> */}
          {_.isEmpty(userChatRoomLock) ? (
            <EmtyChatRoom />
          ) : (
            <>
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
                    <Button
                      type="link"
                      className="flex items-center text-black p-0"
                      onClick={() => {
                        setUserChatRoomLock({});
                      }}>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.93962 13.6507C7.65872 13.3695 7.50094 12.9882 7.50094 12.5907C7.50094 12.1932 7.65872 11.812 7.93962 11.5307L13.5956 5.87272C13.877 5.59146 14.2586 5.4335 14.6565 5.43359C15.0543 5.43369 15.4359 5.59183 15.7171 5.87322C15.9984 6.15462 16.1563 6.53622 16.1562 6.93407C16.1562 7.33193 15.998 7.71346 15.7166 7.99472L11.1206 12.5907L15.7166 17.1867C15.99 17.4695 16.1414 17.8483 16.1381 18.2416C16.1349 18.6349 15.9773 19.0112 15.6993 19.2895C15.4214 19.5677 15.0452 19.7256 14.6519 19.7292C14.2586 19.7328 13.8797 19.5818 13.5966 19.3087L7.93862 13.6517L7.93962 13.6507Z"
                          fill="#6D6D6D"
                        />
                      </svg>
                    </Button>
                    <div className="flex flex-col  w-[30%]">
                      <span className="font-noto chat-name">
                        {userChatRoomLock?.name}
                      </span>
                      <div className="flex  items-center">
                        {userChatRoomLock.app === "Chatfast.app" ? (
                          <MessengerLogo />
                        ) : userChatRoomLock.app === "Telegram" ? (
                          <TelegramLogo />
                        ) : userChatRoomLock.app === "Tiktok" ? (
                          <TiktokLogo />
                        ) : userChatRoomLock.app === "WhatsApp" ? (
                          <WhatsAppLogo />
                        ) : null}
                        <span className="font-noto text-xs ml-1">
                          {userChatRoomLock?.app}
                        </span>
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
                          icon={
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.8337 14.7573C15.8337 13.059 14.8437 11.5607 13.3337 10.6573V4.75732H13.7503C14.0818 4.75732 14.3998 4.62563 14.6342 4.39121C14.8686 4.15679 15.0003 3.83884 15.0003 3.50732C15.0003 3.1758 14.8686 2.85786 14.6342 2.62344C14.3998 2.38902 14.0818 2.25732 13.7503 2.25732H6.25033C5.9188 2.25732 5.60086 2.38902 5.36644 2.62344C5.13202 2.85786 5.00033 3.1758 5.00033 3.50732C5.00033 3.83884 5.13202 4.15679 5.36644 4.39121C5.60086 4.62563 5.9188 4.75732 6.25033 4.75732H6.66699V10.6573C5.15699 11.5607 4.16699 13.059 4.16699 14.7573H9.16699V18.0907C9.16699 18.549 9.54199 18.924 10.0003 18.924C10.4587 18.924 10.8337 18.549 10.8337 18.0907V14.7573H15.8337Z"
                                fill="#FF6C11"
                              />
                            </svg>
                          }
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.6471 8.3165C10.4904 8.24733 10.3071 8.2815 10.1854 8.40317L6.4279 12.1615C6.3404 12.2498 6.29624 12.3723 6.3079 12.4965C6.31957 12.6198 6.38624 12.7315 6.48874 12.8015C6.9429 13.1082 7.55124 13.4473 8.2454 13.4473C8.6079 13.4473 8.99457 13.3548 9.39457 13.1165C10.3804 12.4157 10.8012 11.1815 10.8962 8.71483C10.9037 8.54233 10.8037 8.38483 10.6471 8.3165Z"
                                fill="#6D6D6D"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.8438 0.755391C14.5996 0.511224 14.2038 0.511224 13.9596 0.755391L10.6605 4.05539C10.4355 2.97539 10.0371 2.29622 9.36463 1.82206C7.9613 0.993724 6.6738 1.98206 5.7338 2.70289C5.34964 2.99789 4.98713 3.27622 4.7138 3.36622C4.33964 3.48872 4.01547 3.52789 3.70214 3.56622C3.15297 3.63206 2.58464 3.70122 1.9638 4.22872C0.957136 5.08289 0.967136 6.47206 0.973802 7.47956C0.967136 8.49372 0.957136 9.88289 1.96547 10.7396C2.4613 11.1571 2.92214 11.2821 3.36714 11.3487L1.17297 13.5429C0.928802 13.7871 0.928802 14.1821 1.17297 14.4262C1.29547 14.5487 1.45547 14.6096 1.61464 14.6096C1.77464 14.6096 1.93464 14.5487 2.05714 14.4262L14.8438 1.63956C15.088 1.39539 15.088 0.999557 14.8438 0.755391Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_349_47700)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.887 8.40745C16.5036 8.54079 16.1036 8.60745 15.6786 8.60745C13.6036 8.60745 11.912 6.92412 11.912 4.84079C11.912 4.12412 12.1203 3.44912 12.4786 2.87412C11.6536 2.68245 10.7036 2.59912 9.60365 2.59912C4.13698 2.59912 2.19531 4.73245 2.19531 10.7325C2.19531 16.7325 4.13698 18.8575 9.60365 18.8575C15.0703 18.8575 17.012 16.7241 17.012 10.7325C17.012 9.88245 16.9703 9.10745 16.887 8.40745ZM6.58698 6.91579H8.87865C9.22865 6.91579 9.50365 7.19912 9.50365 7.54079C9.50365 7.88245 9.22865 8.16579 8.87865 8.16579H6.58698C6.23698 8.16579 5.96198 7.89079 5.96198 7.54079C5.96198 7.19079 6.23698 6.91579 6.58698 6.91579ZM12.6036 14.4325H6.58698C6.23698 14.4325 5.96198 14.1575 5.96198 13.8075C5.96198 13.4575 6.23698 13.1825 6.58698 13.1825H12.6036C12.9453 13.1825 13.2286 13.4658 13.2286 13.8075C13.2286 14.1491 12.9453 14.4325 12.6036 14.4325ZM12.6036 11.2991H6.58698C6.23698 11.2991 5.96198 11.0241 5.96198 10.6741C5.96198 10.3241 6.23698 10.0491 6.58698 10.0491H12.6036C12.9453 10.0491 13.2286 10.3325 13.2286 10.6741C13.2286 11.0158 12.9453 11.2991 12.6036 11.2991Z"
                                  fill="#6D6D6D"
                                />
                                <path
                                  d="M18.1954 4.84089C18.1954 5.87422 17.5704 6.75755 16.6788 7.14922C16.3704 7.28255 16.0371 7.35755 15.6788 7.35755C14.2954 7.35755 13.1621 6.23255 13.1621 4.84089C13.1621 4.24922 13.3704 3.69922 13.7288 3.26589C14.1871 2.69089 14.8871 2.32422 15.6788 2.32422C17.0621 2.32422 18.1954 3.45755 18.1954 4.84089Z"
                                  fill="#6D6D6D"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_349_47700">
                                  <rect
                                    width="16"
                                    height="16.5333"
                                    fill="white"
                                    transform="translate(2.19531 2.32422)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          }
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_349_36862)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.8449 2.73858C13.278 1.24697 11.1982 0.424316 8.97596 0.424316C6.75374 0.424316 4.66447 1.24697 3.09752 2.73858C0.647374 5.07997 -0.0268896 8.66889 1.41661 11.625C1.4451 11.7516 1.36912 12.2488 1.32164 12.6104C1.13171 13.9754 1.03674 14.9698 1.52107 15.4309C2.0054 15.8919 3.05003 15.8015 4.48403 15.6207C4.8639 15.5665 5.38622 15.5032 5.47169 15.5123C6.5828 16.0004 7.76988 16.2445 8.95697 16.2445C9.87815 16.2445 10.7993 16.0999 11.673 15.8106C8.64358 15.0783 8.11176 14.2466 7.9978 13.5957C7.95032 13.2884 7.94082 12.52 8.94747 11.9685C10.0111 11.3809 15.1013 9.64522 17.1051 9.90739C17.6464 7.39424 16.8867 4.68221 14.8449 2.73858ZM5.75659 9.40114C5.31974 9.40114 4.95887 9.06666 4.95887 8.65081C4.95887 8.23497 5.31024 7.89144 5.74709 7.89144H5.75659C6.19343 7.89144 6.54481 8.22593 6.54481 8.65081C6.54481 9.0757 6.19343 9.40114 5.75659 9.40114ZM8.92848 9.40114C8.49163 9.40114 8.13076 9.06666 8.13076 8.65081C8.13076 8.23497 8.48213 7.89144 8.91898 7.89144H8.92848C9.36532 7.89144 9.7167 8.22593 9.7167 8.65081C9.7167 9.0757 9.36532 9.40114 8.92848 9.40114ZM12.1004 9.40114C11.6635 9.40114 11.3026 9.06666 11.3026 8.65081C11.3026 8.23497 11.654 7.89144 12.0909 7.89144C12.5277 7.89144 12.8791 8.22593 12.8791 8.65081C12.8791 9.0757 12.5277 9.40114 12.0909 9.40114H12.1004Z"
                                  fill="#6D6D6D"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.2346 18.2875C15.0446 18.5949 14.8357 18.7576 14.5888 18.7576C14.5603 18.7576 14.5318 18.7486 14.5033 18.7486C13.7151 18.6311 13.1168 16.6332 12.8319 15.5122L15.0541 13.3968C15.1776 13.2793 15.1776 13.0804 15.0541 12.9629C14.9307 12.8364 14.7217 12.8364 14.5888 12.9629L12.3951 15.0512C11.227 14.789 9.07122 14.2105 8.93827 13.4511C8.89079 13.1889 9.05223 12.9539 9.4226 12.755C10.7236 12.0408 15.472 10.6215 16.8775 10.7752C16.9915 10.7843 17.0864 10.8023 17.1529 10.8385C17.1909 10.8566 17.2289 10.8927 17.2479 10.9289C17.7322 11.7877 16.0418 16.9496 15.2346 18.2875Z"
                                  fill="#6D6D6D"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_349_36862">
                                  <rect
                                    width="16.6667"
                                    height="18.3333"
                                    fill="white"
                                    transform="translate(0.666504 0.424316)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          }
                        />
                        <Button
                          onClick={() => {
                            setOpenChangeAdmin(true);
                          }}
                          type="primary"
                          className="btn-icon-grey"
                          icon={<FaUser />}
                        />
                      </div>
                    </div>
                  </div>
                </Header>
                <Content className="h-full relative bg-grey  w-full  p-2 ">
                  <Card bordered={false} className="w-full flex fix z-1">
                    <div className="flex items-center">
                      <span className="font-noto chat-name w-[40%]">
                        เคส : 31 ม.ค. 67 | 12:38
                      </span>
                      <div className="flex justify-end w-[60%]">
                        <Button
                          className="font-noto flex justify-center items-center"
                          icon={<CheckSquareFilled />}>
                          จบแชท
                        </Button>
                        <Button
                          className="mx-1 font-noto flex justify-center items-center"
                          onClick={() => {
                            // setOpenAssigned(true);
                          }}>
                          <IoLogIn className="text-lg" />
                          ส่งต่อให้...
                        </Button>
                        <Button
                          className="btn-gradient font-noto flex justify-center items-center"
                          icon={<FaUser />}>
                          มอบหมายให้ฉัน
                        </Button>
                      </div>
                    </div>
                  </Card>
                  <div className="overflow-hidden relative w-full h-full top-[-45px]">
                    <div className="w-full p-2 h-full absolute right-0 overflow-scroll">
                      {_.map(listMessenge, (item) => {
                        return item.element;
                      })}
                    </div>
                  </div>
                </Content>
                <Footer className="h-[180px] border p-0 z-1">
                  {/* <ChatRoomLock /> */}
                  <ChatRoomUnlock addMessenge={addMessenge} />
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
                    {" "}
                    {userChatRoomLock?.image ? (
                      <Avatar size={73} src={userChatRoomLock.image} />
                    ) : (
                      <Avatar size={73} icon={<UserOutlined />} />
                    )}
                    <div className="flex flex-col  ml-2 justify-between">
                      <span className="font-noto name text-black">
                        {" "}
                        {userChatRoomLock?.name}
                      </span>
                      <div className="grid grid-cols-4 gap-x-2">
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_349_37181)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.9738 3.03158C13.4121 1.46042 11.3298 0.599121 9.11506 0.599121C6.90029 0.599121 4.81804 1.46042 3.25634 3.03158C0.814424 5.4735 0.142423 9.23102 1.58107 12.3355C1.60947 12.4585 1.54321 12.9791 1.48643 13.3577C1.29713 14.7869 1.20248 15.828 1.68519 16.3202C2.16789 16.8029 3.20902 16.6988 4.63821 16.5095C5.0168 16.4621 5.54683 16.3959 5.62255 16.3959C6.73939 16.9165 7.92249 17.1625 9.09613 17.1625C10.1089 17.1625 11.1027 16.9827 12.0491 16.623H11.68C10.5064 16.623 9.55044 15.6671 9.55044 14.4935C9.55044 13.3198 10.5064 12.3639 11.68 12.3639H12.9388V11.1145C12.9388 9.94089 13.8948 8.98494 15.0684 8.98494C16.1379 8.98494 17.0182 9.77052 17.1696 10.8022C17.8132 8.09525 17.075 5.13276 14.9738 3.03158ZM5.90649 9.99767C5.47111 9.99767 5.11145 9.64748 5.11145 9.2121C5.11145 8.77672 5.46164 8.42652 5.89703 8.42652H5.90649C6.34187 8.42652 6.69207 8.77672 6.69207 9.2121C6.69207 9.64748 6.34187 9.99767 5.90649 9.99767ZM9.06773 9.99767C8.63235 9.99767 8.27269 9.64748 8.27269 9.2121C8.27269 8.77672 8.62289 8.42652 9.05827 8.42652H9.06773C9.50312 8.42652 9.85331 8.77672 9.85331 9.2121C9.85331 9.64748 9.50312 9.99767 9.06773 9.99767ZM12.229 9.99767C11.7936 9.99767 11.4339 9.64748 11.4339 9.2121C11.4339 8.77672 11.7841 8.42652 12.2195 8.42652H12.229C12.6644 8.42652 13.0146 8.77672 13.0146 9.2121C13.0146 9.64748 12.6644 9.99767 12.229 9.99767Z"
                                  fill="#595959"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M18.4569 15.2034H15.7783V17.8725C15.7783 18.2606 15.4565 18.5824 15.0685 18.5824C14.6804 18.5824 14.3586 18.2606 14.3586 17.8725V15.2034H11.6801C11.292 15.2034 10.9702 14.8816 10.9702 14.4936C10.9702 14.1055 11.292 13.7837 11.6801 13.7837H14.3586V11.1146C14.3586 10.7266 14.6804 10.4048 15.0685 10.4048C15.4565 10.4048 15.7783 10.7266 15.7783 11.1146V13.7837H18.4569C18.8449 13.7837 19.1667 14.1055 19.1667 14.4936C19.1667 14.8816 18.8449 15.2034 18.4569 15.2034Z"
                                  fill="#595959"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M18.4569 15.2034H15.7783V17.8725C15.7783 18.2606 15.4565 18.5824 15.0685 18.5824C14.6804 18.5824 14.3586 18.2606 14.3586 17.8725V15.2034H11.6801C11.292 15.2034 10.9702 14.8816 10.9702 14.4936C10.9702 14.1055 11.292 13.7837 11.6801 13.7837H14.3586V11.1146C14.3586 10.7266 14.6804 10.4048 15.0685 10.4048C15.4565 10.4048 15.7783 10.7266 15.7783 11.1146V13.7837H18.4569C18.8449 13.7837 19.1667 14.1055 19.1667 14.4936C19.1667 14.8816 18.8449 15.2034 18.4569 15.2034Z"
                                  fill="#595959"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_349_37181">
                                  <rect
                                    width="18.3333"
                                    height="17.9831"
                                    fill="white"
                                    transform="translate(0.833496 0.599121)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          }
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={<FaUserPlus className="text-[20px]" />}
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={<RiEdit2Fill className="text-[20px]" />}
                        />
                        <Button
                          type="primary"
                          className="btn-icon-grey"
                          icon={
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.3358 9.42415C11.8758 9.42415 11.4992 9.05165 11.4992 8.59082C11.4992 8.12999 11.8683 7.75749 12.3283 7.75749H12.3358C12.7958 7.75749 13.1692 8.12999 13.1692 8.59082C13.1692 9.05165 12.7958 9.42415 12.3358 9.42415ZM9.00333 9.42415C8.54333 9.42415 8.16667 9.05165 8.16667 8.59082C8.16667 8.12999 8.53583 7.75749 8.99583 7.75749H9.00333C9.46333 7.75749 9.83667 8.12999 9.83667 8.59082C9.83667 9.05165 9.46333 9.42415 9.00333 9.42415ZM5.67 9.42415C5.21 9.42415 4.83333 9.05165 4.83333 8.59082C4.83333 8.12999 5.2025 7.75749 5.6625 7.75749H5.67C6.13 7.75749 6.50333 8.12999 6.50333 8.59082C6.50333 9.05165 6.13 9.42415 5.67 9.42415ZM9 0.46582C3.00083 0.46582 0.875 2.59249 0.875 8.59082C0.875 14.5892 3.00083 16.7158 9 16.7158C14.9992 16.7158 17.125 14.5892 17.125 8.59082C17.125 2.59249 14.9992 0.46582 9 0.46582Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
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
                      icon={<PlusOutlined />}>
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
            </>
          )}
        </Layout>
      </Layout>
      <SearchModal setOpen={setOpen} open={open} />
      <ChangeAdminModal setOpen={setOpenChangeAdmin} open={openChangeAdmin} />
      <AddTagModal
        setOpen={setOpenTagModal}
        open={openTagModal}
        addTag={addTag}
      />
      <AssignedModal setOpen={setOpenAssigned} open={openAssigned} />
    </>
  );
}
