import React, {useEffect} from 'react'
import ProfilePhoto from './ProfilePhoto'
import DescriptionProfile from './DescriptionProfile'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router'
import {AppStateType} from '../../redux/redux'

type MapStatePropsType = {
    login: string | null
    email: string | null
}

type MapDispatchPropsType = {

}

type Props = MapStatePropsType & MapDispatchPropsType

const Profile: React.FC<Props> = ({email, login}) => {

    const navigate = useNavigate();
    const refreshProfile = () => {
        if (!email) {
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
                <DescriptionProfile email={email} login={login} />
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.login.login,
        email: state.login.email
    }
}

export default connect(mapStateToProps, {})(Profile)