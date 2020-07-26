import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  messageClock: string;

  constructor() {

    let messageDate = new Date();

    setInterval( () => {
      let messageDate = new Date();
      this.messageClock = messageDate.toDateString() + " " + messageDate.toTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
