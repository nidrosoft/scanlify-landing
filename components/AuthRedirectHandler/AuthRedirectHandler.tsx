"use client";

import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "../Toast/Toast";

export const REDIRECT_REASON_KEY = "scanlify_redirect_reason";

export const AuthRedirectHandler = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"info" | "success" | "warning" | "error">("info");

  // Messages for different redirect reasons
  const redirectMessages: Record<string, { message: string; type: "info" | "success" | "warning" | "error" }> = {
    not_authenticated: {
      message: "You must be logged in to access the dashboard. Please sign in with your magic link.",
      type: "warning",
    },
    // Add more redirect reasons here as needed
    // example: {
    //   message: "Custom message for this reason",
    //   type: "info"
    // }
  };

  useEffect(() => {
    // This effect only runs on the client side
    const handleRedirect = () => {
      const redirectReason = localStorage.getItem(REDIRECT_REASON_KEY);
      
      if (redirectReason && redirectMessages[redirectReason]) {
        const { message, type } = redirectMessages[redirectReason];
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
        
        // Clear the redirect reason from localStorage
        localStorage.removeItem(REDIRECT_REASON_KEY);
      }
    };

    // Call the handler
    handleRedirect();
  }, []);

  const handleToastDismiss = () => {
    setShowToast(false);
  };

  return (
    <ToastContainer position="bottom-right">
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onDismiss={handleToastDismiss}
          duration={8000}
        />
      )}
    </ToastContainer>
  );
};

export default AuthRedirectHandler;
