import {changeFilter, loadData, reset} from './actions';
import {createReducer, on} from '@ngrx/store';
import {Action} from '@ngrx/store/src/models';
import {EFilter, IData, TFilterValue} from '../interfaces';


export interface OfferState {
  data: IData;
  currentFilter: TFilterValue;
}

export const initialState: OfferState = {
  data: undefined,
  currentFilter: EFilter.downloadSpeed
};

const reducer = createReducer(
  initialState,
  on(reset, (state) => ({...state, currentFilter: undefined})),
  on(loadData, (state, {data}) => ({...state, data})),
  on(changeFilter, (state, {currentFilter}) => ({...state, currentFilter}))
);

export function offerReducer(state: OfferState, action: Action) {
  return reducer(state, action);
}
