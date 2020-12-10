import {IFilters, IOffer} from './interfaces';

export function trackBy(_: number, item: IOffer): number {
  return +item.rank;
}

export function trackByOptions(_: number, item: IFilters): number {
  return +item.value;
}

