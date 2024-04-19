"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import _ from "lodash";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import {
  Avatar,
  Button,
  Modal,
  Form,
  Input,
  FormProps,
  Radio,
  Space,
  Checkbox,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
  adminListSample,
  tagListSample,
  userList,
} from "@/app/broadcast/sampleData";
type FieldType = {
  search?: string;
  all?: boolean;
};

export default function SelectTagModal(_prop: any) {
  const [form] = Form.useForm();

  const [data, setData] = useState<any[]>(tagListSample);
  const [tagData, setAdminData] = useState<any[]>([]);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {};
  const addTag = (values: any) => {
    console.log(tagData);
    const newData = tagData;

    const find = _.findIndex(newData, (a) => a === values);
    if (find >= 0) {
      newData.splice(find, 1);
    } else {
      newData.push(values);
    }
    console.log({ newData });
    setAdminData([...newData]);
  };
  return (
    <Modal
      closeIcon={false}
      open={_prop?.open}
      onOk={() => _prop?.addTag(tagData)}
      onCancel={() => _prop?.setOpen(false)}
      width={400}
      okText="ตกลง"
      cancelText="ยกเลิก"
      style={{ top: "17%", left: "35%" }}>
      <div>
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <Form.Item<FieldType>
            name="search"
            className="mb-3"
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
          <Form.Item<FieldType>
            name="all"
            className="mb-3"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your password!',
            //   },
            // ]}
          >
            <Checkbox
              onClick={() => {
                data === tagData ? setAdminData([]) : setAdminData(data);
              }}
              className="font-noto">
              เลือกทั้งหมด
            </Checkbox>
          </Form.Item>
        </Form>
        <div className="h-[400px] w-full flex flex-col overflow-y-auto">
          {_.map(data, (item: any) => {
            const find = _.find(tagData, (a) => a === item);
            return (
              <div
                className="w-full  p-2 flex items-center relative border-[1px]  border-grey my-1 hover:border-primary hover:bg-primary-light"
                onClick={() => {
                  addTag(item);
                }}
                style={{
                  backgroundColor: find
                    ? "var(--primary-light)"
                    : "var(--white)",
                }}
                key={item.id}>
                <div className="flex  items-center mx-2 w-[90%] ">
                  <div className="flex flex-col mx-2 w-[45%]">
                    <span className="font-noto chat-name my-1 text-justify">
                      {item.text}
                    </span>
                  </div>
                </div>

                <Checkbox
                  onClick={() => {
                    addTag(item);
                  }}
                  checked={find ? true : false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
