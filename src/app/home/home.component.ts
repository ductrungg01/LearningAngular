import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Vu Duc Trung';
  public age = 15;
  public traiCay = [
    {ten: 'Táo', gia: 1000, haGia: true},
    {ten: 'Nho', gia: 2000, haGia: false},
    {ten: 'Xoài', gia: -3000, haGia: true},
    {ten: 'Bưởi', gia: 4000, haGia: false},
    {ten: 'Cam', gia: -50.10, haGia: false},
    {ten: 'Quýt', gia: 6000, haGia: true},
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('trái cây: ', this.traiCay)
  }

  public resetName(): void{
    console.log("resetName");
    this.name = '';
  }

}
