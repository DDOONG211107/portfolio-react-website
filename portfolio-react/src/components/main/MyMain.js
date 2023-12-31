import classes from "./MyMain.module.css";
import Card from "../UI/Card/Card.js";
import faceImg from "../../public/images/face-pink-bg.jpg";
import myhomeImg from "../../public/images/myhome-cal.png";
import tutoringImg from "../../public/images/logo.png";
import strObj from "../../public/data/desStrArr.js";
import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MyMain() {
  return (
    <section className={classes.myMain}>
      <div className={classes.mobileImgBg}>
        <img alt="프로필사진" src={faceImg} />
      </div>
      <article className={classes.mainCard}>
        <div className={classes.introduce}>
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
        </div>
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
            <p className={classes.projectSummary}>
              <h3>
                모바일게임 '놀러와 마이홈'의 효율적인 플레이를 도와주는 계산기
                사이트
              </h3>
              <ul>
                {strObj.myhomeCalSummaryStrArr.map((str) => {
                  return (
                    <li>
                      <FaCheck className={classes.checkIcon} />
                      &nbsp;&nbsp;{str}
                    </li>
                  );
                })}
              </ul>
            </p>
            <Link to={"/myhome-des"} className={classes.popolLink}>
              자세히 보기 &nbsp;
              <FaLongArrowAltRight className={classes.arrowIcon} />
            </Link>
          </div>
        </Card>
      </article>
      <article className={classes.projectCard}>
        <Card>
          <div className={classes.cardContents}>
            <a
              className={classes.imageLink}
              href="https://youtu.be/LVNzFYBT0bk"
              target="blank"
            >
              <img src={tutoringImg} alt="과외앱 이미지" />
            </a>
            <p className={classes.projectSummary}>
              <h3>과외매칭, 진행중인 과외를 도와주는 과외앱</h3>
              <ul>
                {strObj.tutoringManagerSummaryStrArr.map((str) => {
                  return (
                    <li>
                      <FaCheck className={classes.checkIcon} />
                      &nbsp;&nbsp;{str}
                    </li>
                  );
                })}
              </ul>
            </p>
            <Link to={"/tutoring-des"} className={classes.popolLink}>
              자세히 보기 &nbsp;
              <FaLongArrowAltRight className={classes.arrowIcon} />
            </Link>
          </div>
        </Card>
      </article>
      {/* <article className={classes.projectCard}>
        <Card>
          <p className={classes.popolIntro}>
            
            <ul>
              {strObj.popolIntroStrArr.map((str) => {
                return (
                  <li>
                    <FaCheck className={classes.checkIcon} />
                    &nbsp;&nbsp;{str}
                  </li>
                );
              })}
            </ul>
          </p>
        </Card>
      </article> */}
    </section>
  );
}
