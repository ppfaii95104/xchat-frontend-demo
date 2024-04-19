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
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

type FieldType = {
  name?: string;
  email?: string;
  record?: string;
  telNo?: string;
  businessName?: string;
  country?: number;
  cityName?: string;
  facebookURL?: string;
  twitterURL?: string;
  telegramURL?: string;
};
const { Option } = Select;
const { TextArea } = Input;
const options: SelectProps["options"] = [
  {
    label: "Thailand",
    value: 1,
  },
  {
    label: "USA",
    value: 2,
  },
  {
    label: "Japan",
    value: 3,
  },
  {
    label: "Korea",
    value: 4,
  },
];
export default function ContactInformationModal(_prop: any) {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log({ ...values });
    _prop?.setContactInformation({ ...values });
    _prop?.setOpen(false);
    form.resetFields();
  };
  const selectBefore = (
    <Select defaultValue="+66">
      <Option value="+66">+66</Option>
      <Option value="+65">+65</Option>
    </Select>
  );
  return (
    <Modal
      title="เพิ่มข้อมูลผู้ติดต่อ"
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
            <Form.Item<FieldType>
              name="name"
              className="mb-0 gary-input"
              label="ชื่อ-นามสกุล"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอกชื่อ-นามสกุล" className="font-noto " />
            </Form.Item>
            <Form.Item<FieldType>
              name="email"
              className="mb-0 gary-input"
              label="ที่อยู่อีเมล"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอกที่อยู่อีเมล" className="font-noto " />
            </Form.Item>
            <Form.Item<FieldType>
              name="record"
              className="mb-0 gary-input col-span-2"
              label="ประวัติ"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <TextArea
                rows={2}
                placeholder="กรอกประวัติ"
                className="font-noto "
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="telNo"
              className="mb-0 gary-input"
              label="หมายเลขโทรศัพท์"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                addonBefore={selectBefore}
                placeholder="หมายเลขโทรศัพท์ผู้ติดต่อ"
                className="font-noto "
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="businessName"
              className="mb-0 gary-input"
              label="ชื่อธุรกิจ"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอกชื่อธุรกิจ" className="font-noto " />
            </Form.Item>
            <Form.Item<FieldType>
              name="country"
              className="mb-0 gary-input"
              label="ชื่อประเทศ"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Select
                placeholder="กรอกชื่อประเทศ"
                options={options}
                showSearch
                optionFilterProp="children"
                filterOption={(input: any, option: any) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA: any, optionB: any) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="cityName"
              className="mb-0 gary-input"
              label="City Name"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input placeholder="กรอก City Name" className="font-noto " />
            </Form.Item>

            <Form.Item<FieldType>
              label="Social Profiles"
              name="facebookURL"
              className="mb-0 gary-input"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                addonBefore={<BsFacebook className="text-[#0866FF]" />}
                placeholder="กรอก url Facebook"
                className="font-noto "
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="twitterURL"
              className="mb-0 gary-input"
              label=" "
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                addonBefore={<BsTwitterX />}
                placeholder="กรอก url X (Twitter)"
                className="font-noto "
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="telegramURL"
              className="mb-0 gary-input"

              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                addonBefore={<FaTelegram className="text-[#2AABEE]" />}
                placeholder="กรอก url Telegram"
                className="font-noto "
              />
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
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
