import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  jenisProgram = ['Jalan', 'Pelabuhan', 'Terminal', 'Bandara', 'Gardu Induk', 'Transmisi (SUTET, SUTT)'];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  provinsi = ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau',
  'Jambi', 'Bengkulu', 'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Lampung', 'Banten', 'Jawa Barat', 'DKI Jakarta',
  'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur',
  'Kalimantan Utara', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur',
  'Gorontalo', 'Sulawesi Utara', 'Sulawesi Barat', 'Sulawesi Tengah', 'Sulawesi Selatan',
  'Sulawesi Tenggara', 'Maluku Utara', 'Maluku', 'Papua Barat', 'Papua']

  constructor() { }

  ngOnInit() {
  }

}
