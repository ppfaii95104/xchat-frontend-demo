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
                  />
                </div>
                <div className="w-full px-3 mb-2">
                  <div className="w-full bg-primary-light px-3 rounded-md">
                    <Button
                      type="link"
                      className="flex items-center text-drak-grey p-0 font-noto"
                      icon={<BiSolidPlusSquare />}
                      onClick={() => {}}>
                      หมายเหตุ
                    </Button>
                  </div>
                </div>
                <div className="px-5 flex justify-between items-center">
                  <span className="font-noto text-drak-grey w-max">
                    เลือกไลน์ที่จะบรอดแคสต์
                  </span>
                  <Button
                    type="link"
                    className="flex items-center text-primary p-0 font-noto"
                    icon={
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_593_1902)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.541 6.10993C12.541 1.69993 10.9777 0.136597 6.56768 0.136596C2.15768 0.136596 0.600183 1.69993 0.600183 6.10993C0.600183 10.5199 2.15768 12.0833 6.56768 12.0833C10.9777 12.0833 12.541 10.5199 12.541 6.10993ZM4.85852 9.03243C4.17018 8.62993 3.64518 7.9941 3.37685 7.2416C3.24852 6.8741 3.18435 6.4891 3.18435 6.10993C3.18435 5.7016 3.25435 5.2991 3.40018 4.9141C3.68018 4.16743 4.22268 3.54326 4.91685 3.15243C5.61102 2.76743 6.42768 2.63326 7.20935 2.78493C7.65268 2.87243 8.06685 3.0416 8.43435 3.2866L8.43435 3.24576C8.43435 2.95993 8.66768 2.72076 8.95935 2.72076C9.25102 2.72076 9.47852 2.95993 9.47852 3.24576L9.47852 4.51743C9.47852 4.80326 9.24518 5.0366 8.95935 5.0366L7.68185 5.0366C7.39602 5.0366 7.16268 4.80326 7.16268 4.51743C7.16268 4.26076 7.35518 4.04493 7.60018 4.00993C7.41935 3.91076 7.22102 3.8466 7.01685 3.80576C6.47435 3.70076 5.90852 3.7941 5.42435 4.06243C4.94602 4.33076 4.57268 4.76826 4.37435 5.2816C4.18185 5.80076 4.17602 6.37243 4.35685 6.8916C4.54352 7.41076 4.90518 7.8541 5.38352 8.1341C5.86185 8.4141 6.42185 8.51326 6.96435 8.41993C7.51268 8.3266 8.00852 8.04076 8.36435 7.62076C8.72018 7.20076 8.91268 6.6641 8.91268 6.10993C8.91268 5.8241 9.14602 5.59076 9.43768 5.59076C9.72935 5.59076 9.95685 5.8241 9.95685 6.10993C9.95685 6.9091 9.67102 7.68493 9.15768 8.2916C8.64435 8.9041 7.92685 9.31243 7.13935 9.4466C6.35768 9.58076 5.54102 9.43493 4.85852 9.03243Z"
                            fill="#FF6C11"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_593_1902">
                            <rect
                              width="11.9467"
                              height="11.9408"
                              fill="white"
                              transform="translate(12.541 0.136597) rotate(90)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    }
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
