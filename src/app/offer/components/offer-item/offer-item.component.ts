import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IOffer} from '../../interfaces';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferItemComponent {
  @Input() item: IOffer;

  public isCollapsed: boolean = false;

  public toggleCollapse(v: boolean): void {
    this.isCollapsed = v;
  }

}
