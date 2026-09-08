import React from "react";
import TrishulLogo from "@/components/TrishulLogo";

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "w-full h-full" }: LogoIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <TrishulLogo className="w-full h-full object-contain" />
    </div>
  );
}
