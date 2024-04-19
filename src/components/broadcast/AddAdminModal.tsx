"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import _ from "lodash";

import {
  Avatar,
  Button,
  Modal,
  Form,
  Input,
  FormProps,
  ColorPicker,
  ColorPickerProps,
  Select,
  GetProp,
  SelectProps,
  Switch,
  ConfigProvider,
  Table,
  TableColumnsType,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import EmtyChat from "../EmtyChat";
import { BiSolidPlusSquare } from "react-icons/bi";

interface DataType {
  key: React.Key;
  email: string;
  password: string;
}
export default function AddAdminModal(_prop: any) {
  const [form] = Form.useForm();
  const [data, setData] = useState<any[]>([]);
  const onFinish: FormProps["onFinish"] = (values: any) => {
    _prop?.setOpen(false);
  };
  const addRow = () => {
    const newData = data;

    newData.push({
      key: newData.length + 1,
      email: "",
      password: "",
    });

    setData([...newData]);
  };
  const deleteRow = (values: any) => {
    const newData = data;
    console.log({ values });
    const find = _.findIndex(newData, (a) => a.key === values.key);
    console.log({ find });
    newData.splice(find, 1);
    setData([...newData]);
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: "อีเมล",
      dataIndex: "email",
      render: (value: any, record: DataType, index: number) => {
        return (
          <Form.Item
            name={["email", index, "email"]}
            className="mb-0 gary-input">
            <Input placeholder="กรอกอีเมล" className="font-noto mr-2" />
          </Form.Item>
        );
      },
    },
    {
      title: "รหัสผ่าน",
      dataIndex: "password",
      render: (value: any, record: DataType, index: number) => {
        return (
          <Form.Item
            name={["password", `${index}`, "password"]}
            className="mb-0 gary-input">
            <Input.Password
              placeholder="กรอกรหัสผ่าน"
              className="font-noto mr-2"
            />
          </Form.Item>
        );
      },
    },
    {
      width: "50px",
      dataIndex: "key",
      render: (value: any, record: DataType, index: number) => {
        return (
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
            onClick={() => {
              deleteRow(record);
            }}></Button>
        );
      },
    },
  ];
  useEffect(() => {
    const newData: DataType[] = [];
    for (let i = 0; i < 2; i++) {
      newData.push({
        key: i + 1,
        email: "",
        password: "",
      });
    }
    setData(newData);
  }, []);

  return (
    <Modal
      title="เพิ่มแอดมินใหม่"
      open={_prop?.open}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
      width={700}
      closeIcon={false}
      footer={false}>
      <div>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <Table
            columns={columns}
            dataSource={[...data]}
            pagination={false}
            scroll={{ x: "max-content", y: "400px" }}
            footer={() => (
              <Button
                type="link"
                className="flex items-center text-drak-grey p-0 font-noto"
                icon={<BiSolidPlusSquare />}
                onClick={() => {
                  addRow();
                }}>
                เพิ่มราละเอียด
              </Button>
            )}
          />

          <div className="flex justify-end">
            <Button
              className="font-noto flex justify-center items-center w-[150px] mr-2"
              onClick={() => {
                _prop?.setOpen(false);
              }}>
              ยกเลิก
            </Button>
            <Button
              className="btn-gradient font-noto flex justify-center   w-[150px]  items-center"
              onClick={() => {
                form.submit();
              }}>
              อัปเดต
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
