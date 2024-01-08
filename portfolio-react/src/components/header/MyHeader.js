import classes from "./MyHeader.module.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.header}>
      <Link to={"/"}>
        <h1>Sunny's WebDev Portfolio</h1>
      </Link>
      <button className={classes.mobileDrawerBtn} onClick={toggleDrawer}>
        <GiHamburgerMenu />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className={classes.mobileDrawer}
        size="16%"

        // style="top:8%"
      >
        <ul>
          <li>
            <Link to={"/myhome-des"}>놀러와 마이홈 계산기(React)</Link>
          </li>
          <li>
            <Link to={"/tutoring-des"}>과외앱 도우미(React Native)</Link>
          </li>
        </ul>
      </Drawer>

      <nav className={classes.myPcNav}>
        <ul>
          <li>
            <Link to={"/myhome-des"}>놀러와 마이홈 계산기(React)</Link>
          </li>
          <li>
            <Link to={"/tutoring-des"}>과외앱 도우미(React Native)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
