import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

    enableColors: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  test(){
      console.log('lol')
  }


}
