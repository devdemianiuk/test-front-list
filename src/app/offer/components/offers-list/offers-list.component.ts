import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IOffer} from '../../interfaces';
import {trackBy} from '../../utils';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersListComponent {
  @Input() data: IOffer[];
  public readonly trackBy = trackBy;
}
