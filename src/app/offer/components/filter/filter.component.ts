import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IFilters, TFilterValue} from '../../interfaces';
import {trackByOptions} from '../../utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Input() options: IFilters[];
  @Output() selectChange: EventEmitter<TFilterValue> = new EventEmitter<TFilterValue>();
  public readonly trackBy = trackByOptions;

  onSelectChange(v: TFilterValue): void {
    this.selectChange.emit(v);
  }
}
