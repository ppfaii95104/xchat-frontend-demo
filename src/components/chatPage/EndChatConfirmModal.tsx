"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import _ from "lodash";
import MessengerLogo from "@/components/logo/MessengerLogo";
import TelegramLogo from "@/components/logo/TelegramLogo";
import TiktokLogo from "@/components/logo/TiktokLogo";
import WhatsAppLogo from "@/components/logo/WhatsAppLogo";
import { Avatar, Button, Modal, Form, Input, FormProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";
type FieldType = {
  search?: string;
};
export default function EndChatConfirmModal(_prop: any) {
  return (
    <Modal
      className="assigned-confirm-modal"
      title={
        <span className="font-noto text-grey-lable text-base pl-2 font-semibold">
          จบแชทของ “{_prop?.name}”
        </span>
      }
      centered
      open={_prop?.open}
      width={300}
      closeIcon={false}
      onOk={() => {
        _prop?.setOpen(false);
      }}
      onCancel={() => {
        _prop?.setOpen(false);
      }}
      okText="จบแชท"
      cancelText="ยกเลิก">
      <div className="flex flex-col justify-center items-center">
        <svg
          width="142"
          height="110"
          viewBox="0 0 142 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M68.0747 104.755C95.7047 104.755 118.095 82.335 118.095 54.685C118.095 27.035 95.7047 4.625 68.0747 4.625C40.4447 4.625 18.0547 27.045 18.0547 54.695C18.0547 82.345 40.4547 104.765 68.0747 104.765V104.755Z"
            fill="#FFECD4"
            stroke="#FFD5A8"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M66.9043 71.4249H66.9643V60.2249C66.9643 58.4549 68.3643 57.0449 70.1443 57.0449H100.724C102.494 57.0449 103.904 58.4549 103.904 60.2249V78.5849C103.904 78.7749 103.784 78.9549 103.604 79.0149C103.414 79.0749 103.174 79.0149 103.054 78.8949L99.0843 74.9149C98.9043 74.7349 98.5943 74.6149 98.3443 74.6149H70.0843C68.3143 74.6149 66.9043 73.2049 66.9043 71.4349V71.4249Z"
            fill="#FFD5A8"
            stroke="#FFECD4"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M73.7345 91.7547C73.7345 92.8847 72.8345 93.7847 71.7045 93.7847H53.6545C53.4945 93.7847 53.3045 93.8647 53.1845 93.9747L50.6445 96.5147C50.5645 96.5947 50.4145 96.6347 50.2945 96.5947C50.1745 96.5547 50.1045 96.4347 50.1045 96.3147V84.5847C50.1045 83.4547 51.0045 82.5547 52.1345 82.5547H71.6745C72.8045 82.5547 73.7045 83.4547 73.7045 84.5847V91.7447H73.7445L73.7345 91.7547Z"
            fill="#FFD5A8"
            stroke="#FFECD4"
            stroke-width="1.28"
            stroke-miterlimit="10"
          />
          <path
            d="M55.8048 41.1277C55.8048 42.2577 54.9048 43.1577 53.7748 43.1577H35.7248C35.5648 43.1577 35.3748 43.2377 35.2548 43.3477L32.7148 45.8877C32.6348 45.9677 32.4848 46.0077 32.3648 45.9677C32.2448 45.9277 32.1748 45.8077 32.1748 45.6877V33.9577C32.1748 32.8277 33.0748 31.9277 34.2048 31.9277H53.7448C54.8748 31.9277 55.7748 32.8277 55.7748 33.9577V41.1177H55.8148L55.8048 41.1277Z"
            fill="#FFD5A8"
            stroke="#FFECD4"
            stroke-width="1.28"
            stroke-miterlimit="10"
          />
          <path
            d="M127.375 66.0643C129.485 66.0643 131.195 64.3543 131.195 62.2343C131.195 60.1143 129.485 58.4043 127.375 58.4043C125.265 58.4043 123.555 60.1143 123.555 62.2343C123.555 64.3543 125.265 66.0643 127.375 66.0643Z"
            fill="#FFECD4"
          />
          <path
            d="M22.4848 20.2744C23.8748 20.2744 25.0048 19.1444 25.0048 17.7544C25.0048 16.3644 23.8748 15.2344 22.4848 15.2344C21.0948 15.2344 19.9648 16.3644 19.9648 17.7544C19.9648 19.1444 21.0948 20.2744 22.4848 20.2744Z"
            fill="#FFECD4"
          />
          <path
            d="M123.394 38.4741C123.394 41.9041 120.664 44.6341 117.254 44.6341H62.6243C62.1543 44.6341 61.5543 44.8641 61.2043 45.2241L53.5243 52.9141C53.2943 53.1441 52.8243 53.2641 52.4543 53.1441C52.1043 53.0241 51.8643 52.6741 51.8643 52.3141V16.8241C51.8643 13.3941 54.5743 10.6641 58.0043 10.6641H117.124C120.554 10.6641 123.264 13.3941 123.264 16.8241V38.4741H123.394Z"
            fill="#FF8C37"
          />
          <path
            d="M56.9945 75.7157C56.9945 81.8057 54.5645 87.2257 50.7645 91.2957C50.4945 91.6957 50.0945 91.9657 49.6745 92.2557C45.6145 96.0457 40.2045 98.3457 34.2445 98.3457C29.5145 98.3457 25.0445 96.8557 21.3845 94.2857C20.2945 93.6157 19.3545 92.6557 18.4145 91.8557C14.2145 87.7957 11.6445 82.1057 11.6445 75.7257C11.6445 63.2557 21.8045 53.0957 34.2545 53.0957C46.7045 53.0957 57.0045 63.2657 57.0045 75.7257H56.9945V75.7157Z"
            fill="#E9F0F8"
          />
          <path
            d="M56.9943 75.7146C56.9943 82.3646 54.1543 88.1846 49.6943 92.3846C45.6343 96.1746 40.2243 98.4746 34.2643 98.4746C29.5343 98.4746 25.0643 96.9846 21.4043 94.4146C15.4443 90.3546 11.6543 83.5746 11.6543 75.8546C11.6543 63.3846 21.8143 53.2246 34.2643 53.2246C46.7143 53.2246 57.0143 63.2446 57.0143 75.7146H57.0043H56.9943Z"
            fill="#FF6C11"
          />
          <path
            d="M50.765 91.2852C50.495 91.6852 50.095 91.9552 49.675 92.2452C45.615 96.0352 40.205 98.3352 34.245 98.3352C29.515 98.3352 25.045 96.8452 21.385 94.2752C20.295 93.6052 19.355 92.6452 18.415 91.8452C18.955 91.1752 19.775 90.7552 21.525 90.0852L22.195 89.8152C23.555 89.2752 25.455 88.5952 27.885 87.5152C28.285 87.3852 28.555 87.1152 28.825 86.8452C28.955 86.7152 29.095 86.5752 29.095 86.3052C29.225 86.0352 29.365 85.6352 29.365 85.3452V80.7452C29.275 80.6552 29.185 80.5652 29.095 80.4752C28.695 79.9352 28.425 79.2552 28.425 78.4452L28.155 78.3152C26.935 78.5852 27.065 77.3552 26.795 74.9252C26.665 73.9652 26.795 73.7052 27.335 73.5652L27.735 73.0252C26.925 71.1252 26.515 69.3652 26.515 68.0052C26.515 65.7052 27.455 64.2152 28.815 63.5352C28.005 61.9052 28.005 61.3652 28.005 61.3652C28.005 61.3652 32.735 62.1752 34.365 61.9052C36.395 61.5052 39.655 62.0352 40.865 64.7552C42.895 65.5652 43.565 66.7852 43.835 68.1452C44.105 70.3152 42.895 72.6152 42.615 73.5652V73.6952C42.885 73.8252 43.015 74.0952 42.885 75.0552C42.615 77.3552 42.615 78.7152 41.525 78.4452L40.435 80.3452C40.435 80.5252 40.385 80.6552 40.305 80.7452V85.4952C40.305 85.8952 40.435 86.4552 40.705 86.7152C40.835 86.8452 40.835 86.9852 40.975 86.9852C41.245 87.2552 41.515 87.5252 41.785 87.5252C44.485 88.6152 46.385 89.4252 47.875 89.9552C49.235 90.4952 50.175 90.9152 50.715 91.3152L50.765 91.2752V91.2852Z"
            fill="#FFECD4"
          />
          <path
            d="M50.765 91.2857C50.495 91.6857 50.095 91.9557 49.675 92.2457C45.615 96.0357 40.205 98.3357 34.245 98.3357C29.515 98.3357 25.045 96.8457 21.385 94.2757C20.295 93.6057 19.355 92.6457 18.415 91.8457C18.955 91.1757 19.775 90.7557 21.525 90.0857L22.195 89.8157C23.555 89.2757 25.455 88.5957 27.885 87.5157C28.285 87.3857 28.555 87.1157 28.825 86.8457C30.185 88.7457 32.345 89.9657 34.915 89.9657C37.345 89.9657 39.515 88.7457 40.875 86.9757C41.145 87.2457 41.415 87.5157 41.685 87.5157C44.385 88.6057 46.285 89.4157 47.775 89.9457C49.265 90.4857 50.205 90.9057 50.745 91.3057H50.755L50.765 91.2857Z"
            fill="white"
          />
          <path
            d="M42.8043 73.4148C42.9343 72.8748 42.6743 72.0548 42.4043 71.6548C42.4043 71.5248 42.2743 71.5248 42.2743 71.3848C41.3143 69.4848 39.3043 68.8148 37.4043 68.6848C32.4043 68.4148 31.9843 69.3548 30.5043 68.0148C31.0443 68.6848 31.0443 69.9148 30.2343 71.2748C29.6943 72.2348 28.7443 72.7648 27.8043 73.0348C25.5043 67.8848 26.7143 64.6248 28.8943 63.5548C28.0843 61.9248 28.0843 61.3848 28.0843 61.3848C28.0843 61.3848 32.8143 62.1948 34.4443 61.9248C36.4743 61.5248 39.7343 62.0548 40.9443 64.7748C42.9743 65.5848 43.6443 66.8048 43.9143 68.1648C44.3143 70.1948 43.1043 72.4948 42.8243 73.4548V73.4248L42.8043 73.4148Z"
            fill="#9E2E0E"
          />
          <path
            d="M29.3745 85.3353V80.7353C29.2845 80.6453 29.1945 80.5553 29.1045 80.4653V80.1953C29.3745 80.5953 29.6445 81.0053 30.0445 81.2853L33.7045 83.8553C34.5145 84.5253 35.7345 84.5253 36.5445 83.8553L39.9345 80.8653C40.0645 80.7353 40.2045 80.7353 40.3345 80.5953V85.3453C40.3345 85.6153 40.3345 85.7453 40.4645 86.0153H29.3645C29.2345 85.7453 29.3645 85.6153 29.3645 85.3453L29.3745 85.3353Z"
            fill="url(#paint0_linear_349_27498)"
          />
          <path
            d="M34.2647 99.8155C29.3547 99.8155 24.6347 98.3255 20.6247 95.4955C14.1647 91.0955 10.3047 83.7355 10.3047 75.8255C10.3047 62.6055 21.0547 51.8555 34.2647 51.8555C47.4747 51.8555 58.3547 62.5455 58.3547 75.6955C58.3547 82.3855 55.6147 88.6455 50.6247 93.3455C46.1547 97.5155 40.3647 99.8055 34.2647 99.8055V99.8155ZM34.2647 54.5555C22.5347 54.5555 12.9947 64.1055 12.9947 75.8355C12.9947 82.8455 16.4247 89.3655 22.1547 93.2855C25.7147 95.8055 29.9047 97.1155 34.2647 97.1155C39.6747 97.1155 44.8247 95.0855 48.7747 91.3855C53.2147 87.2155 55.6647 81.6455 55.6647 75.7055C55.6647 64.0455 46.0647 54.5555 34.2647 54.5555Z"
            fill="#FF8C37"
          />
          <path
            d="M84.7847 30.1152L98.0347 16.8652L101.925 20.7552L84.8647 37.8152L84.8447 37.7952L84.7747 37.8652L73.3447 26.4352L77.2347 22.5452L84.7947 30.1052L84.7847 30.1152Z"
            fill="white"
            stroke="#FFBF9C"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_349_27498"
              x1="34.7945"
              y1="85.8353"
              x2="34.7945"
              y2="82.7753"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFECD4" />
              <stop offset="0.99" stop-color="#FFD5A8" />
            </linearGradient>
          </defs>
        </svg>

        <span className=" mt-4 font-noto text-center">
          คุณต้องการจบแชท เพื่อดำเนินการเสร็จสิ้นการแชทกับ “{_prop?.name}”
          ใช่หรือไม่ ?
        </span>
      </div>
    </Modal>
  );
}