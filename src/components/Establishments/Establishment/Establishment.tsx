import React, {useState} from 'react'
import img0 from '../../../img/rest/0.png'
import Preloader from "../../commons/Preloader";
import MoreInfo from "./MoreInfo";

type Props = {
    key?: string
    id: string
    name: string
    osm: string
    XID: string
    coord: Array<number>
    getInfoXID: (XID: string, placeInfoId: string | null) => void
    to2GIS: (lon: number, lat: number) => string
    placeInfo: any | null
    placeInfoId: string | null
    isXidFetching: boolean
}

const Establishment: React.FC<Props> = ({
                                            id, name, osm, XID,
                                            coord, getInfoXID, to2GIS,
                                            placeInfo, placeInfoId, isXidFetching
                                        }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="main__wrapper-item" key={id}>
            <div className="main__wrapper-item-block">
                <img className="main__wrapper-item-ava" src={img0} alt="restaurantPhoto"/>
                <div className="main__wrapper-item-block_right">
                    <h4>{name}</h4>
                    <a target="_blank" href={'https://www.openstreetmap.org/' + osm}>Точка
                        на openstreetmap</a>
                    <button className="all__button"
                            disabled={isXidFetching}
                            onClick={() => {
                                if (!isOpen) {
                                    getInfoXID(XID, id)
                                }
                                setIsOpen(!isOpen)
                            }}>{(placeInfo && placeInfoId === id && isOpen) ? 'Скрыть' : 'Получить больше данных'}
                    </button>
                    {isXidFetching && placeInfoId === id ? <Preloader/> :
                        (placeInfo && placeInfoId === id && isOpen) ?
                            <MoreInfo placeInfo={placeInfo} to2GIS={to2GIS} coord={coord}/> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Establishment