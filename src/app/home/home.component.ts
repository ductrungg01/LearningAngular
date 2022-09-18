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
  public vietnamData = [
    {city: 'Chọn tỉnh/thành phố', district: ['Chọn quận/huyện']},
    {city: 'An Giang',
    district: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"
    ]},
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]
    }
  ];
  public districts: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('trái cây: ', this.traiCay)
  }

  public resetName(): void{
    console.log("resetName");
    this.name = '';
  }

  public changeCity(event: any){
    const city = event.target.value;

    if (!city) return;

    // Cách 1
    // console.log('event', city);
    // const search = this.vietnamData.filter(data => data.city === city);
    // if (search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }
}
