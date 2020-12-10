export interface IData {
  totalResults: string;
  offers: IOffer[];
}


export interface IOffer {
  rank: string;
  contractTerm: {
    downloadSpeed: IBandwidth,
    uploadSpeed: IBandwidth
  };
  cost: {
    effectiveCost: {
      amount: string
      unit: string
    }
  };
  provider: {
    logoUrl: string,
    caption: ITextable,
    content: ITextable,
  };
}


export interface IBandwidth {
  amount: string;
  unit: string;
}

export interface IFilters {
  value: TFilterValue;
  viewValue: string;
}

export interface ITextable {
  text: string;
}

export enum EFilter {
  downloadSpeed = 'downloadSpeed',
  uploadSpeed = 'uploadSpeed',
  cost = 'cost'
}

export type TFilterValue = keyof typeof EFilter;

