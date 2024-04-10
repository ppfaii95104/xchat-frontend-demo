"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
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
  ColorPicker,
  ColorPickerProps,
  Select,
  Radio,
  Segmented,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import AssignedConfirmModal from "./AssignedConfirmModal";
import { Console } from "console";
type FieldType = {
  search?: string;
  type?: string;
};

const userList = [
  {
    name: "Xchat",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Admin",

    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "BCMKT",
  },
  {
    name: "SGA",
  },
];
const userTeam = [
  {
    name: "Team 1",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Team 2",

    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "Team 3",
  },
  {
    name: "Team 4",
  },
];
export default function AssignedModal(_prop: any) {
  const [form] = Form.useForm();
  const [type, setType] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<any>(null);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    _prop.setOpen(false);
  };

  useEffect(() => {
    console.log("open:", open);
    console.log("name:", name);
    if (!open && name) {
      _prop.setOpen(false);
      setName(null);
    }
  }, [open]);
  return (
    <Modal
      open={_prop.open}
      style={{ top: "10pc", left: "12pc" }}
      onOk={() => _prop.setOpen(false)}
      onCancel={() => _prop.setOpen(false)}
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
            {_.map(type === "ทีม" ? userTeam : userList, (item) => {
              return (
                <Button
                  type="link"
                  className=" px-2 flex items-center my-1  text-black"
                  onClick={() => {
                    setName(item.name);
                    setOpen(true);
                  }}>
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
