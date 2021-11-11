import { HttpService } from './services/http.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mot';
  public carDetails: any;
  public MOThistory: any;
  public registrationNumber: any;
  public displayedRegistration: any;

  constructor(private httpService: HttpService, private toastr: ToastrService) {
  }

  getCarMOT(registrationNumber: string) {
    this.httpService.get("getRegistration?registrationNumber=" + registrationNumber).subscribe((rs: any) => {
      let parsedJson = JSON.parse(rs);
      if (!parsedJson.errorMessage) {
        this.carDetails = parsedJson[0];
        this.MOThistory = this.carDetails.motTests[0];
        this.displayedRegistration = this.registrationNumber;
      } else {
        this.carDetails = "";
        this.toastr.error(parsedJson.errorMessage, 'Error');
      }
    }, (err) => {
      console.log(err);
    });
  }


}




