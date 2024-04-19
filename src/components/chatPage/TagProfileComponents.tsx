"use client"; // This is a client component 👈🏽
import { Badge, Button, Tag } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
type tagType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
};
export default function TagProfileComponents(_prop: any) {
  return (
    <div>
      {_.map(_prop?.listTag, (item: tagType) => {
        return (
          <Tag className="font-noto  mb-2">
            <Badge color={item.color} className="mr-2" />
            {item.name}
          </Tag>
        );
      })}
    </div>
  );
}
