import classes from "./MyFooter.module.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import MyModal from "../UI/MyModal";
import EmailForm from "../EmailForm";

export default function MyFooter() {
  const [showModal, setShowModal] = useState(false);

  const clickMailFormModalHandler = () => {
    setShowModal(!showModal);
  };

  const closeMailFormModalHandler = () => {
    setShowModal(false);
  };
  return (
    <footer className={classes.myFooter}>
      <a href="https://github.com/DDOONG211107?tab=repositories">
        <FaGithub className={classes.gitIcon} />
      </a>
      {/* <a>
        <IoMdMail className={classes.mailIcon} />
      </a> */}
      <div onClick={clickMailFormModalHandler} className={classes.mailIcon}>
        <IoMdMail />
      </div>
      <MyModal
        onClose={closeMailFormModalHandler}
        isOpen={showModal}
        onClick={clickMailFormModalHandler}
        modalHeaderTitle={"이메일 보내기"}
      >
        <EmailForm />
        {/* <button onClick={clickMailFormModalHandler}>
          모달 닫기 으아아아ㅏㅇ
        </button> */}
      </MyModal>
    </footer>
  );
}
