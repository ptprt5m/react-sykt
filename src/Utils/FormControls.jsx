import React from 'react'
import classes from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                <textarea {...input} {...props}
                          className={(hasError && classes.error) + " " + "main__form-textarea"}
                          placeholder={hasError && meta.error || props.placeholder}
                />
            </div>
            {/*{hasError && <span className={classes.errorText}>{meta.error}</span>}*/}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                <input {...input} {...props}
                       className={(hasError && classes.error) + " " + "all__input"}
                       placeholder={hasError && meta.error || props.placeholder}
                />
            </div>
            {/*{hasError && <span className={classes.errorText}>{meta.error}</span>}*/}
        </div>
    )
}