import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
isCheckIn: boolean=false;
timestamp: string;
  userAppointment: any;
  userClient: any;
  datafromdatabase: any[]=[];
  constructor(
    private sharedService:SharedService,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {   this.datafromdatabase= this.sharedService.sharedVariable;}
  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  ngOnInit() {
 this.getdetails()
  //   this.userAppointment=[];
  //   this.userAppointment=[ { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
  //   { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
  //   { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
  //   { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' }
  // ]
  }

  CheckIn(){
 this.isCheckIn= true;
 const clickTimestamp = new Date().toLocaleString();
 this.timestamp = clickTimestamp;
 console.log(`Checkin at: ${this.timestamp}`);
 console.log(this.isCheckIn)
 console.log(this.datafromdatabase)

  }
  getdetails(){
    this.http.get("https://listening-app-backend-py-new.azurewebsites.net/therapist/2",
    this.httpOptions
    ).subscribe(
      (data: any) => {
        if (data !== undefined) {
          
          // const  dets= JSON.parse(data)
          this.userClient= data.appointment_details[0]
          this.userAppointment=data.appointment_details[0].client_data
          
          
          
        }
      },
      (error: any) => {
        console.log("error")
      }
    );
  }
  }
