import React, { useState, useEffect } from "react";
import DatePicker from "./DatePicker";

import thTH from "antd/lib/locale/th_TH";

import locale from "antd/es/date-picker/locale/th_TH";

import ConfigProvider from "antd/es/config-provider/index";

import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

function CustomDatePicker(props: any) {
  const [date, setDate] = useState<any>(null);
  const [selectDate, setSelectDate] = useState<any>(dayjs().endOf("day"));
  const { type } = props;

  dayjs.extend(buddhistEra);
  dayjs.locale("th");
  // dayjs().format('BBBB')

  const datePickerTh = {
    ...locale,
    lang: {
      ...locale.lang,
      yearFormat: "BBBB",
      dateFormat: "M/D/BBBB",
      dateTimeFormat: "M/D/BBBB HH:mm:ss",
    },
    dateFormat: "DD/MM/BBBB",
    dateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    weekFormat: "BBBB-wo",
    monthFormat: "BBBB-MM",
  };

  // convert DD/MM/BBBB to DD/MM/YYYY
  const customFormat = (value: any) => {
    if (value) {
      return dayjs(value, "DD/MM/YYYY")
        .locale("th")
        .subtract(543, "year")
        .format("DD/MM/YYYY");
    }
    return value;
  };

  useEffect(() => {
    // Run only on the first render
    if (!date && props.value) {
      setDate(customFormat(props.value));
    }
    // console.log("date", date);
  }, [date, props.value]);

  useEffect(() => {
    if (props.selectDate) {
      setSelectDate(
        dayjs(props.selectDate, "DD/MM/YYYY").subtract(543, "year").endOf("day")
      );
    }
  }, [props.selectDate]);

  const disabledDate = (current: any) => {
    switch (type) {
      case 1: // วันที่เริ่มต้น ไม่สามารถเลือกวันที่มากกว่าวันที่สิ้นสุดได้
        return current && current < selectDate;
      case 2: // วันที่สิ้นสุด ไม่สามารถเลือกวันที่น้อยกว่าวันที่เริ่มต้นได้
        return current && current > selectDate;
      default:
        return false;
    }
  };

  return (
    <ConfigProvider locale={thTH}>
      <DatePicker
        allowClear
        className="w-full font-noto font-base"
        placeholder="วัน/เดือน/ปี"
        id="constructionCompletedWhen"
        format="DD/MM/BBBB"
        locale={datePickerTh}
        disabledDate={disabledDate}
        onChange={(e) => {
          if (e) {
            setDate(e);
            props.onChange(dayjs(e).format("DD/MM/BBBB"));
          } else {
            setDate("");
            props.onChange("");
          }
        }}
        value={date ? dayjs(date, "DD/MM/YYYY") : null}
        suffixIcon={
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1278 4.07997V2.74414C14.1278 2.39914 13.8478 2.11914 13.5028 2.11914C13.1578 2.11914 12.8778 2.39914 12.8778 2.74414V5.46331C12.8778 5.67997 12.9953 5.86247 13.1637 5.97414C13.0645 6.04081 12.952 6.08831 12.8237 6.08831C12.4787 6.08831 12.1987 5.80831 12.1987 5.46331V3.65831C11.5303 3.57831 10.802 3.53747 9.99949 3.53747C9.05449 3.53747 8.21199 3.59414 7.45449 3.70831V2.74414C7.45449 2.39914 7.17449 2.11914 6.82949 2.11914C6.48449 2.11914 6.20449 2.39914 6.20449 2.74414V5.46331C6.20449 5.67997 6.32199 5.86247 6.49033 5.97414C6.39116 6.04081 6.27866 6.08831 6.15033 6.08831C5.80533 6.08831 5.52533 5.80831 5.52533 5.46331V4.18831C3.74699 4.87414 2.70366 6.14997 2.21033 8.18164H17.7895C17.2662 6.02664 16.1095 4.73331 14.1278 4.07997Z"
                fill="#6D6D6D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.677 12.7119C13.332 12.7119 13.0487 12.4319 13.0487 12.0869C13.0487 11.7419 13.3245 11.4619 13.6695 11.4619H13.677C14.022 11.4619 14.302 11.7419 14.302 12.0869C14.302 12.4319 14.022 12.7119 13.677 12.7119ZM13.677 15.9228C13.332 15.9228 13.0487 15.6428 13.0487 15.2978C13.0487 14.9519 13.3245 14.6728 13.6695 14.6728H13.677C14.022 14.6728 14.302 14.9519 14.302 15.2978C14.302 15.6428 14.022 15.9228 13.677 15.9228ZM10.0112 12.7119C9.66616 12.7119 9.38199 12.4319 9.38199 12.0869C9.38199 11.7419 9.65866 11.4619 10.0037 11.4619H10.0112C10.3562 11.4619 10.6362 11.7419 10.6362 12.0869C10.6362 12.4319 10.3562 12.7119 10.0112 12.7119ZM10.0112 15.9228C9.66616 15.9228 9.38199 15.6428 9.38199 15.2978C9.38199 14.9519 9.65866 14.6728 10.0037 14.6728H10.0112C10.3562 14.6728 10.6362 14.9519 10.6362 15.2978C10.6362 15.6428 10.3562 15.9228 10.0112 15.9228ZM6.33783 12.7119C5.99283 12.7119 5.70866 12.4319 5.70866 12.0869C5.70866 11.7419 5.98533 11.4619 6.33033 11.4619H6.33783C6.68283 11.4619 6.96283 11.7419 6.96283 12.0869C6.96283 12.4319 6.68283 12.7119 6.33783 12.7119ZM6.33783 15.9228C5.99283 15.9228 5.70866 15.6428 5.70866 15.2978C5.70866 14.9519 5.98533 14.6728 6.33033 14.6728H6.33783C6.68283 14.6728 6.96283 14.9519 6.96283 15.2978C6.96283 15.6428 6.68283 15.9228 6.33783 15.9228ZM18.0162 9.4311H1.98366C1.89866 10.1144 1.85449 10.8586 1.85449 11.6828C1.85449 17.6953 3.98616 19.8269 9.99949 19.8269C16.0137 19.8269 18.1453 17.6953 18.1453 11.6828C18.1453 10.8586 18.1012 10.1144 18.0162 9.4311Z"
                fill="#6D6D6D"
              />
            </g>
          </svg>
        }
      />
    </ConfigProvider>
  );
}

export default CustomDatePicker;
