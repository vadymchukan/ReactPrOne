import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://www.rosphoto.com/images/u/articles/1510/3_13.jpg" alt=""></img>
      </div>

      <div className={s.descriptioneBlock}>Avatar + desc</div>

    </div>
  )
}

export default ProfileInfo;