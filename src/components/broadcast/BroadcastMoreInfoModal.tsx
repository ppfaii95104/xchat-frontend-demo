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
  Divider,
  message,
  Image,
  Tag,
  Badge,
} from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { tagListSample } from "@/app/broadcast/sampleData";
import TagStatusComponent from "../TagStatusComponent";
import ProgressComponent from "../ProgressComponent";
import { HiMiniUser } from "react-icons/hi2";
type FieldType = {
  text?: string;
  card?: string;
};
export default function BroadcastMoreInfoModal({ ..._prop }) {
  const [form] = Form.useForm();

  const [tagList, setTagList] = useState<any>(tagListSample);
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  const onFinish: FormProps["onFinish"] = (values: any) => {};

  useEffect(() => {
    form.setFieldsValue({
      text: "{name} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      card: "การ์ด : Lorem ipsum card",
    });
  }, []);

  return (
    <Modal
      title="รายละเอียดแอดมิน"
      className="assigned-confirm-modal"
      centered
      closeIcon={false}
      open={_prop?.open}
      width={800}
      onCancel={() => {
        _prop?.setOpen(false);
      }}
      cancelText="ปิด"
      footer={null}
      style={{
        padding: "8px",
      }}>
      <Divider className="my-2 left-0 top-10 absolute" />{" "}
      <div className="mt-5">
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <div className="flex justify-between items-center">
            <div className="flex">
              <Tag color="#EDF3FF">
                <span className="text-drak-grey font-noto flex items-center">
                  <HiMiniUser className="text-[#4A84F6] mr-1" />
                  จำนวนแอดมิน : 0 บัญชี
                </span>
              </Tag>
              <Tag color="var(--success-light)">
                <span className="text-drak-grey font-noto flex items-center">
                  <Badge color="var(--success)" className="mr-1" size="small" />
                  จำนวนแชทที่เลือก : 0 แชท
                </span>
              </Tag>
              <Tag color="var(--primary-light)">
                <span className="text-drak-grey font-noto flex items-center">
                  <svg
                    className="text-[var(--primary)] mr-1"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.01622 6.84792C4.89122 6.89958 4.74831 6.94833 4.61497 6.94833C4.51164 6.94833 4.41456 6.91917 4.33539 6.84C4.27747 6.78208 4.09956 6.60458 4.10456 5.43208C4.10914 4.26583 4.27956 4.09583 4.33539 4.03958C4.53206 3.84333 4.85747 3.97708 4.99664 4.035C5.33997 4.17708 6.68414 4.9175 6.68414 5.44C6.68414 5.97083 5.31081 6.72583 5.01622 6.84792ZM5.11914 1.4375C2.11997 1.4375 1.05664 2.50083 1.05664 5.5C1.05664 8.49917 2.11997 9.5625 5.11914 9.5625C8.11872 9.5625 9.18164 8.49917 9.18164 5.5C9.18164 2.50083 8.11872 1.4375 5.11914 1.4375Z"
                      fill="#FF6C11"
                    />
                  </svg>
                  กำลังทำงานอยู่ : 0/0 รายการ
                </span>
              </Tag>
            </div>

            <Form.Item
              name="search"
              className="mb-0 gary-input"
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
          </div>
          <div className="mt-5 h-[400px]">
            {_.map([..._prop.adminList], (item: any, index: number) => {
              return (
                <Tag key={item.id} className=" my-1">
                  {item.image ? (
                    <Avatar size={15} src={item.image} />
                  ) : (
                    <Avatar size={15} icon={<UserOutlined />} />
                  )}

                  <span className="ml-1 font-noto">{item.name}</span>
                </Tag>
              );
            })}
          </div>
        </Form>
        <div className="flex justify-end">
          <Button
            className="flex items-center text-drak-grey font-noto w-[120px] justify-center"
            onClick={() => {
              _prop?.setOpen(false);
            }}>
            ปิด
          </Button>
        </div>
      </div>
    </Modal>
  );
}
