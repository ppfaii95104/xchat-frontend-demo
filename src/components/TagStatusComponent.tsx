"use client"; // This is a client component 👈🏽
import { Alert, Badge, Button, Tag } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";

export default function TagStatusComponent(_prop: any) {
  return (
    <>
      {_prop.status === "ดำเนินการ" ? (
        <Tag color="var(--primary-light)">
          <span className="text-drak-grey font-noto">
            {" "}
            <Badge color="var(--primary)" className="mr-1" size="small" />
            {_prop.status}
          </span>
        </Tag>
      ) : _prop.status === "เสร็จสิ้น" ? (
        <Tag color="var(--success-light)">
          <span className="text-drak-grey font-noto">
            {" "}
            <Badge color="var(--success)" className="mr-1" size="small" />
            {_prop.status}
          </span>
        </Tag>
      ) : _prop.status === "ยกเลิก" ? (
        <Tag color="var(--error-light)">
          <span className="text-drak-grey font-noto">
            {" "}
            <Badge color="var(--error)" className="mr-1" size="small" />
            {_prop.status}
          </span>
        </Tag>
      ) : null}
    </>
  );
}
