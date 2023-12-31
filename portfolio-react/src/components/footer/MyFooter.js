import classes from "./MyFooter.module.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function MyFooter() {
  return (
    <footer className={classes.myFooter}>
      <a href="https://github.com/DDOONG211107?tab=repositories">
        <FaGithub className={classes.gitIcon} />
      </a>
      <a>
        <IoMdMail className={classes.mailIcon} />
      </a>
    </footer>
  );
}
