import React, {useState} from 'react'
import editIcon from '../../../img/profile/edit.png'
import saveIcon from '../../../img/profile/save.png'
import '../../../styles/style.scss'

type Props = {
    login: string | null
    email: string | null
}

const DescriptionProfile: React.FC<Props> = ({login, email}) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div className="wrapper__profile-desc">
            <div className='wrapper__profile-desc_usernameBlock'>
                {editMode
                    ? <input className="wrapper__profile-desc_userNameInput" type="text"/>
                    : <h3 className="wrapper__profile-desc_userName">{login}</h3>
                }
                <button className='wrapper__profile-desc_button' onClick={() => setEditMode(!editMode)}>
                    <img className='wrapper__profile-desc_icon' src={editMode ? saveIcon : editIcon} alt="editIcon"/>
                </button>
            </div>
            <p className="wrapper__profile-desc_email">{email}</p>
        </div>
    )
}

export default DescriptionProfile