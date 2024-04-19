"use client"; // This is a client component 👈🏽
import {
  Badge,
  Button,
  ColorPicker,
  ColorPickerProps,
  Form,
  FormProps,
  GetProp,
  Input,
  Modal,
  Select,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
type FieldType = {
  search?: string;
};
import { SearchOutlined, CheckOutlined } from "@ant-design/icons";
import TagComponents from "./TagComponents";
import { tagType } from "@/app/chat/typeData";
import { BiSolidPlusSquare } from "react-icons/bi";
import AddTagModal from "./AddTagModal";
import AddTagProfileModal from "./AddTagProfileModal";
import {
  listChatInfoAttributeSample,
  tagSample,
  userList,
} from "@/app/chat/sampleData";

export default function SearchChatInfoAttributeModal(_prop: any) {
  const [form] = Form.useForm();
  const [listData, setListData] = useState<any[]>(listChatInfoAttributeSample);

  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    if (_.isEmpty(values.search)) {
      setListData(userList);
    } else {
      const filter = _.filter(userList, (a) => a.name === values.search);
      setListData(filter);
    }
  };
  const onSelect = async (values: any) => {
    //   const newData = _prop?.listAttribute;

    //   const find = _.findIndex(newData, (a) => a === values);
    //   if (find >= 0) {
    //     newData.splice(find, 1);
    //   } else {
    //     const newData = _prop?.listAttribute;
    //     newData.push(values);
    //   }
    //   console.log({ newData });
    //   _prop?.setListAttribute([...newData]);

    _prop?.setListAttribute({ ...values });
    _prop?.setOpen(false);
  };

  return (
    <Modal
      open={_prop?.open}
      style={{ top: "53%", left: "32%" }}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
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
              allowClear
              prefix={
                <SearchOutlined
                  onClick={() => {
                    form.submit();
                  }}
                />
              }
            />
          </Form.Item>
          <div className="h-[200px] w-full flex flex-col mt-5 overflow-y-auto">
            {_.isEmpty(listData) ? (
              <div>
                <div className="h-[100px] w-full flex items-center justify-center font-noto text-drak-grey">
                  ไม่พบแอตทริบิวต์นี้
                </div>
              </div>
            ) : (
              <>
                {_.map(listData, (item: tagType) => {
                  return (
                    <Button
                      className="flex items-center text-drak-grey p-3 font-noto w-full justify-between border-0 mb-2"
                      onClick={async () => {
                        await onSelect(item);
                      }}
                      style={{
                        backgroundColor:
                          _prop?.listAttribute === item
                            ? "var(--primary-light)"
                            : "var(--grey)",
                      }}
                      key={item.id}>
                      <div className="flex items-center">{item.name}</div>
                      <CheckOutlined
                        style={{
                          visibility:
                            _prop?.listAttribute === item
                              ? "visible"
                              : "hidden",
                          color: "var(--primary)",
                        }}
                      />
                    </Button>
                  );
                })}
              </>
            )}
          </div>
        </Form>
      </div>
    </Modal>
  );
}
