import React from 'react';
import {connect} from 'react-redux'
import {userLogout} from '../../../redux/loginReducer'
import {AppStateType} from '../../../redux/redux'
import Header from '../index'

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    userLogout: () => void
}

type Props = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<Props> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, {
    userLogout
})(HeaderContainer)