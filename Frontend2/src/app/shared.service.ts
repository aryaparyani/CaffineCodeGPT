import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedVariable = [
    { id: 1, startTime: '2023-10-12T03:50:00', endTime: '2023-10-12T06:01:00', otherFields: '...' },
    { id: 2, startTime: '2023-10-12T01:00:00', endTime: '2023-10-12T02:00:00', otherFields: '...' },
    { id: 3, startTime: '2023-10-12T00:01:00', endTime: '2023-10-12T00:03:00', otherFields: '...' },
    { id: 4, startTime: '2023-10-12T02:01:00', endTime: '2023-10-12T04:03:00', otherFields: '...' }

    // ...
  ];
  constructor() { }
}