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
import { adminListSample, userList } from "@/app/broadcast/sampleData";
type FieldType = {
  search?: string;
  all?: boolean;
};

export default function SelectAdminModal(_prop: any) {
  const [form] = Form.useForm();

  const [data, setData] = useState<any[]>(userList);
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
      closeIcon={false}
      open={_prop?.open}
      onOk={() => _prop?.addAdmin(adminData)}
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
                data === adminData ? setAdminData([]) : setAdminData(data);
              }}
              className="font-noto">
              เลือกทั้งหมด
            </Checkbox>
          </Form.Item>
        </Form>
        <div className="h-[400px] w-full flex flex-col overflow-y-auto">
          {_.map(data, (item: any) => {
            const find = _.find(adminData, (a) => a === item);
            return (
              <div
                className="w-full  p-2 flex items-center relative border-[1px]  border-grey my-1 hover:border-primary hover:bg-primary-light"
                style={{
                  backgroundColor: find
                    ? "var(--primary-light)"
                    : "var(--white)",
                }}
                key={item.id}
                onClick={() => {
                  addAdmin(item);
                }}>
                <div className="flex  items-center mx-2 w-[90%] ">
                  {item.image ? (
                    <Avatar size={35} src={item.image} />
                  ) : (
                    <Avatar size={35} icon={<UserOutlined />} />
                  )}

                  <div className="flex flex-col mx-2 w-[45%]">
                    <span className="font-noto  my-1 text-justify">
                      {item.name}
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
      </div>
    </Modal>
  );
}
