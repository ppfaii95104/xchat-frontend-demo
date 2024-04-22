import LeftMessenge from "@/components/chatPage/LeftMessenge";
import NoteMessenge from "@/components/chatPage/NoteMessenge";
import RightMessenge from "@/components/chatPage/RightMessenge";
import TimeMessenge from "@/components/chatPage/TimeMessenge";
import { tagType } from "./typeData";
import { Tag } from "antd";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const userListSample = [
  {
    id: 2,
    name: "MBK1688",
    idLine: "@594ihds",
    status: "พร้อมใช้งาน",
    account: 40,
    image:
      "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?t=st=1712671203~exp=1712674803~hmac=533413db40a1e24dc770323bbf7bc7cd6f0ea704ee61e1a9839c1eab7478c389&w=2000",
  },
  {
    id: 2,
    name: "MAJOR168 (สำรอง)",
    idLine: "@333eclhw",
    status: "พร้อมใช้งาน",
    account: 16,
    image:
      "https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?t=st=1712671549~exp=1712675149~hmac=f9f90aaa1f002b3a54ea502b3300652c9d7afe260ec245c8ea5b085b01258881&w=2000",
  },
];
export const adminListSample = [
  {
    id: 1,
    name: "mintada07",
    email: "mintada.no07@gmail.com",
  },
  {
    id: 2,
    name: "Daddy73",
    email: "dd7330187@gmail.com",
  },
  {
    id: 3,
    name: "abby",
    email: "abay03674@gmail.com",
  },
  {
    id: 4,
    name: "mintada03",
    email: "mintada.no03@gmail.com",
  },
  {
    id: 5,
    name: "mintada04",
    email: "mintada.no04@gmail.com",
  },
  {
    id: 6,
    name: "mintada07",
    email: "mintada.no07@gmail.com",
  },
  {
    id: 7,
    name: "Daddy73",
    email: "dd7330187@gmail.com",
  },
  {
    id: 8,
    name: "abby",
    email: "abay03674@gmail.com",
  },
  {
    id: 9,
    name: "mintada03",
    email: "mintada.no03@gmail.com",
  },
  {
    id: 10,
    name: "mintada04",
    email: "mintada.no04@gmail.com",
  },
  {
    id: 11,
    name: "mintada07",
    email: "mintada.no07@gmail.com",
  },
  {
    id: 12,
    name: "Daddy73",
    email: "dd7330187@gmail.com",
  },
  {
    id: 13,
    name: "abby",
    email: "abay03674@gmail.com",
  },
  {
    id: 14,
    name: "mintada03",
    email: "mintada.no03@gmail.com",
  },
  {
    id: 15,
    name: "mintada04",
    email: "mintada.no04@gmail.com",
  },
  {
    id: 16,
    name: "mintada07",
    email: "mintada.no07@gmail.com",
  },
  {
    id: 17,
    name: "Daddy73",
    email: "dd7330187@gmail.com",
  },
  {
    id: 18,
    name: "abby",
    email: "abay03674@gmail.com",
  },
  {
    id: 19,
    name: "mintada03",
    email: "mintada.no03@gmail.com",
  },
  {
    id: 10,
    name: "mintada04",
    email: "mintada.no04@gmail.com",
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
  {
    id: 6,
    name: "mintada07",
    role: "mintada.no07@gmail.com",
  },
  {
    id: 7,
    name: "Daddy73",
    role: "dd7330187@gmail.com",
  },
  {
    id: 8,
    name: "abby",
    role: "abay03674@gmail.com",
  },
  {
    id: 9,
    name: "mintada03",
    role: "mintada.no03@gmail.com",
  },
  {
    id: 10,
    name: "mintada04",
    role: "mintada.no04@gmail.com",
  },
  {
    id: 11,
    name: "mintada07",
    role: "mintada.no07@gmail.com",
  },
  {
    id: 12,
    name: "Daddy73",
    role: "dd7330187@gmail.com",
  },
  {
    id: 13,
    name: "abby",
    role: "abay03674@gmail.com",
  },
  {
    id: 14,
    name: "mintada03",
    role: "mintada.no03@gmail.com",
  },
  {
    id: 15,
    name: "mintada04",
    role: "mintada.no04@gmail.com",
  },
  {
    id: 16,
    name: "mintada07",
    role: "mintada.no07@gmail.com",
  },
  {
    id: 17,
    name: "Daddy73",
    role: "dd7330187@gmail.com",
  },
  {
    id: 18,
    name: "abby",
    role: "abay03674@gmail.com",
  },
  {
    id: 19,
    name: "mintada03",
    role: "mintada.no03@gmail.com",
  },
  {
    id: 20,
    name: "mintada04",
    role: "mintada.no04@gmail.com",
  },
  {
    id: 21,
    name: "mintada07",
    role: "mintada.no07@gmail.com",
  },
  {
    id: 22,
    name: "Daddy73",
    role: "dd7330187@gmail.com",
  },
  {
    id: 23,
    name: "abby",
    role: "abay03674@gmail.com",
  },
  {
    id: 24,
    name: "mintada03",
    role: "mintada.no03@gmail.com",
  },
  {
    id: 25,
    name: "mintada04",
    role: "mintada.no04@gmail.com",
  },
  {
    id: 26,
    name: "mintada07",
    role: "mintada.no07@gmail.com",
  },
  {
    id: 27,
    name: "Daddy73",
    role: "dd7330187@gmail.com",
  },
  {
    id: 28,
    name: "abby",
    role: "abay03674@gmail.com",
  },
  {
    id: 29,
    name: "mintada03",
    role: "mintada.no03@gmail.com",
  },
];
export const tagListSample = [
  {
    id: 2,
    text: "💰เครดิตฟรี",
  },
  {
    id: 2,
    text: "💬 ลูกค้าทั่วไป",
    emoji: "💖",
  },
  {
    id: 3,
    text: "🎁 ลูกค้ารอของรางวัล",
  },
  {
    id: 4,
    text: "🎁 ลูกค้ารอของรางวัล",
  },
  {
    id: 5,
    text: "🆘 ล่าโปร",
  },
  {
    id: 6,
    text: "👁‍🗨 ลูกค้าวีไอพี",
  },
  {
    id: 7,
    text: "🆔 ค่าคอมแนะนำเพื่อน",
  },
];
