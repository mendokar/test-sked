import { Component, OnInit } from '@angular/core';
import { SkedService } from "../services/sked.service";
import { UserModel } from "../models/user.model";
@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {

  USUARIOS: UserModel[] = [];
  constructor(private _service: SkedService) { }

  ngOnInit() {
    this.getDataUser();
  }

  getDataUser() {
    this._service.getDataServer().subscribe(res => {
      let results = res['success'];
      if (results != true) {
        alert('error when consulting the data, please try later')
      } else {
        let response = res['data'];
        let email = response.emails
        for (let index = 0; index < response.length; index++) {
          this.USUARIOS.push(
            {
              Id: response[index].id,
              Firts_Name: response[index].first_name,
              Last_Name: response[index].last_name,
              Email: response[index].emails[0].email
            }
          );

        }
      }
    })
  }

}
