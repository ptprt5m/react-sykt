import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Utils/FormControls";
import {required} from "../Utils/validators";
import {Link} from "react-router-dom";

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
            <Link className="main__form-forgot" to={"/forgot"}>Забыли?</Link>
            <button onSubmit={props.onSubmit} className="main__form-button">Войти</button>
            <button className="main__form-button"><Link to={"/signUp"}>Регистрация</Link></button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login