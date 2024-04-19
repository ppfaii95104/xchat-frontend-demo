"use client"; // This is a client component 👈🏽
import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  FormProps,
  Input,
  MenuProps,
  Select,
  Switch,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { BiSolidEditAlt, BiSolidPlusSquare } from "react-icons/bi";
import { HiMiniUser, HiUserPlus } from "react-icons/hi2";
import CustomDatePicker from "../DatePicker";
import { FaAt } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { AiOutlineMore } from "react-icons/ai";
import EmtyChat from "../EmtyChat";
import InviteAdminModal from "./InviteAdminModal";
import _ from "lodash";
import EditLineModal from "./EditLineModal";
import ConfirmDeleteAdminModal from "./ConfirmDeleteAdminModal";
interface DataType {
  key: React.Key;
  no: number;
  name: string;
  email: string;
}
const dataSample: DataType[] = [];
for (let i = 0; i < 46; i++) {
  dataSample.push({
    key: i + 1,
    no: i + 1,
    name: "John Stone",
    email: "Johns@gmail.com",
  });
}
export default function ManageLine(_prop: any) {
  const [openInviteAdminModal, setOpenInviteAdminModal] = useState(false);
  const [openEditLineModal, setOpenEditLineModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [data, setData] = useState<any[]>(dataSample);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          type="link"
          className="flex items-center text-drak-grey p-0 font-noto"
          icon={
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2327 5.39836C11.2327 5.21436 11.0834 5.06502 10.8994 5.06502H2.10203C1.91736 5.06502 1.7687 5.21436 1.7687 5.39836C1.7687 6.06302 1.7567 6.68236 1.74536 7.25636C1.69603 9.75569 1.66336 11.407 2.67336 12.437C3.3907 13.1684 4.5687 13.495 6.49336 13.495C8.42003 13.495 9.60003 13.1677 10.3194 12.435C11.334 11.4004 11.302 9.74102 11.2547 7.22769C11.244 6.66169 11.2327 6.05169 11.2327 5.39836Z"
                fill="#6D6D6D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8834 2.84955H9.1227C9.09537 2.41355 8.9747 1.79888 8.5407 1.30022C8.08203 0.772883 7.39537 0.504883 6.49937 0.504883C5.60403 0.504883 4.91737 0.772883 4.4587 1.30022C4.0247 1.79888 3.90337 2.41355 3.87603 2.84955H1.1167C0.840699 2.84955 0.616699 3.07355 0.616699 3.34955C0.616699 3.62555 0.840699 3.84955 1.1167 3.84955H11.8834C12.1594 3.84955 12.3834 3.62555 12.3834 3.34955C12.3834 3.07355 12.1594 2.84955 11.8834 2.84955Z"
                fill="#6D6D6D"
              />
            </svg>
          }
          onClick={() => {}}>
          ลบข้อมูลแอดมิน
        </Button>
      ),
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "no",
    },
    {
      title: "ชื่อแอดมิน",
      dataIndex: "name",
    },
    {
      title: "อีเมล",
      dataIndex: "email",
    },
    {
      width: "50px",
      dataIndex: "key",
      render: (value: any, record: DataType, index: number) => {
        return (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow>
            <Button
              type="link"
              className=" text-drak-grey"
              icon={<AiOutlineMore />}
              onClick={() => {}}
            />
          </Dropdown>
        );
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
      });
    });

    setData(newData);
    setOpenInviteAdminModal(false);
  };

  return (
    <div className="pt-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          {_prop?.data.image ? (
            <Avatar size={50} src={_prop?.data.image} />
          ) : (
            <Avatar size={50} icon={<UserOutlined />} />
          )}
          <div className="flex flex-col ml-4 mr-2">
            <div className="flex">
              {" "}
              <span className="font-noto chat-name my-1">
                {_prop?.data.name}
              </span>
              <div className="flex  items-center">
                <SiLine className="text-[#3ACE01] p-[2px] bg-white text-base" />
                <span className="font-noto text-xs ml-1">
                  {_prop?.data.idLine}
                </span>
              </div>
            </div>
            <div className="flex  items-center">
              <Tag color="#EDF3FF">
                <span className="text-drak-grey font-noto flex items-center">
                  <HiMiniUser className="text-[#4A84F6] mr-1" />
                  {_prop?.data.account} คน
                </span>
              </Tag>
              <Tag color="var(--success-light)">
                <span className="text-drak-grey font-noto">
                  <Badge color="var(--success)" className="mr-1" size="small" />
                  พร้อมใช้งาน
                </span>
              </Tag>
            </div>
          </div>
        </div>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button
            className="bg-grey text-drak-grey"
            type="link"
            icon={<AiOutlineMore />}
            onClick={() => {}}
          />
        </Dropdown>
      </div>
      <Divider className="my-2" />
      <div
        style={{
          height: "calc(100% - 56px)",
        }}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-noto text-grey-lable text-sm pl-2 font-semibold mr-4">
            แอดมินทั้งหมด (88)
          </span>

          <Button
            className="bg-grey text-drak-grey flex items-stretch"
            onClick={() => {
              setOpenInviteAdminModal(true);
            }}>
            <HiUserPlus className="text-lg mr-1" />
            เชิญแอดมิน
          </Button>
        </div>

        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            columns={columns}
            dataSource={[...data]}
            scroll={{ x: "max-content" }}
          />
        </ConfigProvider>
      </div>
      <InviteAdminModal
        open={openInviteAdminModal}
        setOpen={setOpenInviteAdminModal}
        addAdmin={addAdmin}
      />
      <EditLineModal open={openEditLineModal} setOpen={setOpenEditLineModal} />
      <ConfirmDeleteAdminModal
        setOpen={setOpenDeleteModal}
        open={openDeleteModal}
      />
    </div>
  );
}
