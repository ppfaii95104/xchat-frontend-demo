"use client"; // This is a client component 👈🏽
import { Badge, Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import MessengerLogo from "./logo/MessengerLogo";
import TelegramLogo from "./logo/TelegramLogo";
import TiktokLogo from "./logo/TiktokLogo";
import WhatsAppLogo from "./logo/WhatsAppLogo";
type tagType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
};
export default function MessengeBoxComponents(_prop: any) {
  return (
    <>
      {/* {_.map(_prop.listTag, (item) => {
        return ( */}
      <>
        <Button
          type="link"
          className="flex items-center text-drak-grey p-0 font-noto">
          <Checkbox className="flex items-center">
            <div className="p-[5px] bg-white rounded-lg">
              <MessengerLogo />
            </div>
          </Checkbox>
          Facebook
        </Button>
        <Button
          type="link"
          className="flex items-center text-drak-grey p-0 font-noto">
          <Checkbox className="flex items-center">
            <div className="p-[5px] bg-white rounded-lg">
              <TelegramLogo />
            </div>
          </Checkbox>
          Telegram
        </Button>
        <Button
          type="link"
          className="flex items-center text-drak-grey p-0 font-noto">
          <Checkbox className="flex items-center">
            <div className="p-[5px] bg-white rounded-lg">
              {" "}
              <TiktokLogo />
            </div>
          </Checkbox>
          Tiktok
        </Button>
        <Button
          type="link"
          className="flex items-center text-drak-grey p-0 font-noto">
          <Checkbox className="flex items-center">
            <div className="p-[5px] bg-white rounded-lg">
              <WhatsAppLogo />
            </div>
          </Checkbox>
          WhatsAppLogo
        </Button>
      </>
      {/* );
      })} */}
    </>
  );
}
