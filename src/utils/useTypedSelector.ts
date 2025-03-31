import {RootState} from '../store/types';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

/**
 * возвращает типизированный store
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
