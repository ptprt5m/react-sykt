import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../Utils/FormControls'
import {required} from '../Utils/validators'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLogin} from '../redux/loginReducer'
import {AppStateType} from '../redux/redux'

type LoginFormOwnProps = {
    onSubmit: () => void
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, onSubmit, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className="main__form">
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
            <button onSubmit={onSubmit} className="main__form-button">Войти</button>
            <button className="main__form-button"><Link to={"/signUp"}>Регистрация</Link></button>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <div>
                <Field name={'captcha'}
                       component={Input}
                       type={'text'}
                       validate={[required]}
                />
            </div>}

        </form>
    )
}

let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    userLogin: (username: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    username: string
    onSubmit: () => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.userLogin(formData.username, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className="wrapper">
            <div className="main__wrapper">
                {/*<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>*/}
            </div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        captchaUrl: state.login.captchaUrl,
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, {userLogin})(Login)