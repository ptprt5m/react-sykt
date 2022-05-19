import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Textarea} from '../../Utils/FormControls'
import {required} from '../../Utils/validators'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux'

type MapStatePropsType = {
    email: string | null
}

type OwnPropsType = {
    handleSubmit: () => void
    onSubmit: () => void
}

type FeedbackFormPropsType = MapStatePropsType & OwnPropsType

const FeedbackForm: React.FC<FeedbackFormPropsType> = ({email, handleSubmit, onSubmit}) => {
    debugger
    return (
        <form onSubmit={handleSubmit} className="main__form">
            <h2 className="main__form-title">Обратная связь</h2>
            {email === null ?
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
            <button onSubmit={onSubmit} className="main__form-button">Отправить</button>
        </form>
    )
}

//let FeedbackReduxForm = reduxForm({form: 'feedback'})(FeedbackForm)

type FeedbackPropsType = {
    email: string | null
}

const Feedback: React.FC<FeedbackPropsType> = ({email}) => {

    const onSubmit = (formData: any) => {
        // props.sendFeedback(formData.titleOfFeedback, formData.contentOfFeedback)
    }

    return (
        <div className="wrapper">
            <div className="feedback__wrapper">
                {/*<FeedbackReduxForm email={email} onSubmit={onSubmit}/>*/}
                <h1>Обратная связь</h1>
                <div>
                    <p><span>По всем вопросам и пожеланиям можете писать лично мне в Telegram: </span><a
                        className="red" href="https://t.me/ptprt5m">@ptprt5m</a></p>
                    <p><span>Либо на почту: </span><span className="red">pt.prt@ya.ru</span></p>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        email: state.login.email
    }
}

export default connect(mapStateToProps, {})(Feedback)