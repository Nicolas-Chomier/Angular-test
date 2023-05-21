import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-span-label',
  templateUrl: './span-label.component.html',
  styleUrls: ['../../styles.scss', './span-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpanLabelComponent {
  @Input() text: string;
  @Input() uid: number;
  @Input() bgColor: string;

  deleteLabel(uid: number): void {
    let uidStr: string | null = `${uid}`;
    const divAEffacer = document.getElementById(uidStr);
    if (divAEffacer) {
      divAEffacer.remove();
    }
  }
}
