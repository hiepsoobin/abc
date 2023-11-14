import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:5001/api/'; // Định nghĩa URL API của bạn

  constructor(private http: HttpClient) { }

  // Hàm gọi API để lấy danh sách khách hàng dựa trên các tham số tìm kiếm và phân trang
  getKhachHang(search: number, MST: string, pageNumber: number, pageSize: number) {
    const url = `${this.apiUrl}Khachhang?search=${search}&MST=${MST}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }
}
