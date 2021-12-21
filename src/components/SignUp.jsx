import {Field, reduxForm} from "redux-form";
import {Input} from "../Utils/FormControls";
import {required} from "../Utils/validators";
import React from "react";

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="main__form">
            <h2 className="main__form-title">Регистрация</h2>
            <Field name={'userLogin'}
                   component={Input}
                   placeholder={'Логин'}
                   validate={[required]}
            />
            <Field name={'userEmail'}
                   component={Input}
                   placeholder={'Email'}
                   validate={[required]}
            />
            <Field name={'password'}
                   component={Input}
                   placeholder={'Пароль'}
                   validate={[required]}
                   type={"password"}
            />
            <Field name={'passwordConfirm'}
                   component={Input}
                   placeholder={'Подтвердите пароль'}
                   validate={[required]}
                   type={"password"}
            />
            <button className="main__form-button">Зарегистрироваться</button>
        </form>
    )
}

let SignUpReduxForm = reduxForm({form: 'signUp'})(SignUpForm)

const SignUp = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                <SignUpReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default SignUp
