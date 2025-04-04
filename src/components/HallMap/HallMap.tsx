import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import './HallMap.scss'
import { CompanyBranchType } from '../../store/userSlice';
import { Empty } from 'antd';

type PlaceMarkType = CompanyBranchType & {color: string}

type HallMapProps = {
    placeMarksData: PlaceMarkType[],
    onMarkClick?: (mark: PlaceMarkType) => void,
    onMapClick?: () => void
}

export const HallMap = ({placeMarksData, onMarkClick, onMapClick}: HallMapProps) => {
    if (!placeMarksData.length) {
        return <Empty description={'Отсутствуют помещения для отображения'} />
    }

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

      const setMapEvents = (inst: ymaps.Map) => {
        if (onMapClick) {
            inst?.events.add('click', onMapClick)
        }
      }

      const setMarkEvents = (inst: ymaps.Map, mark: PlaceMarkType) => {
        if (onMarkClick) {
            inst?.events.add('click', () => onMarkClick(mark))
        }
      }

    return (
        <YMaps>
            <Map defaultState={defaultState} className='HallMap' instanceRef={setMapEvents}>
                {placeMarksData.map((mark) => (
                    <Placemark 
                    geometry={mark.coords} 
                    instanceRef={(inst) => setMarkEvents(inst, mark)} 
                    key={String(mark.coords)} 
                    options={{
                        iconColor: mark.color
                    }}
                    />
                ))}
            </Map>
        </YMaps>
    )
}