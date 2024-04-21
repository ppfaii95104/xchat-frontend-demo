import LeftMessenge from "@/components/chatPage/LeftMessenge";
import NoteMessenge from "@/components/chatPage/NoteMessenge";
import RightMessenge from "@/components/chatPage/RightMessenge";
import TimeMessenge from "@/components/chatPage/TimeMessenge";
import { tagType } from "./typeData";
import { Tag } from "antd";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
export const options = [
  {
    label: "ทั้งหมด",
    value: "all",
  },
  {
    label: "เปิด และยังไม่ได้อ่าน",
    value: "1",
  },
  {
    label: "เสร็จสิ้น",
    value: "2",
  },
  {
    label: "กำลังร้องขอ",
    value: "3",
  },
  {
    label: "หลับ",
    value: "4",
  },
];
export const messenge = [
  { element: <TimeMessenge /> },
  { element: <LeftMessenge /> },
  { element: <RightMessenge /> },
  { element: <RightMessenge /> },
  { element: <TimeMessenge /> },
  { element: <NoteMessenge /> },
  { element: <LeftMessenge /> },
  { element: <LeftMessenge /> },
  { element: <LeftMessenge /> },
];
export const tagSample: tagType[] = [
  { id: 1, messenge: "TikTok", name: "สมาชิกใหม่", desc: "", color: "#4A84F6" },
  { id: 2, messenge: "TikTok", name: "On precess", desc: "", color: "#F6A74A" },
  { id: 3, messenge: "TikTok", name: "ยังไม่ว่าง", desc: "", color: "#F64A4A" },
];
export const userListSample = [
  {
    id: 1,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: true,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 2,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 3,
    name: "Salome Simoes",
    text: "Lorem ipsum dolor",
    app: "Tiktok",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
  },
  {
    id: 4,
    name: "Trevor Virtue",
    text: "Lorem ipsum dolor",
    app: "WhatsApp",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
  },
  {
    id: 5,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 6,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 7,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 8,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 9,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 10,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 11,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 12,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 13,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 14,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 15,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 16,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 17,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 18,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 19,
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    pin: false,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
];
export const userList = [
  {
    id: 1,
    name: "Xchat",
    role: "Xchat",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 2,
    name: "Admin",
    role: "Xchat",

    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  { id: 3, name: "BCMKT", role: "Xchat" },
  { id: 4, name: "SGA", role: "Xchat" },
];
export const userTeam = [
  {
    id: 1,
    name: "Team 1",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 2,
    name: "Team 2",

    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    id: 3,
    name: "Team 3",
    image: null,
  },
  {
    id: 4,
    name: "Team 4",
    image: null,
  },
];
export const prioritySample = [
  {
    label: "ไม่มี",
    value: 1,
    bgColor: "#D7DCE0",
    color: "#48535C",
    tag: (
      <Tag bordered={false} color="#D7DCE0" className="mr-2">
        <span className="text-[#48535C]">/</span>
      </Tag>
    ),
  },
  {
    label: "Low",
    value: 2,
    bgColor: "#DBEAFE",
    color: "#3B82F6",
    tag: (
      <Tag bordered={false} color="#DBEAFE" className="mr-2 py-[3px] px-[4px]">
        <BsChevronDown className="text-[#3B82F6]" />
      </Tag>
    ),
  },
  {
    label: "Medium",
    value: 3,
    bgColor: "#FEF3C7",
    color: "#EAAB08",
    tag: (
      <Tag bordered={false} color="#FEF3C7" className="mr-2 py-[3px] px-[3px]">
        <BsChevronUp className="text-[#EAAB08]" />
      </Tag>
    ),
  },
  {
    label: "High",
    value: 4,
    bgColor: "#FED7AA",
    color: "#EA580C",
    tag: (
      <Tag bordered={false} color="#FED7AA" className="mr-2 py-[4px] px-[5px]">
        <svg
          className="text-[#EA580C]"
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.5 4.97266L4 1.47266L7.5 4.97266"
            stroke="#EA580C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 8.47266L4 4.97266L7.5 8.47266"
            stroke="#EA580C"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Tag>
    ),
  },
  {
    label: "Urgent",
    value: 5,
    bgColor: "#FEE2E2",
    color: "#DC2626",
    tag: (
      <Tag bordered={false} color="#FEE2E2" className="mr-2 py-[3px] px-[5px]">
        <svg
          className="text-[#DC2626]"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.5 4.22266L4 0.722656L7.5 4.22266"
            stroke="#DC2626"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 7.72266L4 4.22266L7.5 7.72266"
            stroke="#DC2626"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.5 11.2227L4 7.72266L7.5 11.2227"
            stroke="#DC2626"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Tag>
    ),
  },
];
export const listChatInfoAttributeSample = [
  {
    id: 1,
    name: "Lorem ipsum",
    desc: "Lorem ipsum",
    type: "Text",
    keysde: "Text",
  },
];
export const historyListSample = [
  {
    id: 1,
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    admin: "Admin-X1",
    time: "31 พ.ย. 66",
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
];
