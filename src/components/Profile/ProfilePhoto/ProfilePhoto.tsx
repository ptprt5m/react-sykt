import React from 'react'
import userPicture from "../../../img/user.jpg";

const ProfilePhoto = () => {

    return (
        <div className="wrapper__profile-photo">
            <img className="wrapper__profile-picture" src={userPicture} alt="userPhoto"/>
            <button title="Функция в разработке"
                    className="main__form-button"
                    onClick={() => alert('Функция находится в разработке!')}
            >
                Обновить фото
            </button>
        </div>
    )
}

export default ProfilePhoto