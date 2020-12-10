import {OfferState} from './reducer';
import {createSelector} from '@ngrx/store';
import {EFilter, IOffer} from '../interfaces';
import {mapSorting} from '../consts';


export interface AppState {
  offer: OfferState;
}

export const selectOfferState = (state: AppState): OfferState => state.offer;


export const selectTotalResult = createSelector(
  selectOfferState, (state: OfferState) => state.data?.totalResults || '0');

export const selectOffers = createSelector(
  selectOfferState, (state: OfferState) => state.data?.offers || []);

export const selectCurrentFilter = createSelector(
  selectOfferState, (state: OfferState) => state.currentFilter);


export const selectFilteredOffers = createSelector(
  selectOffers, selectCurrentFilter,
  (state: IOffer[], fcurrentFilter: string) => {
    const filter = mapSorting.get(EFilter[fcurrentFilter]);
    return filter ? [...state].sort(sortBy<IOffer>(filter)) : state;
  });


function sortBy<T>(getProp: (v: T) => number): (a: T, b: T) => number {
  return (a: T, b: T) => getProp(a) - getProp(b);
}
