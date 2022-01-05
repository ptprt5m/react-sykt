import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {userLogout} from "../../redux/loginReducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, {
    userLogout
})(HeaderContainer)