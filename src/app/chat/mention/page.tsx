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

import { FaAt, FaUserPlus } from "react-icons/fa";
import SearchModal from "@/components/chatPage/SearchModal";

import ChatRoomUnlock from "@/components/chatPage/ChatRoomUnlock";
import LayoutChat from "@/components/layout/LayoutChat";
import { userListSample } from "../sampleData";

export default function ChatPage(_prop: any) {
  const [userChatRoom, setUserChatRoom] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [userList, setUserList] = useState<any[]>([]);

  const pinChat = () => {
    const newData = userList;

    const find = _.findIndex(newData, (a) => a.id === userChatRoom.id);

    newData[find] = { ...newData[find], pin: !newData[find].pin };

    setUserList([...newData]);
  };

  useEffect(() => {
    setUserList(userListSample);
  }, []);

  return (
    <LayoutChat>
      <div className="pt-4  w-[300px]">
        <div className="w-[300px] h-full bg-white border-r-[0.5px] overflow-y-auto">
          <div className="sticky top-0 bg-white z-1 pt-3">
            <div className="flex flex-col  px-3">
              <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
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

          <div className="py-2">
            {userList.length > 0 ? (
              <div>
                {_.map(userList, (item) => {
                  return (
                    <ChatRoom
                      key={item.id}
                      className="chat-room"
                      data={item}
                      setUserChatRoom={setUserChatRoom}
                    />
                  );
                })}
              </div>
            ) : (
              <EmtyChat text="ยังไม่มีการสนทนา" />
            )}
          </div>
        </div>
      </div>
      {/* ================================ CHAT LIST ================================ */}
      {/* ================================ CHAT ROOM ================================ */}
      <Layout
        style={{
          width: "100%",
          maxHeight: "100%",
        }}
        className=" bg-grey pt-4">
        {/* <EmtyChatRoom /> */}
        {_.isEmpty(userChatRoom) ? (
          <EmtyChatRoom text="กรุณาเลือกการสนทนาจากด้านซ้าย" />
        ) : (
          <ChatRoomUnlock
            setUserChatRoom={setUserChatRoom}
            userChatRoom={userChatRoom}
            pinChat={pinChat}
          />
        )}
      </Layout>
      {/* ================================ CHAT ROOM ================================ */}

      <SearchModal setOpen={setOpen} open={open} />
    </LayoutChat>
  );
}
