import {Field, reduxForm} from "redux-form";
import {Input} from "../../Utils/FormControls";
import {required} from "../../Utils/validators";
import React from "react";

const ForgotForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="main__form">
            <h2 className="main__form-title">Восстановление пароля</h2>
            <Field name={'forgotEmail'}
                   component={Input}
                   placeholder={'Email'}
                   validate={[required]}
            />
            <button className="main__form-button">Отправить письмо</button>
        </form>
    )
}

let ForgotReduxForm = reduxForm({form: 'forgot'})(ForgotForm)

const Forgot = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                <ForgotReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Forgot