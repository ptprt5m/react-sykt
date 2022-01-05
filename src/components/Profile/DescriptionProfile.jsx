import React from 'react'

const DescriptionProfile = (props) => {
    return (
        <div className="wrapper__profile-desc">
            <h3 className="wrapper__profile-desc_userName">{props.login}</h3>
            <p className="wrapper__profile-desc_email">{props.email}</p>
        </div>
    )
}

export default DescriptionProfile