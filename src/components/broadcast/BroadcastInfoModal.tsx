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
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { tagListSample } from "@/app/broadcast/sampleData";
import TagStatusComponent from "../TagStatusComponent";
import ProgressComponent from "../ProgressComponent";
type FieldType = {
  search?: string;
};
export default function BroadcastInfoModal({ ..._prop }) {
  const [form] = Form.useForm();
  const [tagList, setTagList] = useState<any>(tagListSample);
  const onFinish: FormProps["onFinish"] = (values: any) => {};
  useEffect(() => {
    form.setFieldsValue({
      text: "{name} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      card: "การ์ด : Lorem ipsum card",
    });
  }, []);

  return (
    <Modal
      title="ข้อมูลบรอดแคสต์"
      className="assigned-confirm-modal"
      centered
      open={_prop?.open}
      width={600}
      onCancel={() => {
        // _prop?.handelDelete();
        _prop?.setOpen(false);
      }}
      footer={null}
      style={{
        padding: "8px",
      }}>
      <Divider className="my-2 position left-0 top-10" />{" "}
      <div className="mt-5">
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          <span className="font-noto text-grey-lable text-sm font-semibold mt-2">
            บับเบิ้ล
          </span>
          <Divider className="mb-2 mt-0" />{" "}
          <div className="flex w-full">
            <Image
              width={100}
              height={100}
              src="https://line.me/static/a8a76dfcb3634c0cc8ab318411a5ed6d/03979/2dfcd6684c8f541e18d888149e53bfae.png"
            />
            <div
              className="pl-2"
              style={{
                width: "calc(100% - 100px)",
              }}>
              <Form.Item
                name="text"
                className="mb-2 input-show-data"

                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <TextArea
                  className="font-noto"
                  rows={2}
                  placeholder="กรอกข้อความ"
                  disabled
                />
              </Form.Item>
              <Form.Item
                name="card"
                className="mb-0 input-show-data"

                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <Input
                  className="font-noto"
                  placeholder="กรอกข้อความ"
                  disabled
                />
              </Form.Item>
            </div>
          </div>
          <Divider className="my-2 " />{" "}
          <span className="font-noto text-grey-lable text-sm font-semibold mt-2">
            แท็ก
          </span>
          <div className="w-full">
            {_.map(tagList, (item: any) => {
              return (
                <Tag className=" my-1">
                  <span className=" my-1">{item.text}</span>
                </Tag>
              );
            })}
          </div>
          <span className="font-noto text-grey-lable text-sm font-semibold mt-2">
            สถานะ
          </span>
          <div className="w-full flex">
            <TagStatusComponent status="ดำเนินการ" />
            <ProgressComponent data={_prop.data} />
          </div>
        </Form>
      </div>
    </Modal>
  );
}
