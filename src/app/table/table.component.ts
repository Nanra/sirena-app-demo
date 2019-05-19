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

  rtrwn = '-';
  rtrksn = '-';
  rtrwpulau = '-';
  rtrwprovinsi = '-';
  rtrwkota = '-';

  rtrwn2 = '-';
  rtrksn2 = '-';
  rtrwpulau2 = '-';
  rtrwprovinsi2 = '-';
  rtrwkota2 = '-';

  rtrwn3 = '-';
  rtrksn3 = '-';
  rtrwpulau3 = '-';
  rtrwprovinsi3 = '-';
  rtrwkota3 = '-';

  rtrwn4 = '-';
  rtrksn4 = '-';
  rtrwpulau4 = '-';
  rtrwprovinsi4 = '-';
  rtrwkota4 = '-';

  rtrwn5 = '-';
  rtrksn5 = '-';
  rtrwpulau5 = '-';
  rtrwprovinsi5 = '-';
  rtrwkota5 = '-';

  rtrwn6 = '-';
  rtrksn6 = '-';
  rtrwpulau6 = '-';
  rtrwprovinsi6 = '-';
  rtrwkota6 = '-';

  rtrwn7 = '-';
  rtrksn7 = '-';
  rtrwpulau7 = '-';
  rtrwprovinsi7 = '-';
  rtrwkota7 = '-';

  rtrwn8 = '-';
  rtrksn8 = '-';
  rtrwpulau8 = '-';
  rtrwprovinsi8 = '-';
  rtrwkota8 = '-';

  rtrwn9 = '-';
  rtrksn9 = '-';
  rtrwpulau9 = '-';
  rtrwprovinsi9 = '-';
  rtrwkota9 = '-';

  rtrwn10 = '-';
  rtrksn10 = '-';
  rtrwpulau10 = '-';
  rtrwprovinsi10 = '-';
  rtrwkota10 = '-';

  selectedJenisProgram;
  selectedKecamatan;


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
      this.selectedJenisProgram = this.initForm.value['jpControl'];
      this.selectedKecamatan = this.initForm.value['kecamatanControl'];

      if (this.selectedJenisProgram === 'Jalan' && this.selectedKecamatan === 'Abepura') {
        this.rtrwn = '-';
        this.rtrksn = 'Ada';
        this.rtrwpulau = 'Ada';
        this.rtrwprovinsi = 'Ada';
        this.rtrwkota = 'Ada';

      } else if (this.selectedJenisProgram === 'Jalan' && this.selectedKecamatan === 'Heram') {
        this.rtrwn = '-';
        this.rtrksn = '-';
        this.rtrwpulau = 'Ada';
        this.rtrwprovinsi = 'Ada';
        this.rtrwkota = 'Ada';

      } else if (this.selectedJenisProgram === 'Jalan' && this.selectedKecamatan === 'Jayapura Selatan') {
        this.rtrwn = '-';
        this.rtrksn = 'Ada';
        this.rtrwpulau = 'Ada';
        this.rtrwprovinsi = 'Ada';
        this.rtrwkota = 'Ada';

      } else if (this.selectedJenisProgram === 'Jalan' && this.selectedKecamatan === 'Jayapura Utara') {
        this.rtrwn = '-';
        this.rtrksn = 'Ada';
        this.rtrwpulau = 'Ada';
        this.rtrwprovinsi = 'Ada';
        this.rtrwkota = '-';

      } else if (this.selectedJenisProgram === 'Jalan' && this.selectedKecamatan === 'Muara Tami') {
        this.rtrwn = '-';
        this.rtrksn = 'Ada';
        this.rtrwpulau = 'Ada';
        this.rtrwprovinsi = 'Ada';
        this.rtrwkota = 'Ada';
      } else {
        this.rtrwn = '-';
        this.rtrksn = '-';
        this.rtrwpulau = '-';
        this.rtrwprovinsi = '-';
        this.rtrwkota = '-';
      }
      console.log(this.selectedJenisProgram);
      console.log(this.selectedKecamatan);

    }

}
