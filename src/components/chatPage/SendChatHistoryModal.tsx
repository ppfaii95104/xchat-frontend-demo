"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import _ from "lodash";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import { Avatar, Button, Modal, Form, Input, FormProps, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
type FieldType = {
  type?: number;
  email?: string;
};
export default function SendChatHistoryModal(_prop: any) {
  const [form] = Form.useForm();
  const [values, setValues] = useState<any>(null);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log({ values });
    setValues(values.search);
  };
  return (
    <Modal
      title={
        <div className="flex flex-col">
          <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
            ส่งประวัติแชท
          </span>
          <span className="font-noto text-drak-grey pl-2 text-[12px] ">
            ท่านต้องการส่งสำเนาบันทึกการสนทนานี้ไปยังอีเมล
          </span>
        </div>
      }
      open={_prop?.open}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
      width={700}
      okText="ส่ง"
      cancelText="ยกเลิก">
      <div>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <div className="grid grid-cols-2 gap-x-3 my-5">
            <Form.Item<FieldType>
              name="type"
              className="mb-0 col-span-2"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Radio.Group
                defaultValue={1}
                className="grid grid-cols-2 gap-x-5">
                <Radio value={1}>
                  ส่งสำเนาบันทึกการสนทนาไปยังที่อยู่อีเมลที่ระบุ
                </Radio>
                <Radio value={2}>ส่งบันทึกการสนทนาให้ที่อยู่อีเมล์อื่น</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item<FieldType>
              name="email"
              className="mb-0 gary-input"
              label="อีเมล"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input
                placeholder="กรอกที่อยู่อีเมล"
                className="font-noto mr-2"
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
