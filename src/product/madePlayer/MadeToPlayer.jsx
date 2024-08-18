import React from "react";
import style from "../madePlayer/made.module.scss";
function MadeToPlayer() {
  return (
    <div style={{backgroundColor:"#0D2612"}}>
      <div className={style.made}>
        <div className={style.madeplay}>
          <h1>MADE TO PLAY</h1>
          <p>
            The A50 X connects you to all your game libraries from each of your
            systems, with the push of a button. With unprecedented advances in
            connectivity, audio and wireless fidelity, A50 X plays at peak
            performance no matter what, how and where you want to play.
          </p>
        </div>

        <div className={style.group}>
          <div className={style.card}>
            <img src="/fi.svg" alt="" />
            <h3>PLAYSYNC 3-SYSTEM SWITCHING</h3>
            <p>XBOX + PS5 + PC ALL AT ONCE</p>
          </div>
          <div className={style.card}>
            <img src="/bs.svg" alt="" />
            <h3>PRO-G GRAPHENE AUDIO TRANSDUCERS</h3>
            <p>INNOVATIVE PRECISION AND CLARITY</p>
          </div>
          <div className={style.card}>
            <img src="/cloud.svg" alt="" />
            <h3>PROFESSIONAL LIGHTSPEED wireless technology</h3>
            <p>PLUS BLUETOOTH ® MIX FOR TWO DEVICES</p>
          </div>

         <div className={style.card}>
             <img src="/h.svg" alt="" />
             <h3>HDMI 2.1 4K 120HZ</h3>
            <p>SUPERIOR 24-BIT AUDIO</p>
             </div>
        </div>
      </div>
    </div>
  );
}

export default MadeToPlayer;
