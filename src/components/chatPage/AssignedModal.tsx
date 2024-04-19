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
  Radio,
  Segmented,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import AssignedConfirmModal from "./AssignedConfirmModal";
import { Console } from "console";
import { userList, userTeam } from "@/app/chat/sampleData";
type FieldType = {
  search?: string;
  type?: string;
};

export default function AssignedModal(_prop: any) {
  const [form] = Form.useForm();
  const [type, setType] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<any>(null);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    _prop?.setOpen(false);
  };

  useEffect(() => {
    if (!open && name) {
      _prop?.setOpen(false);
      setName(null);
    }
  }, [open]);
  return (
    <Modal
      open={_prop?.open}
      style={{ top: "10pc", left: "12pc" }}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
      width={300}
      closeIcon={false}
      footer={false}>
      <div>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <Form.Item<FieldType>
            name="search"
            className="mb-0"
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
          <div className="flex items-center justify-between my-3">
            <Form.Item<FieldType>
              name="type"
              className="mb-0 "
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Segmented<string>
                options={["สมาชิก", "ทีม"]}
                onChange={(value) => {
                  setType(value);
                }}
              />
            </Form.Item>
            <Button className=" font-noto flex justify-center items-center text-primary border-primary">
              มอบหมายให้ฉัน
            </Button>
          </div>

          <div className="w-full flex flex-col overflow-auto">
            {_.map(type === "ทีม" ? userTeam : userList, (item: any) => {
              return (
                <Button
                  type="link"
                  className=" px-2 flex items-center my-1  text-grey-lable"
                  onClick={() => {
                    setName(item.name);
                    setOpen(true);
                  }}
                  key={item.id}>
                  {item.image ? (
                    <Avatar size={35} src={item.image} />
                  ) : (
                    <Avatar size={35} icon={<UserOutlined />} />
                  )}
                  <span className="font-noto my-1 ml-3">{item.name}</span>
                </Button>
              );
            })}
          </div>
        </Form>
      </div>
      <AssignedConfirmModal
        open={open}
        name={name}
        setOpen={setOpen}
        setName={setName}
      />
    </Modal>
  );
}
