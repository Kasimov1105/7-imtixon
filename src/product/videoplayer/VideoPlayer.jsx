import React from 'react';
import style from "../videoplayer/video.module.scss"

function VideoPlayer() {
  return (
    <div className={style.videoPlayer}>
      <video  controls>
        <source src='https://videos.pexels.com/video-files/7660481/7660481-uhd_2560_1440_25fps.mp4' type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;






