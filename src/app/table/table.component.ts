import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    'Sulawesi Tenggara', 'Maluku Utara', 'Maluku', 'Papua Barat', 'Papua'];

  kecamatan = ['Abepura', 'Heram', 'Jayapura Selatan', 'Jayapura Utara', 'Muara Tami'];

  kabKota = ['Kota Jayapura', 'Kabupaten Merauke', 'Kabupaten Jayawijaya',
  'Kabupaten Jayapura',
  'Kabupaten Nabire',
  'Kabupaten Kepulauan Yapen',
  'Kabupaten Biak Numfor',
  'Kabupaten Puncak Jaya',
  'Kabupaten Paniai',
  'Kabupaten Mimika',
  'Kabupaten Sarmi',
  'Kabupaten Keerom',
  'Kabupaten Pegunungan Bintang',
  'Kabupaten Yahukimo',
  'Kabupaten Tolikara',
  'Kabupaten Waropen',
  'Kabupaten Boven Digoel',
  'Kabupaten Mappi',
  'Kabupaten Asmat',
  'Kabupaten Supiori',
  'Kabupaten Mamberamo Raya',
  'Kabupaten Mamberamo Tengah',
  'Kabupaten Yalimo',
  'Kabupaten Lanny Jaya',
  'Kabupaten Nduga',
  'Kabupaten Puncak',
  'Kabupaten Dogiyai',
  'Kabupaten Intan Jaya',
  'Kabupaten Deiyai'
  ];

  initForm: FormGroup;
  provinsiForm: FormGroup;

  rtrwn;
  rtrksn;
  rtrwpulau;
  rtrwprovinsi;
  rtrwkota;

  selectedJenisProgram;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.initForm = this.fb.group({
      jpControl: '',
      provinsiControl: '',
      kabKotaControl: '',
      kecamatanControl: '',
    });



    }

    onSelected() {
      console.log('Isi Program');
      console.log(this.selectedJenisProgram);
    }

}
