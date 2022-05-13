import React from 'react'

type Props = {
    placeInfo: any | null
    to2GIS: (lon: number, lat: number) => string
    coord: Array<number>
}

const MoreInfo: React.FC<Props> = ({placeInfo, to2GIS, coord}) => {
    return (
        <div>
            <p>Адрес: <span className={"primaryDark"}>{placeInfo.address.road + ', ' + placeInfo.address.house_number + ' ' + (placeInfo.address.house ? '(' + placeInfo.address.house + ')' : '') || 'Нет информации'}</span></p>
            <p>Ссылка: {placeInfo.url ? <a href={placeInfo.url}>Сайт</a> : 'Нет информации'}</p>
            <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
        </div>
    )
}

export default MoreInfo