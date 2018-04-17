import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  /* Apply CSS class to the component element. */
  @HostBinding('class.groupease-root') true;

  constructor() { }

  ngOnInit() {
  }

}
