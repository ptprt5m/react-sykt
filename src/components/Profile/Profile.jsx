import React from 'react'
import ProfilePhoto from "./ProfilePhoto";
import DescriptionProfile from "./DescriptionProfile";
import {connect} from "react-redux";

const Profile = (props) => {
    return (
        <div className="wrapper">
            <h1>Профиль</h1>
            <div className="wrapper__profile">
                <ProfilePhoto />
                <DescriptionProfile {...props} />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        login: state.login.login,
        email: state.login.email
    }
}

export default connect(mapStateToProps, {})(Profile)