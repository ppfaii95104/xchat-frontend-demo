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
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
type FieldType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
};
type Color = GetProp<ColorPickerProps, "value">;
export default function AddTagModal(_prop: any) {
  const [form] = Form.useForm();
  const [color, setColor] = useState<Color>("#FF6C11");
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log({ ...values });
    _prop?.addTag({
      ...values,
      color: color,
    });
    _prop?.setOpen(false);
    form.resetFields();
  };

  return (
    <Modal
      title={
        <Button
          type="link"
          className="flex items-center text-grey-lable p-0"
          onClick={() => {
            _prop?.setOpen(false);
          }}>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.955206 6.79492C0.74453 6.58399 0.626195 6.29805 0.626195 5.99992C0.626195 5.7018 0.74453 5.41586 0.955206 5.20492L5.19721 0.961425C5.40825 0.750479 5.69445 0.63201 5.99285 0.63208C6.29124 0.63215 6.57738 0.750754 6.78833 0.9618C6.99928 1.17285 7.11775 1.45905 7.11768 1.75744C7.11761 2.05583 6.999 2.34198 6.78796 2.55292L3.34096 5.99992L6.78796 9.44693C6.99299 9.65901 7.10651 9.94313 7.10409 10.2381C7.10167 10.5331 6.98349 10.8153 6.775 11.024C6.56651 11.2327 6.2844 11.3511 5.98943 11.3538C5.69446 11.3565 5.41023 11.2433 5.19796 11.0384L0.954455 6.79567L0.955206 6.79492Z"
              fill="#6D6D6D"
            />
          </svg>
          กลับ
        </Button>
      }
      open={_prop?.open}
      style={{ bottom: "45%", right: "19%" }}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
      width={350}
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
            name="messenge"
            className="mb-3"
            label="กล่องข้อความ"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <Select
              showSearch
              placeholder="เลือกกล่องข้อความ"
              optionFilterProp="children"
              options={[
                {
                  value: "Facebook",
                  label: "Facebook",
                },
                {
                  value: "Telegram",
                  label: "Telegram",
                },
                {
                  value: "Whatsapp",
                  label: "Whatsapp",
                },
                {
                  value: "TikTok",
                  label: "TikTok",
                },
              ]}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="name"
            className="mb-3"
            label="ชื่อแท็ก"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <Input placeholder="กรอกคำชื่อแท็ก" className="font-noto mr-2" />
          </Form.Item>
          <Form.Item<FieldType>
            name="desc"
            className="mb-3"
            label="คำอธิบาย"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <Input placeholder="กรอกคำอธิบาย" className="font-noto mr-2" />
          </Form.Item>
          <Form.Item<FieldType>
            name="color"
            className="mb-3"
            label="เลือกสี"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <ColorPicker
              defaultValue={color}
              value={color}
              onChange={setColor}
            />
          </Form.Item>
          <div className="flex justify-end">
            <Button
              className="btn-gradient font-noto flex justify-center items-center"
              onClick={() => {
                form.submit();
              }}>
              สร้างแท็ก
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
