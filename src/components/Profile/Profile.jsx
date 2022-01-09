import React, {useEffect} from 'react'
import ProfilePhoto from "./ProfilePhoto";
import DescriptionProfile from "./DescriptionProfile";
import {connect} from "react-redux";
import {useNavigate} from "react-router";

const Profile = (props) => {

    const navigate = useNavigate();
    const refreshProfile = () => {
        if (!props.email) {
            navigate('/login');
        }
    }

    useEffect(() => {
        refreshProfile()
    }, []);

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