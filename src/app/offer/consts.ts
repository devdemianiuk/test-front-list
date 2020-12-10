import {EFilter, IOffer} from './interfaces';

export const mapSorting = new Map<EFilter, (s: IOffer) => number>([
  [EFilter.downloadSpeed, (v) => +v.contractTerm.downloadSpeed.amount],
  [EFilter.uploadSpeed, (v) => +v.contractTerm.uploadSpeed.amount],
  [EFilter.cost, (v) => +v.cost.effectiveCost.amount]
]);
