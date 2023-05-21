import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  @Output() giveColor = new EventEmitter<any>();
  //
  blueIsHighlighted: boolean = false;
  pinkIsHighlighted: boolean = false;
  yellowIsHighlighted: boolean = false;
  terracottaIsHighlighted: boolean = false;

  getColor(color: any): void {
    console.log(color);
    this.giveColor.emit(color);
    if (color === '#85C1E9') {
      this.blueIsHighlighted = true;
      this.pinkIsHighlighted = false;
      this.yellowIsHighlighted = false;
      this.terracottaIsHighlighted = false;
    }
    if (color === '#FEA1A1') {
      this.blueIsHighlighted = false;
      this.pinkIsHighlighted = true;
      this.yellowIsHighlighted = false;
      this.terracottaIsHighlighted = false;
    }
    if (color === '#FFE194') {
      this.blueIsHighlighted = false;
      this.pinkIsHighlighted = false;
      this.yellowIsHighlighted = true;
      this.terracottaIsHighlighted = false;
    }
    if (color === '#c45824') {
      this.blueIsHighlighted = false;
      this.pinkIsHighlighted = false;
      this.yellowIsHighlighted = false;
      this.terracottaIsHighlighted = true;
    }
  }
}
