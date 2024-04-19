"use client"; // This is a client component 👈🏽
import { Alert, Badge, Button } from "antd";
import React, { useEffect, useState } from "react";
import _ from "lodash";

export default function ProgressComponent(_prop: any) {
  const [total, settotal] = useState<any>(0);
  const calculator = () => {
    settotal(_prop.data.progress * (100 / _prop.data.total));
  };
  useEffect(() => {
    calculator();
  }, [_prop]);
  return (
    <div className="bg-[var(--table-head)]  w-[150px] h-[20px] flex rounded-full relative">
      <div
        style={{
          height: "20px",
          width: `${total.toFixed(2)}%`,
          backgroundColor: "var(--success)",
          borderRadius: total >= 100 ? "90px" : "90px 0px 0px 90px",
        }}></div>
      <span className="text-[10px] inline-block absolute top-[30%] text-center w-full text-drak-grey">
        {_prop.data.progress} / {_prop.data.total} ({total.toFixed(2)}%)
      </span>
    </div>
  );
}
