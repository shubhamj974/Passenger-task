import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger.interface';
import { PassengerService } from 'src/app/shared/services/pass.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passDataToCard !: Ipassenger;
  public editMode: boolean = false;
  @Output() passRemoveEmitData: EventEmitter<number> = new EventEmitter<number>()
  constructor(private _passService: PassengerService) { }

  ngOnInit(): void {

  }

  onupdatePass(passName: HTMLInputElement, id: number) {
    let val = passName.value;
    this._passService.updatePass(val, id)
    passName.value = ''
  }

  onRemovePass(id: number) {
    this._passService.removePass(id);
    this.passRemoveEmitData.emit(id)
  }
}
