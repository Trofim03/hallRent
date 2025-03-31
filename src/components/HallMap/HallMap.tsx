import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import './HallMap.scss'

type HallMapProps = {
    coords: number[][]
}

export const HallMap = ({coords}: HallMapProps) => {
    const defaultCoords = [55.684758, 37.738521];

    const getCenterByCoords = () => {
        let maxY = 0;
        let maxX = 0

        coords.forEach(([coordY, coordX]) => {
            maxY += coordY
            maxX += coordX
        })

        return [maxY / coords.length, maxX / coords.length]
    }

    const defaultState = {
        center: coords.length ? getCenterByCoords() : defaultCoords,
        zoom: 4,
      };

    return (
        <YMaps>
            <Map defaultState={defaultState} className='HallMap'>
                {coords.map((coord) => (
                    <Placemark geometry={coord} key={String(coord)} />
                ))}
            </Map>
        </YMaps>
    )
}