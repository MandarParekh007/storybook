import { IButtonProp, Variant, Appearance, Size } from "../../types/interfaces/ButtonProp";

const Button = ({
  variant = Variant.Primary,
  appearance = Appearance.Fill,
  loading = false,
  disable = false,
  size = Size.Medium,
  children,
}: IButtonProp) => {
  // Dynamic button styles
  const baseStyles = "font-semibold rounded-lg transition duration-300 ease-in-out";
  
  const variantStyles = {
    [Variant.Primary]: "bg-blue-600 text-white hover:bg-blue-700",
    [Variant.Secondary]: "bg-gray-500 text-white hover:bg-gray-600",
    [Variant.Negative]: "bg-red-600 text-white hover:bg-red-700",
  };

  const appearanceStyles = {
    [Appearance.Fill]: "",
    [Appearance.Outline]: "border-2 border-current bg-transparent text-current hover:bg-gray-200",
  };

  const sizeStyles = {
    [Size.Small]: "px-3 py-1 text-sm",
    [Size.Medium]: "px-4 py-2 text-base",
    [Size.Large]: "px-5 py-3 text-lg",
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
