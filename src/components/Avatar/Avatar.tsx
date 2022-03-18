import React from "react";
import classes from './Avatar.module.css'
import userPhoto from '../../img/user.jpg'
import Preloader from '../commons/Preloader';

type Props = {
    userProfile: any
    isOwner: boolean
    savePhoto: React.ChangeEventHandler<HTMLInputElement>
}

const Avatar: React.FC<Props> = ({userProfile, isOwner, savePhoto}) => {

    if (!userProfile) {
        <Preloader/>
    }

    const onMainPhotoSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
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