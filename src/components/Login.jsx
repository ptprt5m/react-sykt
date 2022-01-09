import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Utils/FormControls";
import {required} from "../Utils/validators";
import {Link, Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {userLogin} from "../redux/loginReducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="main__form">
            <h2 className="main__form-title">Авторизация</h2>
            <Field name={'username'}
                   component={Input}
                   placeholder={'Логин'}
                   validate={[required]}
            />
            <Field name={'password'}
                   component={Input}
                   placeholder={'Пароль'}
                   validate={[required]}
                   type={'password'}
            />
            remember me
            <Field name={'rememberMe'}
                   component={Input}
                   type={"checkBox"}
            />
            <Link className="main__form-forgot" to={"/forgot"}>Забыли?</Link>
            <button onSubmit={props.onSubmit} className="main__form-button">Войти</button>
            <button className="main__form-button"><Link to={"/signUp"}>Регистрация</Link></button>

            { props.captchaUrl && <img src={props.captchaUrl} /> }
            { props.captchaUrl && <div>
                <Field name={'captcha'}
                       component={Input}
                       type={'text'}
                       validate={[required]}
                />
            </div> }

        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.userLogin(formData.username, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, {userLogin})(Login)