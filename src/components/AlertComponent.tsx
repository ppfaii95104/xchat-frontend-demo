"use client"; // This is a client component 👈🏽
import { Alert, Badge, Button } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";
type tagType = {
  messenge?: string;
  name?: string;
  desc?: string;
  color?: string;
};
export default function AlertComponent(_prop: any) {
  return (
    <div className="abslu">
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
    </div>
  );
}
