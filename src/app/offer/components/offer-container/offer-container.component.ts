import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {changeFilter, loadData} from '../../state/actions';
import {EFilter, IFilters, IOffer, TFilterValue} from '../../interfaces';
import {AppState, selectFilteredOffers, selectTotalResult} from '../../state/selectors';


@Component({
  selector: 'app-offer-container',
  templateUrl: './offer-container.component.html',
  styleUrls: ['./offer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferContainerComponent implements OnInit {
  public readonly filters: IFilters[] = [
    {value: EFilter.downloadSpeed, viewValue: 'downloadSpeed'},
    {value: EFilter.uploadSpeed, viewValue: 'uploadSpeed'},
    {value: EFilter.cost, viewValue: 'cost'},
    {value: undefined, viewValue: 'empty'},
  ];
  public readonly offers: Observable<IOffer[]> = this.store.select(selectFilteredOffers);
  public readonly totalResult: Observable<string> = this.store.select(selectTotalResult);


  constructor(
    private store: Store<AppState>,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    // TODO: move to effects
    this.dataService.getData().subscribe(data => {
      this.store.dispatch(loadData({data}));
    });
  }

  public onFilterChange(currentFilter: TFilterValue): void {
    this.store.dispatch(changeFilter({currentFilter}));
  }

}
