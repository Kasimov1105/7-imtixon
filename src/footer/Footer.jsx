import React from "react";
import style from "../footer/footer.module.scss";
function Footer() {
  return (
    <div style={{backgroundColor:"#0D2612",marginTop:"200px"}}>
      <div className={style.foter}>
        <div className={style.container}>
          <div className={style.logos}>
            <img src="/GG1.svg" alt="log" />
            <img src="/stas.png" alt="stas" />
          </div>

          <div className={style.servise}>
            <ul>
              <h3>Services</h3>
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping & Delivery</li>
              <li>Order Pickup</li>
              <li>Account Signup</li>
            </ul>

            <ul>
              <h3>Help</h3>
              <li>ShopCart Help</li>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Security & Fraud</li>
            </ul>

            <ul>
              <h3>About Us</h3>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
            </ul>
          </div>

          
        </div>

        <div className={style.links}>
            <img src="/twitter.svg" alt="twitter" />
            <img src="/in.svg" alt="in" />
            <img src="/facebook.svg" alt="facebook" />
            <img src="/insta.svg" alt="instagram" />
          </div>
          <div className={style.line}></div>

        <div className={style.centers}>
          <img src="/GG 1.svg" alt="" />
          <span>
            <img src="/Ellipse.svg" alt="" />
            <p>Help Center</p>
          </span>
          <p>Privacy & Policy</p>
          <p>Terms of Service</p>
          <p>All rights reserved by GameGeek | 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
