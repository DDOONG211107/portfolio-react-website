import classes from "./MyMain.module.css";
import Card from "../UI/Card/Card.js";
import faceImg from "../../public/images/face-pink-bg.jpg";
import strObj from "../../public/data/desStrArr.js";
import { FaCheck } from "react-icons/fa";

export default function MyMain() {
  return (
    <section className={classes.myMain}>
      <div className={classes.mobileImgBg}>
        <img alt="프로필사진" src={faceImg} />
      </div>
      <article className={classes.mainCard}>
        <Card>
          <div className={classes.imgBg}>
            <img alt="프로필사진" src={faceImg} />
          </div>
          <section className={classes.cardSelfIntro}>
            <h3>김영선</h3>
            <ul>
              {strObj.introduceStrArr.map((str) => {
                return (
                  <li>
                    <FaCheck className={classes.checkIcon} />
                    &nbsp;&nbsp;{str}
                  </li>
                );
              })}
            </ul>
          </section>
        </Card>
      </article>
      <article className={classes.mainCard}>
        <Card>마이홈 카드</Card>
      </article>
      <article className={classes.mainCard}>
        <Card>과외앱 카드</Card>
      </article>
      <article className={classes.mainCard}>
        <Card>포폴 카드</Card>
      </article>
    </section>
  );
}
