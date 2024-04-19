"use client"; // This is a client component 👈🏽
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
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
import { SearchOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import TagComponents from "./TagComponents";
import { tagType } from "@/app/chat/typeData";
import { BiSolidPlusSquare } from "react-icons/bi";
import AddTagModal from "./AddTagModal";
import AddTagProfileModal from "./AddTagProfileModal";
import { userList } from "@/app/chat/sampleData";

export default function SearchParticipantsModal(_prop: any) {
  const [form] = Form.useForm();

  const [data, setData] = useState<any[]>(userList);
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    if (_.isEmpty(values.search)) {
      setData(userList);
    } else {
      const filter = _.filter(userList, (a) => a.name === values.search);
      setData(filter);
    }
  };
  const selectUser = async (values: any) => {
    const newData = _prop?.listParticipants;
    _prop?.setListParticipants([]);
    const find = _.findIndex(newData, (a) => a === values);
    if (find >= 0) {
      newData.splice(find, 1);
    } else {
      const newData = _prop?.listParticipants;
      newData.push(values);
    }
    console.log({ newData });
    _prop?.setListParticipants([...newData]);
    _prop?.setOpen(false);
  };

  return (
    <Modal
      title={
        <Button
          type="link"
          className="flex items-center text-grey-lable p-0"
          onClick={() => {
            _prop?.setOpen(false);
          }}>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.955206 6.79492C0.74453 6.58399 0.626195 6.29805 0.626195 5.99992C0.626195 5.7018 0.74453 5.41586 0.955206 5.20492L5.19721 0.961425C5.40825 0.750479 5.69445 0.63201 5.99285 0.63208C6.29124 0.63215 6.57738 0.750754 6.78833 0.9618C6.99928 1.17285 7.11775 1.45905 7.11768 1.75744C7.11761 2.05583 6.999 2.34198 6.78796 2.55292L3.34096 5.99992L6.78796 9.44693C6.99299 9.65901 7.10651 9.94313 7.10409 10.2381C7.10167 10.5331 6.98349 10.8153 6.775 11.024C6.56651 11.2327 6.2844 11.3511 5.98943 11.3538C5.69446 11.3565 5.41023 11.2433 5.19796 11.0384L0.954455 6.79567L0.955206 6.79492Z"
              fill="#6D6D6D"
            />
          </svg>
          กลับ
        </Button>
      }
      open={_prop?.open}
      style={{ top: "53%", left: "32%" }}
      onOk={() => _prop?.setOpen(false)}
      onCancel={() => _prop?.setOpen(false)}
      width={350}
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
            {_.isEmpty(data) ? (
              <div className="h-[100px] w-full flex items-center justify-center font-noto text-drak-grey">
                ไม่พบรายชื่อผู้เข้าร่วม
              </div>
            ) : (
              <div className="h-[600px] w-full flex flex-col overflow-y-auto">
                {_.map(data, (item) => {
                  return (
                    <Button
                      className="w-full h-[50px] p-2 flex items-center relative border-[1px]  border-grey my-1 hover:border-primary hover:bg-primary-light"
                      style={{
                        backgroundColor: _.find(
                          [..._prop?.listParticipants],
                          (a) => a === item
                        )
                          ? "var(--primary-light)"
                          : "var(--white)",
                      }}
                      onClick={async () => {
                        await selectUser(item);
                      }}>
                      <div className="flex  items-center mx-2 w-[90%] ">
                        {item.image ? (
                          <Avatar size={35} src={item.image} />
                        ) : (
                          <Avatar size={35} icon={<UserOutlined />} />
                        )}

                        <div className="flex flex-col mx-2 w-[45%]">
                          <span className="font-noto chat-name my-1  text-justify">
                            {item.name}
                          </span>
                        </div>
                      </div>

                      <CheckOutlined
                        style={{
                          visibility: _.find(
                            [..._prop?.listParticipants],
                            (a) => a === item
                          )
                            ? "visible"
                            : "hidden",
                          color: "var(--primary)",
                        }}
                      />
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        </Form>
      </div>
    </Modal>
  );
}
