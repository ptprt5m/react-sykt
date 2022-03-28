import React from 'react'

type Props = {
    path: string
    decImg: () => void
}

const ModalImg: React.FC<Props> = ({path, decImg}) => {
    return (
        <div className={'modalImg'}>
            <img className={'modalImg-image'} src={path} onClick={decImg} />
        </div>
    )
}

export default ModalImg