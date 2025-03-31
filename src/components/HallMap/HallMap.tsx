import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import './HallMap.scss'

type HallMapProps = {
    placeMarksData: {
        coords: number[],
        color: string
    }[]
}

export const HallMap = ({placeMarksData}: HallMapProps) => {
    const defaultCoords = [55.684758, 37.738521];

    const getCenterByCoords = () => {
        let maxY = 0;
        let maxX = 0

        placeMarksData.forEach(({coords: [coordY, coordX]}) => {
            maxY += coordY
            maxX += coordX
        })

        return [maxY / placeMarksData.length, maxX / placeMarksData.length]
    }

    const defaultState = {
        center: placeMarksData.length ? getCenterByCoords() : defaultCoords,
        zoom: 4,
      };

    return (
        <YMaps>
            <Map defaultState={defaultState} className='HallMap'>
                {placeMarksData.map(({coords, color}) => (
                    <Placemark geometry={coords} key={String(coords)} options={{
                        iconColor: color
                    }}/>
                ))}
            </Map>
        </YMaps>
    )
}