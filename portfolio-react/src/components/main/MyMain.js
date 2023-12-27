import classes from "./MyMain.module.css";
import Card from "../UI/Card/Card.js";
import faceImg from "../../public/images/face-pink-bg.jpg";
import myhomeImg from "../../public/images/myhome-cal.png";
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
      <article className={classes.projectCard}>
        <Card>
          <div className={classes.cardContents}>
            <a
              className={classes.imageLink}
              href="http://ddoongtest.shop"
              target="blank"
            >
              <img src={myhomeImg} alt="계산기 사이트 이미지" />
            </a>
            <p className={classes.projectSummary}>마이홈 요약</p>
            <a href="/" target="blank" className={classes.popolLink}>
              포폴:마이홈 링크
            </a>
          </div>
        </Card>
      </article>
      <article className={classes.projectCard}>
        <Card>
          <div className={classes.cardContents}>
            <a
              className={classes.imageLink}
              href="http://ddoongtest.shop"
              target="blank"
            >
              <img src={myhomeImg} alt="과외앱 이미지" />
            </a>
            <p className={classes.projectSummary}>과외앱 요약</p>
            <a href="/" target="blank" className={classes.popolLink}>
              포폴:과외앱 링크
            </a>
          </div>
        </Card>
      </article>
      <article className={classes.projectCard}>
        <Card>
          <div>포폴카드: 포폴 사이트 소개</div>
        </Card>
      </article>
    </section>
  );
}
