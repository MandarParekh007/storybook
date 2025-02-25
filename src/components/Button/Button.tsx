import { Loader } from "lucide-react";
import { IButtonProp } from "../../types/interfaces/ButtonProp";
import React, { useState } from "react";
import { BottomSheet } from "../bottom-sheet";

const Button = ({
  children
}: { children?: React.ReactNode }) => {

  const [buttonStates, setButtonStates] = useState<IButtonProp>({
    variant: "primary",
    appearance: "fill",
    loading: false,
    disable: false,
    size: "md",
  })

  const OPTIONS: Record<string, string[] | boolean[]> = {
    variant: ["primary", "secondary", "negative"],
    appearance: ["fill", "outline"],
    size: ["sm", "md", "lg"],
    loading: [true, false],
    disable: [true, false]
  };


  const baseStyles =
    "font-semibold rounded-lg transition duration-300 ease-in-out shadow-md transform hover:scale-[1.03] active:scale-95 focus:ring-2 focus:ring-opacity-50";

  /* Premium Fill Variant Colors */
  const variantStyles = {
    primary: "bg-[#6366F1] text-white hover:bg-white hover:text-[#6366F1]",  // Indigo 500 (Tailwind, Stripe)
    secondary: "bg-[#64748B] text-white hover:bg-white hover:text-[#64748B]", // Slate 500 (Apple-like)
    negative: "bg-[#EF4444] text-white hover:bg-white hover:text-[#EF4444]",  // Red 500 (Modern Danger)
  };

  /* Modern Outline Styles (Reverse on Hover) */
  const outlineStyles = {
    primary: "border-2 border-[#6366F1] text-[#6366F1] bg-transparent hover:bg-[#6366F1] hover:text-white",
    secondary: "border-2 border-[#64748B] text-[#64748B] bg-transparent hover:bg-[#64748B] hover:text-white",
    negative: "border-2 border-[#EF4444] text-[#EF4444] bg-transparent hover:bg-[#EF4444] hover:text-white",
  };

  /* Sleek Size Options */
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const disabledStyles = buttonStates.disable ? "opacity-50 cursor-not-allowed" : "";

  return (
    <>
      <button
        className={`${baseStyles} ${buttonStates.appearance === "fill" ? variantStyles[buttonStates.variant ?? "primary"] : outlineStyles[buttonStates.variant ?? "primary"]} ${sizeStyles[buttonStates.size ?? "md"]} ${disabledStyles}`}
        disabled={buttonStates.disable}
      >
        {buttonStates.loading ? <Loader /> : children}
      </button>

      <BottomSheet state={buttonStates} setState={setButtonStates} OPTIONS={OPTIONS} />
    </>
  );
};

export default Button;
