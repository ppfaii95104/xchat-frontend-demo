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
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

type FieldType = {
  name?: string;
  lineId?: string;
  status?: boolean;
};

export default function EditLineModal(_prop: any) {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    _prop?.setOpen(false);
  };

  return (
    <Modal
      title="แก้ไขข้อมูล"
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
          <div className="grid grid-cols-2 gap-4 mt-5 mb-10">
            <div className="col-span-2  flex items-center">
              <Form.Item<FieldType>
                name="name"
                className="mb-0 col-span-2 switch-success"

                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <Switch defaultChecked />
              </Form.Item>
              <span className="ml-2 font-noto">สถานะ</span>
            </div>
            <Form.Item<FieldType>
              name="name"
              className="mb-0 gary-input"
              label="ชื่อไลน์"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอกชื่อไลน์" className="font-noto " />
            </Form.Item>
            <Form.Item<FieldType>
              name="lineId"
              className="mb-0 gary-input"
              label="ไลน์ไอดี"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอกไลน์ไอดี" className="font-noto " />
            </Form.Item>
          </div>

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
