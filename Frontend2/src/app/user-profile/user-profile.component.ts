import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userAppointment: any[];
  constructor() { }

  ngOnInit() {
 
    this.userAppointment=[];
    this.userAppointment=[ { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
    { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
    { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' },
    { clientName: 'ABC', startTime: '2023-10-12T03:50:00', endTime: '2023-10-15T14:00:00', Address: '...', Phone:'1234' }
  ]
  }

}