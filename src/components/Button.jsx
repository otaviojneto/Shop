import React from "react";
import { Btn } from "./styles";

const Button = ({ blue, Text }) => {
  return (
    <Btn type="button" blue={blue}>
      {Text}
    </Btn>
  );
};

export default Button;
