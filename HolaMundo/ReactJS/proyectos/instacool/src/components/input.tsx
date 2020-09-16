import { render } from "@testing-library/react";
import * as React from "react";

const style = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  padding: "10px 15px",
  borderRadius: "4px",
  width: "100%",
};

interface IInputProps {
  placeholder?: string;
}

export default class Input extends React.Component<IInputProps> {
  public render() {
    return <input {...this.props} style={style} />;
  }
}
