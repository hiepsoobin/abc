import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit {

  public customers: any[] = [];

  constructor(private tenService: ApiService) { }

  ngOnInit(): void {
    const search = 123; // Tham số tìm kiếm, bạn có thể thay đổi giá trị này tùy theo yêu cầu.
    const mst = 'ABC'; // Tham số MST, bạn có thể thay đổi giá trị này tùy theo yêu cầu.
    const pageNumber = 1; // Trang số 1.
    const pageSize = 10; // 10 khách hàng trên mỗi trang.

    this.tenService.getKhachHang(search, mst, pageNumber, pageSize).subscribe(
      (data) => {
        this.customers = data; // Lưu dữ liệu trả về vào biến customers để hiển thị trong template.
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
