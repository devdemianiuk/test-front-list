import {createAction, props} from '@ngrx/store';
import {IData, TFilterValue} from '../interfaces';


export const reset = createAction('[Offer] Reset');
export const loadData = createAction('[Offer] Load Data', props<{ data: IData }>());
export const changeFilter = createAction('[Offer] Change Filter', props<{ currentFilter: TFilterValue }>());
