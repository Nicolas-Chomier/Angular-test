import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
//
interface frontValue {
  id: number;
  text: string;
  bgColor: string;
}
//
@Component({
  selector: 'app-field-set',
  templateUrl: './field-set.component.html',
  styleUrls: ['../../styles.scss', './field-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldSetComponent implements OnInit {
  @Input() textLimit: number[] = [5, 8];
  @Input() placeHolder: string | void = 'Enter task please';
  @Input() legend: string | void;
  //
  red: string = '#F03A5F';
  green: string = '#7DCEA0';
  legendTilte: string = 'Task manager';
  inputValue: string = '';
  currentItem: frontValue[] = [];
  uniqueId: number;
  disabledOrNot: boolean = true;
  fieldSize: number = 20;
  bgColor: string = 'red';
  outputBgColor: string;
  //
  ngOnInit(): void {
    // Code à exécuter lors de l'initialisation du composant
    this.placeHolder && (this.fieldSize = this.placeHolder.length);
  }

  addItem(): void {
    console.log('outputBgColor', this.outputBgColor);
    this.uniqueId = +`${Date.now() * Math.floor(Math.random() * 100)}`.slice(
      -5
    );
    this.inputValue !== '' &&
      (this.currentItem.push({
        id: this.uniqueId,
        text: this.inputValue,
        bgColor: this.outputBgColor,
      }),
      (this.inputValue = ''),
      (this.disabledOrNot = true),
      (this.bgColor = this.red));
  }

  detecterChangement(nouveauTexte: string) {
    // Effectuer les actions souhaitées avec le nouveau texte
    console.log('Nouveau texte :', nouveauTexte);
    this.inputValue.length < this.textLimit[0]
      ? ((this.disabledOrNot = true), (this.bgColor = this.red))
      : ((this.disabledOrNot = false), (this.bgColor = this.green));
  }

  test(color: any): void {
    console.log('parent', color);
    this.outputBgColor = color;
  }
}
