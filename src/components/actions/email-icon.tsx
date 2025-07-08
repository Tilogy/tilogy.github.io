import React from "react";
import { Mail } from "lucide-react";

const EmailIcon = () => {
  return (
    <a
      href="mailto:tiffany.sinakhot@gmail.com"
      aria-label="Send email to tiffany.sinakhot@gmail.com"
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border-2 p-1 transition-opacity hover:opacity-80 dark:border-white"
    >
      <Mail className="h-6 w-6" />
    </a>
  );
};

export default EmailIcon;
