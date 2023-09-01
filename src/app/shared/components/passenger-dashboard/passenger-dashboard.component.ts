import { Component, OnInit } from '@angular/core';
import { PassengerService } from './../../services/pass.service';
import { Ipassenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  public passData !: Array<Ipassenger>
  public checkIn !: number
  constructor(private _passService: PassengerService) { }

  ngOnInit(): void {
    this.passData = this._passService.passData();
    this.checkedInCount()
  }

  checkedInCount() {
    this.checkIn = this.passData.filter(ele => ele.checkedIn).length
  }
}
