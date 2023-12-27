import classes from "./MyHeader.module.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function MyHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.header}>
      <h1>Sunny's WebDev Portfolio</h1>

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
          <li>React Project - 마이홈 계산기</li>
          <li>ReactNative Project - 과외도우미</li>
        </ul>
      </Drawer>

      <nav className={classes.myPcNav}>
        <ul>
          <li>놀러와 마이홈 계산기(React)</li>
          <li>과외앱 도우미(React Native)</li>
        </ul>
      </nav>
    </div>
  );
}
