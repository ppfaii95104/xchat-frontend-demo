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
  Badge,
  Form,
  FormProps,
} from "antd";

import { IoChatbubbleEllipses, IoLogIn, IoReader } from "react-icons/io5";

import { HiMiniUser, HiUserPlus } from "react-icons/hi2";
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
import TagStatusComponent from "@/components/TagStatusComponent";
import ProgressComponent from "@/components/ProgressComponent";
import { AiOutlineMore } from "react-icons/ai";
import AddAdminModal from "@/components/broadcast/AddAdminModal";
interface DataType {
  key: React.Key;
  no: number;
  name: string;
  email: string;
  status: string;
  account: number;
  sent: number;
  cooldown: string;
}
type FieldType = {
  search?: string;
};
const dataSample: DataType[] = [];
for (let i = 0; i < 46; i++) {
  dataSample.push({
    key: i + 1,
    no: i + 1,
    name: "John Stone",
    email: "Johns@gmail.com",
    status: "พร้อมใช้งาน",
    account: i + 1,
    sent: i + 2,
    cooldown: "-",
  });
}
export default function PageBroadcastManageAdmin(_prop: any) {
  const [userList, setUserList] = useState<any[]>([]);
  const [data, setData] = useState<any[]>(dataSample);
  const [form] = Form.useForm();
  const [openAddAdminModal, setOpenAddAdminModal] = useState(false);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log({ values });
  };
  useEffect(() => {
    setUserList(userListSample);
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "no",
    },
    {
      title: "ชื่อ",
      dataIndex: "name",
    },
    {
      title: "อีเมล",
      dataIndex: "email",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
      sorter: true,
      render: (value: any, record: DataType, index: number) => {
        return (
          <Tag color="var(--success-light)">
            <span className="text-drak-grey font-noto">
              {" "}
              <Badge color="var(--success)" className="mr-1" size="small" />
              value
            </span>
          </Tag>
        );
      },
    },

    {
      title: "บัญชี",
      dataIndex: "account",
    },
    {
      title: "ส่งแล้ว",
      dataIndex: "sent",
    },
    {
      title: "คูลดาวน์",
      dataIndex: "cooldown",
    },
    {
      dataIndex: "key",
      render: (value: any, record: DataType, index: number) => {
        return <AiOutlineMore />;
      },
    },
  ];

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
  const addAdmin = (values: any) => {
    const newData = data;
    _.map(values, (item: any) => {
      newData.push({
        key: newData.length + 1,
        no: newData.length + 1,
        name: item.name,
        email: item.email,
        status: "พร้อมใช้งาน",
        account: 0,
        sent: 0,
        cooldown: "-",
      });
    });
  };

  return (
    <LayoutBroadcast>
      <div className="px-5 pt-5 pb-3 flex justify-between items-center border-t-[0.5px] border-b-[0.5px]">
        <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
          จัดการแอดมิน
        </span>
        <Button
          className="bg-grey text-drak-grey flex items-stretch"
          onClick={() => {
            setOpenAddAdminModal(true);
          }}>
          <HiUserPlus className="text-lg mr-1" />
          เพิ่มแอดมินใหม่
        </Button>
      </div>
      <div
        className="px-4 py-2 "
        style={{
          height: "calc(100% - 56px)",
        }}>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-noto text-grey-lable text-sm pl-2 font-semibold mr-4">
              แอดมินทั้งหมด (88)
            </span>

            <Form.Item<FieldType>
              name="search"
              className="mb-0 gary-input"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                placeholder="ค้นหา..."
                className="font-noto mr-2"
                prefix={
                  <SearchOutlined
                    onClick={() => {
                      form.submit();
                    }}
                  />
                }
              />
            </Form.Item>
          </div>
        </Form>
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: "max-content" }}
          />
        </ConfigProvider>
      </div>
      <AddAdminModal
        open={openAddAdminModal}
        setOpen={setOpenAddAdminModal}
        addAdmin={addAdmin}
      />
    </LayoutBroadcast>
  );
}
