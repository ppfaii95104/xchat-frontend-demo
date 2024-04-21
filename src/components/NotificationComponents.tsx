import React from "react";
import { notification } from "antd";
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

type NotificationType = "success" | "error";

function NotificationComponents(type: NotificationType, title: string | null) {
  const iconMap: Record<NotificationType, React.ReactNode> = {
    success: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.591 8.407L9.841 13.153C9.7 13.294 9.51 13.373 9.311 13.373C9.112 13.373 8.921 13.294 8.78 13.153L6.409 10.78C6.116 10.487 6.116 10.012 6.409 9.719C6.703 9.426 7.178 9.428 7.47 9.719L9.311 11.562L13.53 7.346C13.823 7.053 14.298 7.054 14.591 7.346C14.884 7.639 14.884 8.114 14.591 8.407ZM10.5 0.5C3.302 0.5 0.75 3.052 0.75 10.25C0.75 17.448 3.302 20 10.5 20C17.698 20 20.25 17.448 20.25 10.25C20.25 3.052 17.698 0.5 10.5 0.5Z"
          fill="#10B981"
        />
      </svg>
    ),
    error: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.431 13.173C13.285 13.319 13.093 13.393 12.901 13.393C12.708 13.393 12.517 13.319 12.37 13.173L10.497 11.3L8.63 13.167C8.484 13.314 8.292 13.387 8.1 13.387C7.909 13.387 7.716 13.314 7.57 13.167C7.277 12.874 7.277 12.4 7.57 12.107L9.436 10.239L7.57 8.373C7.277 8.08 7.277 7.606 7.57 7.313C7.863 7.02 8.337 7.02 8.63 7.313L10.496 9.179L12.36 7.315C12.653 7.022 13.127 7.022 13.42 7.315C13.713 7.608 13.713 8.082 13.42 8.375L11.557 10.239L13.431 12.112C13.724 12.405 13.724 12.88 13.431 13.173ZM10.5 0.5C3.302 0.5 0.75 3.052 0.75 10.25C0.75 17.448 3.302 20 10.5 20C17.699 20 20.25 17.448 20.25 10.25C20.25 3.052 17.699 0.5 10.5 0.5Z"
          fill="#EF4444"
        />
      </svg>
    ),
  };

  notification[type]({
    icon: iconMap[type],
    message: <span className="font-noto">{title}</span>,
    placement: "bottomRight",
    style: {
      backgroundColor:
        type === "success" ? "var(--success-light)" : "var(--error-light)",
      borderColor: type === "success" ? "var(--success)" : "var(--error)",
      borderRadius: "10px",
    },
  });
}

export default NotificationComponents;
