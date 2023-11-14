import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  action: MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: "button" | "submit" | "reset";
  className?: string | "";
};

function Button({ action, text, type, className }: ButtonProps) {
  return (
    <button type={type} onClick={action} className={`button ${className}`}>
      {text}
    </button>
  );
}

export default Button;
