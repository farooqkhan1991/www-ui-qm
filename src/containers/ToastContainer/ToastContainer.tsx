import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastProvider";
import { Toast } from "@mtm/components";

export default function ToastContainer() {
  const [toasts] = useContext(ToastContext);
  return (
    <div>
      {toasts.map((toast: any, index: number) => (
        <Toast
          key={index}
          type={toast.toastType}
          duration={toast.duration || 5000}
          onAppear={(click: any) => click()}
        >
          <div>{toast.content}</div>
        </Toast>
      ))}
    </div>
  );
}
