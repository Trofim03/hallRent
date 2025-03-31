import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';

export const HallMap = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
      };

    return (
        <YMaps>
        <Map defaultState={defaultState} height={500}>
            <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
    </YMaps>
    )
}