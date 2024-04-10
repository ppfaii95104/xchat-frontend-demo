"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import _ from "lodash";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import { Avatar, Button, Modal, Form, Input, FormProps } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
type FieldType = {
  search?: string;
};
const userList = [
  {
    name: "Xchat",
    role: "Xchat",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Admin",
    role: "Xchat",

    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "BCMKT",
    role: "Xchat",
  },
  {
    name: "SGA",
    role: "Xchat",
  },
];
export default function ChangeAdminModal(_prop: any) {
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
          <span className="font-noto text-black text-base pl-2 font-semibold">
            สลับบัญชี
          </span>
          <span className="font-noto text-drak-grey pl-2 text-[12px] ">
            กรุณาเลือกบัญชีต่อไปนี้
          </span>
        </div>
      }
      centered
      open={_prop.open}
      onOk={() => _prop.setOpen(false)}
      onCancel={() => _prop.setOpen(false)}
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
          <div className="h-[600px] w-full flex flex-col">
            {_.map(userList, (item) => {
              return (
                <div className=" p-2 flex items-center relative border-[1px] border-grey my-1">
                  {item.image ? (
                    <Avatar size={35} src={item.image} />
                  ) : (
                    <Avatar size={35} icon={<UserOutlined />} />
                  )}

                  <div className="flex flex-col mx-2 w-[45%]">
                    <span className="font-noto chat-name my-1">
                      {item.name}
                    </span>
                    <span className="font-noto chat-messenge">{item.role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      </div>
    </Modal>
  );
}
