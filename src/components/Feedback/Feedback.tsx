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
            <div className="main__wrapper">
                {/*<FeedbackReduxForm email={email} onSubmit={onSubmit}/>*/}
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