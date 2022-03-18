import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../Utils/FormControls";
import {required} from "../Utils/validators";
import {connect} from "react-redux";

const FeedbackForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit} className="main__form">
            <h2 className="main__form-title">Обратная связь</h2>
            {props.email === null ?
                <Field name={'emailForFeedback'}
                       component={Input}
                       placeholder={'Ваш Email'}
                       validate={[required]}
                /> : null}
            <Field name={'titleOfFeedback'}
                   component={Input}
                   placeholder={'Тема обращения'}
                   validate={[required]}
            />
            <Field name={'contentOfFeedback'}
                   component={Textarea}
                   placeholder={'Текст обращения'}
                   validate={[required]}
            />
            <button onSubmit={props.onSubmit} className="main__form-button">Отправить</button>
        </form>
    )
}

let FeedbackReduxForm = reduxForm({form: 'feedback'})(FeedbackForm)

const Feedback = (props) => {

    const onSubmit = (formData) => {
        // props.sendFeedback(formData.titleOfFeedback, formData.contentOfFeedback)
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                <FeedbackReduxForm email={props.email} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        email: state.login.email
    }
}

export default connect(mapStateToProps, {})(Feedback)