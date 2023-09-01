import { SnackBarService } from './snack-bar.service';
import { Ipassenger } from 'src/app/shared/models/passenger.interface';
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: "root"
})
export class PassengerService {
    constructor(private _snackBar: SnackBarService) { }

    public passArray: Array<Ipassenger> = [
        {
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
        },
        {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
        }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: null
        }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkInDate: 1488412800000,
            children: [{ name: 'Jessica', age: 1 }]
        }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkInDate: null,
            children: null
        }
    ]

    passData(): Array<Ipassenger> {
        return this.passArray
    }

    updatePass(updatedName: string, id: number) {
        this.passArray.forEach(ele => {
            if (ele.id === id) {
                this._snackBar.openSnackBar(`The passenger ${ele.fullname} is change to ${updatedName}`, 'close')
            }
            if (ele.id === id) {
                ele.fullname = updatedName
            }
            return
        })
    }

    removePass(id: number) {
        let passIndex = this.passArray.findIndex(ele => {
            return ele.id === id
        })
        let getDelete = this.passArray.splice(passIndex, 1)
        this._snackBar.openSnackBar(`The Passenger ${getDelete[0].fullname} is remove`, 'close')

    }
}