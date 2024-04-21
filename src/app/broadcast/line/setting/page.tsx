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
import BroadcastInfoModal from "@/components/broadcast/BroadcastInfoModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataInFo, setDataInFo] = useState({});
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
      width: "200px",
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
      render: (value: any, record: DataType, index: number) => {
        return (
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto"
            icon={
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00011 7.36462C7.11344 7.36462 6.39211 8.08596 6.39211 8.97262C6.39211 9.85929 7.11344 10.5806 8.00011 10.5806C8.88678 10.5806 9.60811 9.85929 9.60811 8.97262C9.60811 8.08596 8.88678 7.36462 8.00011 7.36462Z"
                  fill="#6D6D6D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00011 11.5808C6.56211 11.5808 5.39211 10.4108 5.39211 8.97282C5.39211 7.53482 6.56211 6.36482 8.00011 6.36482C9.43811 6.36482 10.6081 7.53482 10.6081 8.97282C10.6081 10.4108 9.43811 11.5808 8.00011 11.5808ZM8.00011 3.77148C4.39878 3.77148 1.49878 6.61682 1.49878 8.97282C1.49878 11.3288 4.39878 14.1742 8.00011 14.1742C11.6014 14.1742 14.5014 11.3288 14.5014 8.97282C14.5014 6.61682 11.6014 3.77148 8.00011 3.77148Z"
                  fill="#6D6D6D"
                />
              </svg>
            }
            onClick={() => {
              setDataInFo(record);
              setIsModalOpen(true);
            }}></Button>
        );
      },
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
      progress: 500,
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
            scroll={{ x: "max-content", y: "max-content" }}
          />
        </ConfigProvider>
      </div>
      <BroadcastInfoModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={dataInFo}
      />
    </LayoutBroadcast>
  );
}
