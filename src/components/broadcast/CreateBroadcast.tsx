"use client"; // This is a client component 👈🏽
import {
  Avatar,
  Badge,
  Button,
  DatePicker,
  Divider,
  Form,
  FormProps,
  Input,
  Select,
  Switch,
  Tag,
} from "antd";
import React, { useState } from "react";
import { BiSolidPlusSquare } from "react-icons/bi";
import { HiMiniUser } from "react-icons/hi2";
import CustomDatePicker from "../DatePicker";
import { FaAt } from "react-icons/fa";
import SelectAdminModal from "./SelectAdminModal";
import _ from "lodash";
import SelectTagModal from "./SelectTagModal";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
type FieldType = {
  status?: string;
  timer?: string;
  text?: string;
  reloadChat?: boolean;
};
export default function CreateBroadcast(_prop: any) {
  const [form] = Form.useForm();
  const [openSelectAdminModal, setOpenSelectAdminModal] = useState(false);
  const [openSelectTagModal, setOpenSelectTagModal] = useState(false);
  const [adminList, setAdminList] = useState<any>([]);
  const [tagList, setTagList] = useState<any>([]);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    form.resetFields();
  };
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const addAdmin = (values: any) => {
    const newData = adminList;
    _.map(values, (item: any) => {
      newData.push(item);
    });

    setAdminList(newData);
    setOpenSelectAdminModal(false);
  };
  const addTag = (values: any) => {
    const newData = tagList;
    _.map(values, (item: any) => {
      newData.push(item);
    });

    setTagList([...newData]);
    setOpenSelectTagModal(false);
  };
  const deleteTag = (values: any) => {
    const newData = tagList;
    const find = _.findIndex(newData, (a) => a === values);

    newData.splice(find, 1);
    setTagList([...newData]);
  };
  const deleteAdmin = (values: any) => {
    const newData = adminList;
    const find = _.findIndex(newData, (a) => a === values);

    newData.splice(find, 1);
    setAdminList([...newData]);
  };
  return (
    <div className="pt-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <span className="font-noto text-grey-lable text-sm pl-2 font-semibold mr-4">
            แอดมิน
          </span>
          <Tag color="#EDF3FF">
            <span className="text-drak-grey font-noto flex items-center">
              <HiMiniUser className="text-[#4A84F6] mr-1" />
              จำนวนแอดมิน : 0 บัญชี
            </span>
          </Tag>
          <Tag color="var(--success-light)">
            <span className="text-drak-grey font-noto flex items-center">
              <HiMiniUser className="text-[var(--success)] mr-1" />
              จำนวนแชทที่เลือก : 0 แชท
            </span>
          </Tag>
          <Tag color="var(--primary-light)">
            <span className="text-drak-grey font-noto flex items-center">
              <HiMiniUser className="text-[var(--primary)] mr-1" />
              กำลังทำงานอยู่ : 0/0 รายการ
            </span>
          </Tag>
        </div>
        <Button
          type="link"
          className="flex items-center text-primary p-0 font-noto"
          icon={<BiSolidPlusSquare />}
          onClick={() => {
            setOpenSelectAdminModal(true);
          }}>
          เลือกแอดมิน
        </Button>
      </div>
      <Divider className="my-2" />
      <div>
        {_.map(adminList, (item: any) => {
          return (
            <Tag
              closeIcon
              onClose={() => {
                deleteAdmin(item);
              }}
              className=" my-1">
              {item.image ? (
                <Avatar size={15} src={item.image} />
              ) : (
                <Avatar size={15} icon={<UserOutlined />} />
              )}

              <span className="ml-1 ">{item.name}</span>
            </Tag>
          );
        })}
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <span className="font-noto text-grey-lable text-sm pl-2 font-semibold mr-4">
            แท็ก
          </span>

          <Button
            type="link"
            className="flex items-center text-primary p-0 font-noto"
            icon={<BiSolidPlusSquare />}
            onClick={() => {
              setOpenSelectTagModal(true);
            }}>
            เลือกแท็ก
          </Button>
        </div>
        <div>
          {_.map(tagList, (item: any) => {
            return (
              <Tag
                closeIcon
                onClose={() => {
                  deleteTag(item);
                }}
                className=" my-1">
                <span className=" my-1">{item.text}</span>
              </Tag>
            );
          })}
        </div>
        <Divider className="my-2" />
        <span className="font-noto text-drak-grey">ยังไม่ได้เลือกแอดมิน</span>

        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
          form={form}>
          {" "}
          <div className="grid grid-cols-2 gap-6 mt-3">
            <Form.Item<FieldType>
              name="status"
              className="mb-0"
              label="เลือกสถานะ"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Select
                className="font-noto"
                options={[
                  { value: "1", label: "พร้อมใช้งาน" },
                  { value: "2", label: "ไม่พร้อมใช้งาน" },
                ]}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="timer"
              className="mb-0"
              label="ตั้งเวลา"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <CustomDatePicker />
            </Form.Item>
            <div className="col-span-2">
              {" "}
              <div className="flex justify-between items-center">
                <span className="font-noto text-grey-lable text-sm pl-2 font-semibold mr-4">
                  จัดการบับเบิ้ล
                </span>

                <Tag bordered>0/2</Tag>
              </div>
              <Divider className="my-2" />{" "}
              <div className="flex justify-between items-center">
                <span className="font-noto text-grey-lable">ข้อความ</span>

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
                  onClick={() => {}}></Button>
              </div>
              <Form.Item<FieldType>
                name="text"
                className="mb-0"
                label="ข้อความ"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your password!',
                //   },
                // ]}
              >
                <Input className="font-noto" placeholder="กรอกข้อความ" />
              </Form.Item>
              <Button
                className="btn-gradient font-noto flex justify-center items-center mt-1"
                onClick={() => {}}
                icon={<FaAt />}>
                ชื่อผู้ใช้
              </Button>
            </div>
          </div>
          <div className="bg-primary-light border border-dashed border-primary py-1 rounded-md mt-5 flex items-center justify-center">
            <span className="font-noto text-primary"> เพิ่มบับเบิ้ล</span>
            <div className="w-1 h-[30px] border-r-[1.5px] border-primary mx-2" />
            <div className="flex items-center">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4958 11.546H7.47915C7.13415 11.546 6.85415 11.266 6.85415 10.921C6.85415 10.576 7.13415 10.296 7.47915 10.296H13.4958C13.8408 10.296 14.1208 10.576 14.1208 10.921C14.1208 11.266 13.8408 11.546 13.4958 11.546ZM13.4958 14.6785H7.47915C7.13415 14.6785 6.85415 14.3985 6.85415 14.0535C6.85415 13.7085 7.13415 13.4285 7.47915 13.4285H13.4958C13.8408 13.4285 14.1208 13.7085 14.1208 14.0535C14.1208 14.3985 13.8408 14.6785 13.4958 14.6785ZM7.47915 7.16182H9.77499C10.12 7.16182 10.4 7.44182 10.4 7.78682C10.4 8.13182 10.12 8.41182 9.77499 8.41182H7.47915C7.13415 8.41182 6.85415 8.13182 6.85415 7.78682C6.85415 7.44182 7.13415 7.16182 7.47915 7.16182ZM10.5 2.84766C5.02915 2.84766 3.09082 4.97432 3.09082 10.9735C3.09082 16.9718 5.02915 19.0985 10.5 19.0985C15.97 19.0985 17.9092 16.9718 17.9092 10.9735C17.9092 4.97432 15.97 2.84766 10.5 2.84766Z"
                  fill="#FF6C11"
                />
              </svg>
              <svg
                className="mx-2"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.865 6.40849C8.90333 6.40849 9.74917 7.25432 9.74917 8.29266C9.74917 9.33099 8.90333 10.176 7.865 10.176C6.82667 10.176 5.98083 9.33099 5.98083 8.29266C5.98083 7.25432 6.82667 6.40849 7.865 6.40849ZM5.89667 13.161C6.88417 12.6977 7.6825 12.9843 8.455 13.2627C9.0375 13.4727 9.64083 13.6893 10.475 13.6893C11.1233 13.6893 11.5058 13.1168 12.0583 12.1718C12.6083 11.2327 13.2925 10.0635 14.6742 10.0635C16.5942 10.0635 17.7842 11.2743 18.5908 12.1668C18.6117 11.7852 18.625 11.3902 18.625 10.9727C18.625 4.97349 16.4983 2.84766 10.5 2.84766C4.50167 2.84766 2.375 4.97349 2.375 10.9727C2.375 13.2102 2.67167 14.9085 3.355 16.1593C3.785 15.3118 4.72 13.7135 5.89667 13.161Z"
                  fill="#FF6C11"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1929 13.5821C18.0704 13.4563 17.9404 13.3121 17.8012 13.1563C17.0646 12.3355 16.1471 11.313 14.6737 11.313C14.0537 11.313 13.6796 11.8763 13.1379 12.803C12.5804 13.7555 11.8879 14.9396 10.4746 14.9396C9.42208 14.9396 8.65125 14.6621 8.03125 14.438C7.30125 14.1746 6.92458 14.058 6.42875 14.2921C5.48542 14.7355 4.53875 16.5238 4.25375 17.1755C4.23708 17.2155 4.21125 17.248 4.18708 17.283C5.46792 18.5655 7.49958 19.0971 10.5004 19.0971C15.4662 19.0971 17.7729 17.6321 18.4221 13.7271C18.3379 13.6955 18.2596 13.6505 18.1929 13.5821Z"
                  fill="#FF6C11"
                />
              </svg>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8054 9.89527C16.8054 3.72027 15.8386 2.63965 10.3379 2.63965C4.8373 2.63965 3.8623 3.72027 3.8623 9.89527V11.634C3.8623 17.8009 4.82918 18.8896 10.3379 18.8896C15.8467 18.8896 16.8054 17.8009 16.8054 11.634V10.7646V9.89527Z"
                  fill="#FF6C11"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <Form.Item<FieldType>
              name="reloadChat"
              className="mb-0"

              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Switch defaultChecked onChange={onChange} />
            </Form.Item>
            <Button
              className="btn-gradient font-noto flex justify-center items-center"
              onClick={() => {
                form.submit();
              }}>
              สร้างคิวบรอดแคสต์
            </Button>
          </div>
        </Form>
      </div>
      <SelectAdminModal
        open={openSelectAdminModal}
        setOpen={setOpenSelectAdminModal}
        addAdmin={addAdmin}
      />{" "}
      <SelectTagModal
        open={openSelectTagModal}
        setOpen={setOpenSelectTagModal}
        addTag={addTag}
      />
    </div>
  );
}
