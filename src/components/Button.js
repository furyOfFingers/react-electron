import React from "react";

/**
 * Свойства компонента Button.
 */
// /** Текст Button */
// text?: string;
// /** Блокировка Button */
// disabled?: boolean;
// /** Button onClick function */
// onClick?: () => void;
// /** Наименование иконки */
// iconName?: string | null;
// /** Дополнительный стиль Button */
// extraClass?: (string | object)[];
// /**html type */
// htmlType?: "button" | "submit" | "reset";

/**
 * Компонент Button.
 */
const Button = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
