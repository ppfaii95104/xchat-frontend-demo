"use client"; // This is a client component 👈🏽
import React, { ReactNode, useEffect, useRef, useState } from "react";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import {
  Layout,
  Menu,
  Button,
  theme,
  Input,
  Divider,
  Select,
  Empty,
  Avatar,
  Form,
  Checkbox,
  Space,
  InputRef,
  FormProps,
  Segmented,
  Tag,
  SelectProps,
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
} from "@ant-design/icons";
import _ from "lodash";
import {
  prioritySample,
  tagSample,
  userList,
  userListSample,
  userTeam,
} from "@/app/chat/sampleData";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import AddTagProfileModal from "./AddTagProfileModal";
import { tagType } from "@/app/chat/typeData";
import TagProfileComponents from "./TagProfileComponents";
import SearchTagProfileComponents from "./SearchTagProfileModal";
import SearchParticipantsModal from "./SearchParticipantsModal";
type FieldType = {
  search?: string;
  type?: string;
  assign?: number;
  priority?: number;
};

export default function TabSetting(_prop: any) {
  const [form] = Form.useForm();
  const [type, setType] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  type TagRender = SelectProps["tagRender"];
  const [listTag, setListTag] = useState<tagType[]>([]);
  const [optionsPriority, setOptionsPriority] = useState<any[]>(prioritySample);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    _prop?.setOpen(false);
  };
  const [openTagModal, setOpenTagModal] = useState(false);
  const [openSearchParticipantsModal, setOpenSearchParticipantsModal] =
    useState(false);
  const [listParticipants, setListParticipants] = useState<any[]>([]);
  const mapData = (values: any) => {
    const arr: any[] = [];
    _.map(values, (items: any) => {
      arr.push({
        label: items.name,
        value: items.id,
        image: items.image,
      });
    });
    console.log("arr", arr);
    setOptions(arr);
  };

  const tagRender: TagRender = (props: any) => {
    const { label, value, closable, onClose } = props;
    let result = _.find(
      options,
      (o) => _.toSafeInteger(o.value) === _.toSafeInteger(value)
    );
    return (
      <div className="flex items-center justify-between w-[200px]">
        <div className="flex items-center">
          {result?.image ? (
            <Avatar size={25} src={result.image} className="mr-2" />
          ) : (
            <Avatar size={25} icon={<UserOutlined />} className="mr-2" />
          )}
          {label}
        </div>

        {/* <CloseOutlined onClick={onClose} /> */}
      </div>
    );
  };
  const tagRenderAssign: TagRender = (props: any) => {
    const { label, value, closable, onClose } = props;
    let result = _.find(
      optionsPriority,
      (o) => _.toSafeInteger(o.value) === _.toSafeInteger(value)
    );
    return (
      <div className="flex items-center justify-between w-[200px]">
        <div className="flex items-center">
          {result?.tag}
          {label}
        </div>

        {/* <CloseOutlined onClick={onClose} /> */}
      </div>
    );
  };

  useEffect(() => {
    mapData(userTeam);
    // setListTag(tagSample);
  }, []);

  return (
    <div>
      <Form
        name="basic"
        autoComplete="off"
        layout="vertical"
        onFinish={onFinish}
        form={form}>
        <Form.Item<FieldType>
          label="มอบหมาย"
          name="assign"
          className="px-[15px] py-[5px] mb-2"
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input your password!',
          //   },
          // ]}
        >
          <Select
            placeholder="เลือกผู้ได้รับมอบหมาย"
            options={options}
            mode="tags"
            maxCount={1}
            allowClear
            tagRender={tagRender}
            optionRender={(option) => (
              <Space>
                <div className="flex items-center justify-between w-full">
                  {option.data?.image ? (
                    <Avatar
                      size={25}
                      src={option.data.image}
                      className="mr-2"
                    />
                  ) : (
                    <Avatar
                      size={25}
                      icon={<UserOutlined />}
                      className="mr-2"
                    />
                  )}
                  {option.data.label}
                </div>
              </Space>
            )}
            dropdownRender={(menu) => (
              <>
                <Space style={{ padding: "0 4px" }}>
                  <div className="w-full flex  flex-col">
                    <Form.Item<FieldType>
                      name="search"
                      className="mb-0 w-full"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: 'Please input your password!',
                      //   },
                      // ]}
                    >
                      <Input
                        placeholder="ค้นหา..."
                        className="font-noto"
                        prefix={
                          <SearchOutlined
                            onClick={() => {
                              form.submit();
                            }}
                          />
                        }
                      />
                    </Form.Item>
                    <div className="flex items-center justify-between my-2">
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
                            mapData(value === "ทีม" ? userTeam : userList);
                          }}
                        />
                      </Form.Item>
                      <Button
                        className=" font-noto flex justify-center items-center text-primary border-primary"
                        onClick={() => {
                          form.setFieldValue("assign", 1);
                        }}>
                        มอบหมายให้ฉัน
                      </Button>
                    </div>
                  </div>
                </Space>
                {menu}

                <Divider style={{ margin: "0 4px" }} />
              </>
            )}
          />
        </Form.Item>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <Form.Item<FieldType>
          label="ลำดับความสำคัญ"
          name="priority"
          className="px-[15px] py-[5px] mb-2"
          // rules={[
          //   {
          //     required: true,
          //     message: 'Please input your password!',
          //   },
          // ]}
        >
          <Select
            placeholder="มอบหมายให้พนักงาน, ทีม หรือตัวเอง"
            options={optionsPriority}
            mode="tags"
            maxCount={1}
            allowClear
            tagRender={tagRenderAssign}
            optionRender={(option) => (
              <Space>
                <div className="flex items-center justify-between w-full">
                  {option.data.tag}
                  {option.data.label}
                </div>
              </Space>
            )}
          />
        </Form.Item>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <div className="px-[15px] py-[5px] mb-2 flex flex-col">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">แท็ก</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}
              onClick={() => {
                setOpenTagModal(true);
              }}>
              เพิ่มแท็ก
            </Button>
          </div>

          {_.isEmpty(listTag) ? (
            <span className="font-noto text-sm text-drak-grey mt-3">
              {" "}
              เพิ่มแท็กกำกับการสนทนา
            </span>
          ) : (
            <div>
              {" "}
              <TagProfileComponents listTag={listTag} />
            </div>
          )}
        </div>
        <Divider
          className="m-0"
          style={{
            borderBlockStart: "2px solid rgba(5, 5, 5, 0.06)",
          }}
        />
        <div className="px-[15px] py-[5px] mb-2 flex flex-col">
          <div className=" mb-2 flex justify-between items-center">
            <span className="font-noto">รายชื่อผู้เข้าร่วม</span>
            <Button
              type="link"
              className="flex items-center text-primary p-0 font-noto"
              icon={<BiSolidPlusSquare />}
              onClick={() => {
                setOpenSearchParticipantsModal(true);
              }}>
              เพิ่มรายชื่อ
            </Button>
          </div>
          {_.isEmpty(listParticipants) ? (
            <span className="font-noto text-sm text-drak-grey mt-3">
              {" "}
              เพิ่มผู้เข้าร่วมกำกับการสนทนา
            </span>
          ) : (
            <div>
              {_.map(listParticipants, (item: any) => {
                return (
                  <>
                    {item.image ? (
                      <Avatar size={35} src={item.image} className="mr-2" />
                    ) : (
                      <Avatar
                        size={35}
                        icon={<UserOutlined />}
                        className="mr-2"
                      />
                    )}
                  </>
                );
              })}
            </div>
          )}
        </div>
      </Form>
      <SearchTagProfileComponents
        setOpen={setOpenTagModal}
        open={openTagModal}
        setListTag={setListTag}
        listTag={listTag}
      />
      <SearchParticipantsModal
        setOpen={setOpenSearchParticipantsModal}
        open={openSearchParticipantsModal}
        listParticipants={listParticipants}
        setListParticipants={setListParticipants}
      />
    </div>
  );
}
