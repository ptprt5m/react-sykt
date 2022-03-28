import React, {useState} from 'react'
import LazyLoad from 'react-lazyload'
import ModalImg from './ModalImg'

type Props = {
    path: string
    nameClass: string
}

const Img: React.FC<Props> = ({path, nameClass}) => {

    const [scaleImg, setScaleImg] = useState(false)

    const incImg = () => {
        setScaleImg(true)
        document.body.style.overflow = 'hidden'
    }

    const decImg = () => {
        setScaleImg(false)
        document.body.style.overflow = 'visible'
    }

    return (
        <LazyLoad height={400}>
            {
                (scaleImg ?
                    <ModalImg path={path} decImg={decImg} /> :
                    <img className={nameClass} src={path} onClick={incImg} title={'Нажмите, чтобы увеличить'}/>)
            }
        </LazyLoad>
    )
}

export default Img