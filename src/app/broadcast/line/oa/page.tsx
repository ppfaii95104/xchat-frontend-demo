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
  Table,
  TableColumnsType,
  ConfigProvider,
  Tag,
} from "antd";

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
import EmtyChat from "@/components/EmtyChat";
import LayoutBroadcast from "@/components/layout/LayoutBroadcast";

import { userListSample } from "../../sampleData";

import EmtyChatRoom from "@/components/EmtyChatRoom";
import LineBox from "@/components/broadcast/LineBox";
import CreateBroadcast from "@/components/broadcast/CreateBroadcast";
import ManageLine from "@/components/broadcast/ManageLine";
interface DataType {
  key: React.Key;
  line: string;
  admin: string;
  time: string;
  status: string;
  progress: number;
  total: number;
  creact_date: string;
  update_date: string;
}

export default function PageCreateBroadcast(_prop: any) {
  const [userList, setUserList] = useState<any[]>([]);
  const [lineId, setLineId] = useState<any>({});

  useEffect(() => {
    setUserList(userListSample);
  }, []);
  return (
    <LayoutBroadcast>
      <div className="overflow-x-auto relative w-full h-full">
        {" "}
        <div className="px-5 pt-5 pb-3 flex justify-between items-center border-t-[0.5px] border-b-[0.5px]  overflow-x-auto">
          <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
            จัดการไลน์
          </span>
        </div>
        <div
          className="flex w-full relative"
          style={{
            height: "calc(100% - 56px)",
          }}>
          {/* ================================ CHAT LIST ================================ */}
          <div className="w-[300px] h-full">
            <div className="w-[300px] h-full bg-white border-r-[0.5px] overflow-y-auto">
              <div className="sticky top-0 bg-white z-1 pt-3">
                <div className="flex px-3 pb-3">
                  <Input
                    placeholder="ค้นหา..."
                    className="font-noto mr-2"
                    prefix={<SearchOutlined />}
                  />{" "}
                </div>
                <div className="px-5 flex justify-between items-center">
                  <span className="font-noto text-drak-grey w-max">
                    เลือกไลน์ที่จะบรอดแคสต์
                  </span>
                  <Button
                    type="link"
                    className="flex items-center text-primary p-0 font-noto"
                    icon={<BiSolidPlusSquare />}
                    onClick={() => {}}>
                    รีโหลดไลน์
                  </Button>
                </div>
              </div>

              <div className=" px-3">
                {userList.length > 0 ? (
                  <div>
                    {_.map(userList, (item) => {
                      return (
                        <LineBox
                          key={item.id}
                          className="chat-room"
                          data={item}
                          lineId={lineId}
                          setLineId={setLineId}
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
          <Content className="h-full relative bg-white  w-full  pt-4">
            {_.isEmpty(lineId) ? (
              <EmtyChat text="กรุณาเลือกไลน์ที่จะบรอดแคสต์จากด้านซ้าย" />
            ) : (
              <ManageLine data={lineId} />
            )}
          </Content>
          {/* ================================ CHAT ROOM ================================ */}
        </div>
      </div>
    </LayoutBroadcast>
  );
}
