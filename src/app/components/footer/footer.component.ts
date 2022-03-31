import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  showForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.showForm = this.showForm ? false : true;
  }

  contactFormEvent(event: boolean) {
    this.showForm = !event;
  }

}
