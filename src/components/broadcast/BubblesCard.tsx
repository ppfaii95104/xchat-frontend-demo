"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
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
  Upload,
  UploadFile,
  UploadProps,
  GetProp,
  Image,
} from "antd";
import { SearchOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export default function BubblesCard({ ..._prop }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="font-noto text-grey-lable">การ์ด</span>

        <Button
          type="link"
          className="flex items-center text-grey-lable p-0 font-noto"
          icon={
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7332 5.37101C10.7332 5.18701 10.5839 5.03768 10.3999 5.03768H1.60252C1.41785 5.03768 1.26918 5.18701 1.26918 5.37101C1.26918 6.03568 1.25718 6.65501 1.24585 7.22901C1.19652 9.72834 1.16385 11.3797 2.17385 12.4097C2.89118 13.141 4.06918 13.4677 5.99385 13.4677C7.92052 13.4677 9.10052 13.1403 9.81985 12.4077C10.8345 11.373 10.8025 9.71368 10.7552 7.20035C10.7445 6.63435 10.7332 6.02435 10.7332 5.37101Z"
                fill="#6D6D6D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3839 2.82221H8.62319C8.59585 2.38621 8.47519 1.77154 8.04119 1.27287C7.58252 0.745539 6.89585 0.477539 5.99985 0.477539C5.10452 0.477539 4.41785 0.745539 3.95919 1.27287C3.52519 1.77154 3.40385 2.38621 3.37652 2.82221H0.617188C0.341188 2.82221 0.117188 3.04621 0.117188 3.32221C0.117188 3.59821 0.341188 3.82221 0.617188 3.82221H11.3839C11.6599 3.82221 11.8839 3.59821 11.8839 3.32221C11.8839 3.04621 11.6599 2.82221 11.3839 2.82221Z"
                fill="#6D6D6D"
              />
            </svg>
          }
          onClick={() => {
            _prop.deleteBubbles(_prop.index);
          }}></Button>
      </div>
      <Form.Item
        name={["text", `${_prop.index}`, "text"]}
        className="mb-0"

        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your password!',
        //   },
        // ]}
      >
        <TextArea className="font-noto" rows={2} placeholder="กรอกข้อความ" />
      </Form.Item>
    </>
  );
}
