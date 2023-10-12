import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { data } from 'jquery';
import { error } from 'console';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  therapistDetails:  any;
  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTherapistDetails()
  }
  getTherapistDetails(){
    this.http.get("http://127.0.0.1:8000/administrator/2",
    this.httpOptions
    ).subscribe(
      (data: any) => {
        if (data !== undefined) {
          console.log(data);
          // const  dets= JSON.parse(data)
          this.therapistDetails= data.appointment_details[0].therapist_data

          console.log(this.therapistDetails)
          
          
        }
      },
      (error: any) => {
        console.log("error")
      }
    );
  }
}
