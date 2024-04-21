"use client"; // This is a client component 👈🏽
import React, { ReactNode, useEffect, useRef, useState } from "react";

import {
  Button,
  Input,
  Divider,
  Form,
  Space,
  FormProps,
  Tooltip,
  message,
  Alert,
  notification,
} from "antd";
import {
  BiSolidFile,
  BiSolidVolumeMute,
  BiSolidPlusSquare,
} from "react-icons/bi";
import {
  LeftOutlined,
  BarsOutlined,
  SearchOutlined,
  UserOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import _ from "lodash";

import SearchChatInfoAttributeModal from "./SearchChatInfoAttributeModal";
import ChatInfoAttributeConfirmModal from "./ChatInfoAttributeConfirmModal";
import AlertComponent from "../AlertComponent";
import SearchContactAttributeModal from "./SearchContactAttributeModal";
import ContactAttributeConfirmModal from "./ContactAttributeConfirmModal";
import NotificationComponents from "../NotificationComponents";

type FieldType = {
  note?: string;
};
type NotificationType = "success" | "info" | "warning" | "error";
export default function TabData(_prop: any) {
  const [form] = Form.useForm();

  const [listChatInfoAttribute, setListChatInfoAttribute] = useState<any>({});
  const [listContactAttribute, setListContactAttribute] = useState<any>({});
  const [note, setNote] = useState<string | null | undefined>(null);
  const [isEdit, setIsEdit] = useState<boolean>();
  const [isEditContact, setIsEditContact] = useState<boolean>();
  const [noteContact, setNoteContact] = useState<string | null | undefined>(
    null
  );
  const [openTagModal, setOpenTagModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log(values);
  };
  const [api, contextHolder] = notification.useNotification();

  const deleteChatInfoAttribute = () => {
    console.log("🚀 ~ deleteChatInfoAttribute");
    setListChatInfoAttribute({});

    setOpenDeleteModal(false);
    NotificationComponents("success", "ลบแอตทริบิวต์เรียบร้อยแล้ว");
  };
  const deleteContactAttribute = () => {
    setListContactAttribute({});
  };

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return (
    <div>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <div className="px-[15px] py-[5px] mb-2 flex flex-col">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">ข้อมูลการสนทนา</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}
              onClick={() => {
                setOpenTagModal(true);
              }}>
              เพิ่มแอตทริบิวต์
            </Button>
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-xs text-[#919191]">Initiated at</span>
            <span className="">
              Wed Dec 13 2023 12:15:46 GMT+0700 (Indochina Time)
            </span>
          </div>{" "}
          <div className="flex flex-col mb-3">
            <span className="text-xs text-[#919191]">ภาษาของเบราว์เซอร์</span>
            <span className="">Thai</span>
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-xs text-[#919191]">บราวเซอร์</span>
            <span className="">Chrome 120.0.0.0</span>
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-xs text-[#919191]">ระบบปฏิบัติการ</span>
            <span className="">Windows 10.0</span>
          </div>
          <div className="flex flex-col mb-3">
            <span className="text-xs text-[#919191]">ที่อยู่ไอพี</span>
            <span className="">171.4.234.10</span>
          </div>
          {_.isEmpty(listChatInfoAttribute) ? (
            <span className="font-noto text-sm text-drak-grey mt-3">
              {" "}
              เพิ่มแอตทริบิวต์
            </span>
          ) : (
            <div className="flex flex-col mb-3">
              <div className="flex  justify-between items-center">
                <span className="text-xs text-[#919191]">
                  {listChatInfoAttribute.name}
                </span>
                <div className="flex">
                  {isEdit ? (
                    <Space>
                      <Tooltip title="คัดลอกแอตทริบิวต์">
                        <Button
                          type="link"
                          className="flex items-center text-primary p-0 font-noto"
                          icon={
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.5979 15.3009H8.5312C6.3912 15.3009 4.64453 13.5609 4.64453 11.4143V9.3476C4.64453 7.2076 6.38453 5.46094 8.5312 5.46094H10.5979C12.7379 5.46094 14.4845 7.20094 14.4845 9.3476V11.4143C14.4845 13.5543 12.7445 15.3009 10.5979 15.3009ZM8.5312 6.46094C6.93786 6.46094 5.64453 7.75427 5.64453 9.3476V11.4143C5.64453 13.0076 6.93786 14.3009 8.5312 14.3009H10.5979C12.1912 14.3009 13.4845 13.0076 13.4845 11.4143V9.3476C13.4845 7.75427 12.1912 6.46094 10.5979 6.46094H8.5312Z"
                                fill="#6D6D6D"
                              />
                              <path
                                d="M7.45562 2.14062H5.20229C3.1662 2.14062 1.51562 3.7912 1.51562 5.82729V8.08063C1.51562 10.1167 3.1662 11.7673 5.20229 11.7673H7.45562C9.49171 11.7673 11.1423 10.1167 11.1423 8.08063V5.82729C11.1423 3.7912 9.49171 2.14062 7.45562 2.14062Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
                          onClick={() => {}}></Button>
                      </Tooltip>
                      <Tooltip title="แก้ไขแอตทริบิวต์">
                        <Button
                          type="link"
                          className="flex items-center text-primary p-0 font-noto"
                          icon={
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.0725 13.2201H8.82119C8.54519 13.2201 8.32119 13.4441 8.32119 13.7201C8.32119 13.9961 8.54519 14.2201 8.82119 14.2201H13.0725C13.3485 14.2201 13.5725 13.9961 13.5725 13.7201C13.5725 13.4441 13.3485 13.2201 13.0725 13.2201Z"
                                fill="#6D6D6D"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.24461 5.88109C6.3109 5.79291 6.43608 5.77507 6.52437 5.84121L9.97768 8.42815C10.0662 8.49442 10.0841 8.61989 10.0177 8.70829L6.80459 12.9882C6.03125 14.0215 4.86459 14.2282 4.05792 14.2282C3.55792 14.2282 3.19792 14.1482 3.15792 14.1415C3.07125 14.1215 2.99125 14.0615 2.94459 13.9815C2.89792 13.8948 1.75125 11.8548 3.03125 10.1549L6.24461 5.88109Z"
                                fill="#6D6D6D"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.3046 6.99484L10.8579 7.58866C10.7916 7.67681 10.6665 7.69464 10.5782 7.6285L7.1243 5.04115C7.03604 4.97503 7.01795 4.84994 7.08387 4.76153L7.53126 4.16151C7.99126 3.54151 8.70459 3.21484 9.42459 3.21484C9.91792 3.21484 10.4113 3.36818 10.8379 3.68818C11.3379 4.06818 11.6646 4.62151 11.7579 5.24151C11.8446 5.86818 11.6846 6.48818 11.3046 6.99484Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
                          onClick={() => {
                            setIsEdit(!isEdit);
                          }}></Button>
                      </Tooltip>
                    </Space>
                  ) : null}
                  <Tooltip title="ลบแอตทริบิวต์">
                    <Button
                      type="link"
                      className="flex items-center text-primary p-0 font-noto"
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
                            d="M10.7332 5.12004C10.7332 4.93604 10.5839 4.7867 10.3999 4.7867H1.60252C1.41785 4.7867 1.26918 4.93604 1.26918 5.12004C1.26918 5.7847 1.25718 6.40404 1.24585 6.97803C1.19652 9.47737 1.16385 11.1287 2.17385 12.1587C2.89118 12.89 4.06918 13.2167 5.99385 13.2167C7.92052 13.2167 9.10052 12.8894 9.81985 12.1567C10.8345 11.122 10.8025 9.4627 10.7552 6.94937C10.7445 6.38337 10.7332 5.77337 10.7332 5.12004Z"
                            fill="#6D6D6D"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3839 2.57123H8.62319C8.59585 2.13523 8.47519 1.52056 8.04119 1.0219C7.58252 0.494562 6.89585 0.226562 5.99985 0.226562C5.10452 0.226562 4.41785 0.494562 3.95919 1.0219C3.52519 1.52056 3.40385 2.13523 3.37652 2.57123H0.617188C0.341188 2.57123 0.117188 2.79523 0.117188 3.07123C0.117188 3.34723 0.341188 3.57123 0.617188 3.57123H11.3839C11.6599 3.57123 11.8839 3.34723 11.8839 3.07123C11.8839 2.79523 11.6599 2.57123 11.3839 2.57123Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      }
                      onClick={() => {
                        console.log("ลบแอตทริบิวต์");
                        setOpenDeleteModal(true);
                      }}></Button>
                  </Tooltip>
                </div>
              </div>

              <Space.Compact style={{ width: "100%" }}>
                <Form.Item<FieldType>
                  name="note"
                  className="mb-3  w-full"

                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Please input your password!',
                  //   },
                  // ]}
                >
                  {isEdit === false ? (
                    <Input placeholder="..." className="font-noto" />
                  ) : (
                    <span className="">{note}</span>
                  )}
                </Form.Item>
                {isEdit === false ? (
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => {
                      setIsEdit(!isEdit);
                      setNote(form.getFieldValue("note"));
                    }}></Button>
                ) : null}
              </Space.Compact>
            </div>
          )}
        </div>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />

        <div className="px-[15px]  py-[5px] mb-2">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">แอตทริบิวต์ผู้ติดต่อ</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}
              onClick={() => {
                setOpenContactModal(true);
              }}>
              เพิ่มแอตทริบิวต์
            </Button>{" "}
          </div>
          {_.isEmpty(listChatInfoAttribute) ? (
            <span className="font-noto text-sm text-drak-grey mt-3">
              {" "}
              เพิ่มแอตทริบิวต์
            </span>
          ) : (
            <div className="flex flex-col mb-3">
              <div className="flex  justify-between items-center">
                <span className="text-xs text-[#919191]">
                  {listChatInfoAttribute.name}
                </span>
                <div className="flex">
                  {isEditContact ? (
                    <>
                      {" "}
                      <Tooltip title="คัดลอกแอตทริบิวต์">
                        <Button
                          type="link"
                          className="flex items-center text-primary p-0 font-noto"
                          icon={
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10.5979 15.3009H8.5312C6.3912 15.3009 4.64453 13.5609 4.64453 11.4143V9.3476C4.64453 7.2076 6.38453 5.46094 8.5312 5.46094H10.5979C12.7379 5.46094 14.4845 7.20094 14.4845 9.3476V11.4143C14.4845 13.5543 12.7445 15.3009 10.5979 15.3009ZM8.5312 6.46094C6.93786 6.46094 5.64453 7.75427 5.64453 9.3476V11.4143C5.64453 13.0076 6.93786 14.3009 8.5312 14.3009H10.5979C12.1912 14.3009 13.4845 13.0076 13.4845 11.4143V9.3476C13.4845 7.75427 12.1912 6.46094 10.5979 6.46094H8.5312Z"
                                fill="#6D6D6D"
                              />
                              <path
                                d="M7.45562 2.14062H5.20229C3.1662 2.14062 1.51562 3.7912 1.51562 5.82729V8.08063C1.51562 10.1167 3.1662 11.7673 5.20229 11.7673H7.45562C9.49171 11.7673 11.1423 10.1167 11.1423 8.08063V5.82729C11.1423 3.7912 9.49171 2.14062 7.45562 2.14062Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
                          onClick={() => {}}></Button>
                      </Tooltip>
                      <Tooltip title="แก้ไขแอตทริบิวต์">
                        <Button
                          type="link"
                          className="flex items-center text-primary p-0 font-noto"
                          icon={
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.0725 13.2201H8.82119C8.54519 13.2201 8.32119 13.4441 8.32119 13.7201C8.32119 13.9961 8.54519 14.2201 8.82119 14.2201H13.0725C13.3485 14.2201 13.5725 13.9961 13.5725 13.7201C13.5725 13.4441 13.3485 13.2201 13.0725 13.2201Z"
                                fill="#6D6D6D"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.24461 5.88109C6.3109 5.79291 6.43608 5.77507 6.52437 5.84121L9.97768 8.42815C10.0662 8.49442 10.0841 8.61989 10.0177 8.70829L6.80459 12.9882C6.03125 14.0215 4.86459 14.2282 4.05792 14.2282C3.55792 14.2282 3.19792 14.1482 3.15792 14.1415C3.07125 14.1215 2.99125 14.0615 2.94459 13.9815C2.89792 13.8948 1.75125 11.8548 3.03125 10.1549L6.24461 5.88109Z"
                                fill="#6D6D6D"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.3046 6.99484L10.8579 7.58866C10.7916 7.67681 10.6665 7.69464 10.5782 7.6285L7.1243 5.04115C7.03604 4.97503 7.01795 4.84994 7.08387 4.76153L7.53126 4.16151C7.99126 3.54151 8.70459 3.21484 9.42459 3.21484C9.91792 3.21484 10.4113 3.36818 10.8379 3.68818C11.3379 4.06818 11.6646 4.62151 11.7579 5.24151C11.8446 5.86818 11.6846 6.48818 11.3046 6.99484Z"
                                fill="#6D6D6D"
                              />
                            </svg>
                          }
                          onClick={() => {
                            setIsEdit(!isEditContact);
                          }}></Button>
                      </Tooltip>
                    </>
                  ) : null}
                  <Tooltip title="ลบแอตทริบิวต์">
                    <Button
                      type="link"
                      className="flex items-center text-primary p-0 font-noto"
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
                            d="M10.7332 5.12004C10.7332 4.93604 10.5839 4.7867 10.3999 4.7867H1.60252C1.41785 4.7867 1.26918 4.93604 1.26918 5.12004C1.26918 5.7847 1.25718 6.40404 1.24585 6.97803C1.19652 9.47737 1.16385 11.1287 2.17385 12.1587C2.89118 12.89 4.06918 13.2167 5.99385 13.2167C7.92052 13.2167 9.10052 12.8894 9.81985 12.1567C10.8345 11.122 10.8025 9.4627 10.7552 6.94937C10.7445 6.38337 10.7332 5.77337 10.7332 5.12004Z"
                            fill="#6D6D6D"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3839 2.57123H8.62319C8.59585 2.13523 8.47519 1.52056 8.04119 1.0219C7.58252 0.494562 6.89585 0.226562 5.99985 0.226562C5.10452 0.226562 4.41785 0.494562 3.95919 1.0219C3.52519 1.52056 3.40385 2.13523 3.37652 2.57123H0.617188C0.341188 2.57123 0.117188 2.79523 0.117188 3.07123C0.117188 3.34723 0.341188 3.57123 0.617188 3.57123H11.3839C11.6599 3.57123 11.8839 3.34723 11.8839 3.07123C11.8839 2.79523 11.6599 2.57123 11.3839 2.57123Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      }
                      onClick={() => {
                        deleteContactAttribute();
                      }}></Button>
                  </Tooltip>
                </div>
              </div>

              <Space.Compact style={{ width: "100%" }}>
                <Form.Item<FieldType>
                  name="note"
                  className="mb-3  w-full"

                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Please input your password!',
                  //   },
                  // ]}
                >
                  {isEditContact === false ? (
                    <Input placeholder="..." className="font-noto" />
                  ) : (
                    <span className="">{noteContact}</span>
                  )}
                </Form.Item>
                {isEditContact === false ? (
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => {
                      setIsEditContact(!isEditContact);
                      setNoteContact(form.getFieldValue("note"));
                    }}></Button>
                ) : null}
              </Space.Compact>
            </div>
          )}
        </div>
      </Form>
      <SearchChatInfoAttributeModal
        setOpen={setOpenTagModal}
        open={openTagModal}
        setListAttribute={setListChatInfoAttribute}
        listAttribute={listChatInfoAttribute}
      />
      <ChatInfoAttributeConfirmModal
        setOpen={setOpenDeleteModal}
        open={openDeleteModal}
        name={listChatInfoAttribute.name}
        handelDelete={deleteChatInfoAttribute}
      />
      <SearchContactAttributeModal
        setOpen={setOpenContactModal}
        open={openContactModal}
        setListAttribute={setListContactAttribute}
        listAttribute={listContactAttribute}
      />

      {/* <AlertComponent /> */}
    </div>
  );
}
