import classes from "./EmailForm.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fragment } from "react";

export default function EmailForm(props) {
  const form = useRef();
  const [submitEmail, setSubmitEmail] = useState(false);
  const [submitEmailError, setSubmitEmailError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("이메일 요청");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLICK_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitEmail(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitEmailError(true);
        }
      );
  };

  return (
    <Fragment>
      {!submitEmail && !submitEmailError && (
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.emailFormNameInput}>
            <label>성함 및 소속</label>
            <br />
            ex:김영선
            <br />
            <input type="text" name="user_name" />
          </div>
          <div className={classes.emailFormAddressInput}>
            <label>회신받을 이메일 주소</label>
            <br />
            ex: yr031616@gmail.com
            <br />
            <input type="text" name="user_email" />
          </div>

          <label className={classes.emailFormContentTitle}>내용</label>
          <div className={classes.emailFormContent}>
            <textarea name="message" />

            <input type="submit" value="보내기" className={classes.submitBtn} />
          </div>
        </form>
      )}
      {submitEmail && !submitEmailError && (
        <p>메일이 성공적으로 전송되었습니다.</p>
      )}
      {!submitEmail && submitEmailError && <p>오류가 생겼습니다.</p>}
    </Fragment>
  );
}
