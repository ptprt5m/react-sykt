import React from 'react'
import Img from '../../../commons/Img'
import {cutTags} from '../../../../Utils/htmlTagsCleaner'

type Props = {
    placeInfo: any | null
    to2GIS: (lon: number, lat: number) => string
    coord: Array<number>
}

const MoreInfo: React.FC<Props> = ({placeInfo, to2GIS, coord}) => {
    return (
        <div>
            <p>Фото: {(placeInfo.preview) ?
                <Img path={placeInfo.preview.source}
                     nameClass={'leisure__wrapper-block-photo'}/> : 'Нет информации'} </p>
            <p>Адрес: <span
                className={"primaryDark"}>
                {(placeInfo.address.road ? placeInfo.address.road :
                    '(*Название улицы недоступно)') + ', ' + (placeInfo.address.house_number ? placeInfo.address.house_number
                    : '(*Номер дома недоступен)') + ' ' + (placeInfo.address.house ? '(' + placeInfo.address.house + ')'
                    : '') || 'Нет информации'}
            </span>
            </p>
            <p>Ссылка: {placeInfo.url ? <a href={placeInfo.url}>Сайт</a> : 'Нет информации'}</p>
            {(placeInfo.info) ? cutTags(placeInfo.info.descr) : null}
            <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
        </div>
    )
}

export default MoreInfo