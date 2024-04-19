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
import AlertComponent from "@/components/AlertComponent";
import TagStatusComponent from "@/components/TagStatusComponent";
import ProgressComponent from "@/components/ProgressComponent";
import { useRouter } from "next/navigation";
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

export default function PageBroadcastManageAdmin(_prop: any) {
  const router = useRouter();
  const columns: TableColumnsType<DataType> = [
    {
      title: "ไลน์",
      dataIndex: "line",
    },
    {
      title: "แอดมิน",
      dataIndex: "admin",
    },
    {
      title: "ตั้งเวลา",
      dataIndex: "time",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      sorter: true,
      render: (value: any, record: DataType, index: number) => {
        return <TagStatusComponent status={value} />;
      },
    },
    {
      title: "% ความก้าวหน้า",
      dataIndex: "progress",
      render: (value: any, record: DataType, index: number) => {
        return <ProgressComponent data={record} />;
      },
    },
    {
      dataIndex: "creact_date",
    },
    {
      title: "อัพเดทเมื่อ",
      dataIndex: "update_date",
    },
    {
      title: "",
      dataIndex: "id",
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    let statusSample = "ดำเนินการ";
    switch (i % 3) {
      case 1:
        statusSample = "ดำเนินการ";
        break;
      case 2:
        statusSample = "เสร็จสิ้น";
        break;
      default:
        statusSample = "ยกเลิก";
    }
    data.push({
      key: i,
      line: `MBK168${i} (ติดต่อ)}`,
      admin: `แอดมิน${i}`,
      time: `2024-02-1${i} 00:00`,
      status: statusSample,
      progress: 50 + i,
      total: 1000,
      creact_date: `2024-02-1${i} 00:00`,
      update_date: `2024-02-1${i} 00:00`,
    });
  }
  const customizeRenderEmpty = () => (
    <EmtyChat
      text={
        <>
          ยังไม่มีข้อมูลบรอดแคสต์ <br />
          เลือก [+] สร้างบรอดแคสต์เพื่อเพิ่มข้อมูล
        </>
      }
    />
  );
  return (
    <LayoutBroadcast>
      <div className="px-5 pt-5 pb-3 flex justify-between items-center">
        <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
          การสนทนาทั้งหมด
        </span>
        <Button
          className="flex items-center text-drak-grey  bg-grey font-noto"
          icon={<BiSolidPlusSquare />}
          onClick={() => {
            router.push("/broadcast/line/create", { scroll: false });
          }}>
          เพิ่มแอตทริบิวต์
        </Button>
      </div>
      <Divider className="my-2" />
      <div
        className="px-4 py-2"
        style={{
          height: "calc(100% - 56px)",
        }}>
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: "max-content" }}
          />
        </ConfigProvider>
      </div>
    </LayoutBroadcast>
  );
}
