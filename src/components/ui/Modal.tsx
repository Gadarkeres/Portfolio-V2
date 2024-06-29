import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "antd";
import Button from "./Button";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  text: String;
  title: String;
  functionCustom?: any;
  okText?: String;
};
const ModalCustom = ({
  open,
  setOpen,
  text,
  title,
  functionCustom,
  okText,
}: Props) => {
  const closeModal = () => {
    setOpen(false);
  };

  const onOk = () => {
    if (functionCustom) {
      functionCustom();
    }
    closeModal();
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        cancelText="Cancelar"
        onOk={onOk}
        onCancel={closeModal}
        closeIcon={false}
        okText={okText ? okText : "Ok"}
      >
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default ModalCustom;
