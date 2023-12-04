import classes from "./MyMain.module.css";
import faceImg from "../../public/face_img.png";
import introduceStrArr from "../../public/data/desStrArr";
import { FaCheck } from "react-icons/fa";

const dummyString =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let i = 0;
export default function MyMain() {
  return (
    <main className={classes.main}>
      <div className={classes.firstCard}>
        <div className={classes.cardLeft}>
          <img src={faceImg} alt="프로필 사진" className={classes.image} />
          {/* <div className={classes.mobileCardLeft}>{dummyString}</div> */}
        </div>
        <div className={classes.cardRight}>
          <h3>김영선</h3>

          <ol>
            {introduceStrArr.map((str) => {
              return (
                <li>
                  <FaCheck />
                  &nbsp;&nbsp;
                  {str}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className={classes.secondCard}>
        <div className={classes.cardDes}>마이홈 계산기 설명</div>
        <div className={classes.cardLink}>마이홈 계산기 링크</div>
      </div>
      <div className={classes.thirdCard}>
        <div className={classes.thirdCardLink}>포트폴리오 링크</div>
        <div className={classes.thirdCardDes}>포트폴리오 설명</div>
      </div>
      <div className={classes.fourthCard}>
        <div className={classes.cardDes}>과외앱 설명</div>
        <div className={classes.cardLink}>과외앱 링크</div>
      </div>
    </main>
  );
}
