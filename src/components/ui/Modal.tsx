import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "antd";
import Button from "./Button";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  text: String;
  title: String;
};
const ModalCustom = ({ open, setOpen, text, title }: Props) => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        cancelText="Cancelar"
        onOk={closeModal}
        onCancel={closeModal}
        closeIcon={false}
      >
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default ModalCustom;
