import classes from "./MyMain.module.css";
import faceImg from "../../public/face_img.png";

export default function MyMain() {
  return (
    <main className={classes.main}>
      <div className={classes.firstCard}>
        <div className={classes.cardLeft}>
          <img src={faceImg} alt="프로필 사진" className={classes.image} />
          <div className={classes.mobileCardLeft}>자기소개 설명1</div>
        </div>
        <div className={classes.cardRight}>자기소개 설명2</div>
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
