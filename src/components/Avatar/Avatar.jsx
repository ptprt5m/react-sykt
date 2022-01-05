import classes from './Avatar.module.css'
import React from "react";
import userPhoto from '../../img/user.jpg'
import Preloader from "../commons/Preloader";

const Avatar = ({userProfile, isOwner, savePhoto}) => {

    if (!userProfile) {
        <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.avatarBlock}>
            <img src={ !userProfile ? userPhoto : userProfile.photos.large }
                 alt="avatar" className={classes.avatar} />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
)
}

export default Avatar