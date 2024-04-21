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
import { SearchOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";

import { adminListSample } from "@/app/broadcast/sampleData";
type FieldType = {
  search?: string;
};

export default function InviteAdminModal(_prop: any) {
  const [form] = Form.useForm();

  const [data, setData] = useState<any[]>(adminListSample);
  const [adminData, setAdminData] = useState<any[]>([]);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {};
  const addAdmin = (values: any) => {
    console.log(adminData);
    const newData = adminData;

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
      title={
        <div className="flex flex-col">
          <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
            เชิญแอดมิน
          </span>
          <span className="font-noto text-drak-grey pl-2 text-[12px] ">
            กรุณาเลือกบัญชีต่อไปนี้
          </span>
        </div>
      }
      centered
      open={_prop?.open}
      onOk={() => _prop?.addAdmin(adminData)}
      onCancel={() => _prop?.setOpen(false)}
      width={500}
      okText="ตกลง"
      cancelText="ยกเลิก">
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

          <div className="h-[600px] w-full flex flex-col overflow-y-auto">
            {_.map(data, (item: any) => {
              const find = _.find(adminData, (a) => a === item);
              return (
                <div
                  className="w-full  p-2 flex items-center relative border-[1px]  border-grey my-1 hover:border-primary hover:bg-primary-light"
                  onClick={() => {}}
                  style={{
                    backgroundColor: find
                      ? "var(--primary-light)"
                      : "var(--white)",
                  }}
                  key={item.id}>
                  <div className="flex  items-center mx-2 w-[90%] ">
                    <div className="flex flex-col mx-2 w-[45%]">
                      <span className="font-noto chat-name my-1 text-justify">
                        {item.name}
                      </span>
                      <span className="font-noto chat-messenge">
                        {item.email ?? "-"}
                      </span>
                    </div>
                  </div>
                  <CheckOutlined
                    style={{
                      visibility: find ? "visible" : "hidden",
                      color: "var(--primary)",
                    }}
                  />
                  {/* <Checkbox
                    onClick={() => {
                      addAdmin(item);
                    }}
                    checked={find ? true : false}
                  /> */}
                </div>
              );
            })}
          </div>
        </Form>
      </div>
    </Modal>
  );
}
