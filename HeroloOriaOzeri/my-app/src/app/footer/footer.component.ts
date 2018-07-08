import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'herolo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  copyrights: string = "All Rights Reserved";
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
  }

}
