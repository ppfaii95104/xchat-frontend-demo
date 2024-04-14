"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellFilled,
  SwapOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUsers, HiChartBarSquare } from "react-icons/hi2";
import { Layout, Menu, Button, theme, Input, Avatar, Select } from "antd";
import logo from "@/asset/logo/logo.png";
import { Noto_Sans_Thai } from "next/font/google";
import ChangeAdminModal from "../ChangeAdminModal";
const { Header, Sider, Content } = Layout;

export default function LayoutPage(_prop: any) {
  const [openChangeAdmin, setOpenChangeAdmin] = useState(false);
  const [adminData, setAdminData] = useState<any>({
    id: 1,
    name: "Xchat",
    role: "Xchat",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  });
  const setAdmin = (value: any) => {
    console.log("🚀 ~ setAdmin ~ value:", value);
    setAdminData(value);
    setOpenChangeAdmin(false);
  };
  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
      }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={true}
        className="main-menu"
        style={{
          background: "#fff",
          borderInlineEnd: "1px solid rgba(5, 5, 5, 0.06)",
        }}
        width={50}>
        <div className="flex items-center justify-center my-5">
          <Image width={35} height={35} src={logo} alt={""} />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <IoChatbubbleEllipses />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <GrAnnounce />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <HiMiniUsers />,
              label: "nav 3",
            },
            {
              key: "4",
              icon: <HiChartBarSquare />,
              label: "nav 4",
            },
            {
              key: "5",
              icon: <IoIosSettings />,
              label: "nav 5",
            },
          ]}
          style={{
            borderInlineEnd: "0",
            padding: "0 17px",
          }}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 20px",
            background: "#fff",
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <div className="flex items-center ">
            <Button
              style={{
                width: "25px",
              }}
              type="link"
              block
              icon={
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8558 10.6351C13.1499 9.08264 13.1683 8.49848 13.2008 7.43681C13.2091 7.18598 13.2174 6.91348 13.2174 6.60098C13.2174 4.12014 11.4433 0.625977 7.49993 0.625977C3.5566 0.625977 1.78243 4.12014 1.78243 6.60098C1.78243 6.91264 1.79077 7.18598 1.7991 7.43681C1.8316 8.49848 1.8491 9.08264 1.13577 10.656C0.830768 11.4426 0.867434 12.1218 1.2466 12.6751C2.1566 14.0068 4.78993 14.1901 7.49993 14.1901C10.2099 14.1901 12.8433 14.0068 13.7533 12.6751C14.1333 12.1218 14.1699 11.4426 13.8558 10.6351Z"
                    fill="#6D6D6D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.74768 15.0337C8.38851 15.1846 6.91518 15.1837 5.24018 15.0321C4.98935 15.0121 4.74101 15.1446 4.62601 15.3737C4.51018 15.6037 4.54685 15.8796 4.71768 16.0712C5.46768 16.9104 6.45435 17.3737 7.49601 17.3737H7.49768C8.54185 17.3737 9.53101 16.9112 10.2827 16.0712C10.4552 15.8787 10.491 15.5987 10.3727 15.3679C10.2535 15.1387 10.0085 15.0104 9.74768 15.0337Z"
                    fill="#6D6D6D"
                  />
                </svg>
              }></Button>
            <Button
              style={{
                width: "150px",
                margin: "0 10px",
              }}
              className="bg-grey text-drak-grey flex justify-between items-center"
              block
              onClick={() => {
                setOpenChangeAdmin(true);
              }}>
              <p className="truncate ... w-[80%] text-start">
                {adminData.name}
              </p>
              <SwapOutlined />
            </Button>
            {adminData.image ? (
              <Avatar size={32} src={adminData.image} />
            ) : (
              <Avatar size={32} icon={<UserOutlined />} />
            )}
          </div>
        </Header>
        <Content
          style={{
            height: "100vh",
            background: "#F4F5F9",
          }}>
          {_prop.children}
        </Content>
      </Layout>
      <ChangeAdminModal
        setOpen={setOpenChangeAdmin}
        open={openChangeAdmin}
        setAdmin={setAdmin}
      />
    </Layout>
  );
}
