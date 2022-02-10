import React, { useState } from "react";
import styled from "styled-components";
import { IoCheckmark } from "react-icons/io5";
import "./iconCheck.scss";

const Label = styled.label``;

const Input = styled.input.attrs({ type: "checkbox" })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CustomCheck = styled.span`
  display: inline-block;
  height: 2.5rem;
  width: 2.5rem;

  background: ${(props) =>
    props.status === !true ? "var(--gradient)" : " var(--color-bg-item)"};

  border: 1px solid var(--color-underline);
  border-radius: 50%;

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    border: 1px solid var(--color-primary-bright-blue);
  }

  position: relative;
`;

const CustomCheckbox = ({ check, isCheck, onClick, status }) => {
  return (
    <>
      <Label>
        <Input checked={check} onChange={() => isCheck(!check)}></Input>

        <CustomCheck check={check} onClick={onClick} status={status}>
          {!status ? <IoCheckmark className="iconCheck" /> : null}
        </CustomCheck>
      </Label>
    </>
  );
};

export default CustomCheckbox;
