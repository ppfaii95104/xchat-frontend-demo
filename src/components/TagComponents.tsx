"use client"; // This is a client component 👈🏽
import { Badge, Button } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
type tagType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
};
export default function TagComponents(_prop: any) {
  return (
    <>
      {_.map(_prop.listTag, (item: tagType) => {
        return (
          <Button
            type="link"
            className="flex items-center text-drak-grey p-0 font-noto">
            <Badge color={item.color} className="mr-2" />
            {item.name}
          </Button>
        );
      })}
    </>
  );
}
