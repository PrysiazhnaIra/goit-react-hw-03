import css from "./SearchBox.module.css";
import { useState } from "react";

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <label></label>
      <input type="text" />
      <p>{inputValue}</p>
    </div>
  );
};
