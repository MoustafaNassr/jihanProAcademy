"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// import sendEmail from "../lib/sendEmail";

export default function Home() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   sendEmail(email);
  // }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>LOGO</h2>
          {/* <Image></Image> */}
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navigation_list}>
            <li className={styles.navigation_link}>
              <Link href={"#"}>LINK1</Link>
            </li>
            <span className={styles.navigation_seprator}>/</span>
            <li className={styles.navigation_link}>
              <Link href={"#"}>LINK2</Link>
            </li>
            <span className={styles.navigation_seprator}>/</span>
            <li className={styles.navigation_link}>
              <Link href={"#"}>LINK3</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.App_Btn}>
          <h3>BTN</h3>
        </div>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.inner_wrapper}>
          <section>
            <h1 className={styles.main_title}>Coming Soon</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              obcaecati perspiciatis.
            </p>
          </section>

          <section>
            <form
              className={styles.form}
              action="https://formsubmit.io/jihan.acadmey@apexnile.com"
              method="POST"
            >
              <div className={styles.input_wrapper}>
                <label htmlFor="">
                  <input
                    name="email"
                    className={styles.email}
                    type="email"
                    placeholder="Please enter your email address"
                  />
                </label>
                <input
                  className={styles.submit_btn}
                  type="submit"
                  value="Notify Me"
                />
              </div>
            </form>

            {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footer_inner_wrapper}>
          <ul className={styles.right_footer_list}>
            {/* <l>Privacy policy</l> */}
          </ul>
          <ul className={styles.left_footer_list}>
            {/* <li className={styles.footer_link}>Facebook</li> */}
            {/* <span className={styles.footer_seprator}>/</span> */}
            <li className={styles.footer_link}>
              <Link href={"https://instagram.com/jihanproacademy"}>
                Instagram
              </Link>
            </li>
            {/* <span className={styles.footer_seprator}>/</span> */}
            {/* <li className={styles.footer_link}>Linkedin</li> */}
          </ul>
        </div>
      </footer>
    </main>
  );
}
