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
import { userList } from "@/app/chat/sampleData";
type FieldType = {
  search?: string;
};

export default function ChangeAdminModal(_prop: any) {
  const [form] = Form.useForm();
  const [values, setValues] = useState<number>(1);
  const [data, setData] = useState<any[]>(userList);
  const [adminData, setAdminData] = useState<any>({
    id: 1,
    name: "Xchat",
    role: "Xchat",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  });
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    if (_.isEmpty(values.search)) {
      setData(userList);
    } else {
      const filter = _.filter(userList, (a) => a.name === values.search);
      setData(filter);
    }
  };
  return (
    <Modal
      title={
        <div className="flex flex-col">
          <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
            สลับบัญชี
          </span>
          <span className="font-noto text-drak-grey pl-2 text-[12px] ">
            กรุณาเลือกบัญชีต่อไปนี้
          </span>
        </div>
      }
      centered
      open={_prop?.open}
      onOk={() => _prop?.setAdmin(adminData)}
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
              return (
                <div
                  className="w-full  p-2 flex items-center relative border-[1px]  border-grey my-1 hover:border-primary hover:bg-primary-light"
                  onClick={() => {
                    setValues(item.id);
                    setAdminData(item);
                  }}
                  style={{
                    backgroundColor:
                      item.id === values
                        ? "var(--primary-light)"
                        : "var(--white)",
                  }}
                  key={item.id}>
                  <div className="flex  items-center mx-2 w-[90%] ">
                    {item.image ? (
                      <Avatar size={35} src={item.image} />
                    ) : (
                      <Avatar size={35} icon={<UserOutlined />} />
                    )}

                    <div className="flex flex-col mx-2 w-[45%]">
                      <span className="font-noto chat-name my-1 text-justify">
                        {item.name}
                      </span>
                      <span className="font-noto chat-messenge">
                        {item.role ?? "-"}
                      </span>
                    </div>
                  </div>
                  <Checkbox
                    onClick={() => {
                      setValues(item.id);
                      setAdminData(item);
                    }}
                    checked={item.id === values}
                  />
                </div>
              );
            })}
          </div>
        </Form>
      </div>
    </Modal>
  );
}
