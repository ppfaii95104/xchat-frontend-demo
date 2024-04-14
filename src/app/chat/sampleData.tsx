import LeftMessenge from "@/components/LeftMessenge";
import NoteMessenge from "@/components/NoteMessenge";
import RightMessenge from "@/components/RightMessenge";
import TimeMessenge from "@/components/TimeMessenge";
import { tagType } from "./typeData";
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
  { messenge: "TikTok", name: "สมาชิกใหม่", desc: "", color: "#4A84F6" },
  { messenge: "TikTok", name: "On precess", desc: "", color: "#F6A74A" },
  { messenge: "TikTok", name: "ยังไม่ว่าง", desc: "", color: "#F64A4A" },
];
export const userListSample = [
  {
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
  {
    name: "Salome Simoes",
    text: "Lorem ipsum dolor",
    app: "Tiktok",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
  },
  {
    name: "Trevor Virtue",
    text: "Lorem ipsum dolor",
    app: "WhatsApp",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
  },
  {
    name: "Jane Meldrum",
    text: "Lorem ipsum dolor",
    app: "Chatfast.app",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
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
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    name: "Eugenia Anders",
    text: "Lorem ipsum dolor",
    app: "Telegram",
    status: "ยังไม่มอบหมาย",
    time: "7 นาที",
    num: 1,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
];
