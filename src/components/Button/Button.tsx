import { IButtonProp } from "../../types/interfaces/ButtonProp";

const Button = ({
  variant = "primary",
  appearance = "fill",
  loading = false,
  disable = false,
  size = "md",
  children,
}: IButtonProp) => {

  const baseStyles = "font-semibold rounded-lg transition duration-300 ease-in-out";

  const variantStyles = {
    ["primary"]: "bg-blue-600 text-white hover:bg-blue-700",
    ["secondary"]: "bg-gray-500 text-white hover:bg-gray-600",
    ["negative"]: "bg-red-600 text-white hover:bg-red-700",
  };

  const appearanceStyles = {
    ["fill"]: "",
    ["outline"]: "border-2 border-current bg-transparent text-current hover:bg-gray-200",
  };

  const sizeStyles = {
    ["sm"]: "px-3 py-1 text-sm",
    ["md"]: "px-4 py-2 text-base",
    ["lg"]: "px-5 py-3 text-lg",
  };

  const disabledStyles = disable ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${appearanceStyles[appearance]} ${sizeStyles[size]} ${disabledStyles}`}
      disabled={disable}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
