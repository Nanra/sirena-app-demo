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

  selectedJenisProgram2;
  selectedKecamatan2;

  selectedJenisProgram3;
  selectedKecamatan3;

  selectedJenisProgram4;
  selectedKecamatan4;

  selectedJenisProgram5;
  selectedKecamatan5;

  selectedJenisProgram6;
  selectedKecamatan6;

  selectedJenisProgram7;
  selectedKecamatan7;

  selectedJenisProgram8;
  selectedKecamatan8;

  selectedJenisProgram9;
  selectedKecamatan9;

  selectedJenisProgram10;
  selectedKecamatan10;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.initForm = this.fb.group({
      jpControl: '',
      provinsiControl: '',
      kabKotaControl: '',
      kecamatanControl: '',
      jpControl2: '',
      jpControl3: '',
      jpControl4: '',
      jpControl5: '',
      jpControl6: '',
      jpControl7: '',
      jpControl8: '',
      jpControl9: '',
      jpControl10: '',
      kecamatanControl2: '',
      kecamatanControl3: '',
      kecamatanControl4: '',
      kecamatanControl5: '',
      kecamatanControl6: '',
      kecamatanControl7: '',
      kecamatanControl8: '',
      kecamatanControl9: '',
      kecamatanControl10: '',
    });



  }

  onSelected() {
    this.selectedJenisProgram = this.initForm.value['jpControl'];
    this.selectedKecamatan = this.initForm.value['kecamatanControl'];

    this.selectedJenisProgram6 = this.initForm.value['jpControl6'];
    this.selectedKecamatan6 = this.initForm.value['kecamatanControl6'];

    this.selectedJenisProgram7 = this.initForm.value['jpControl7'];
    this.selectedKecamatan7 = this.initForm.value['kecamatanControl7'];

    this.selectedJenisProgram8 = this.initForm.value['jpControl8'];
    this.selectedKecamatan8 = this.initForm.value['kecamatanControl8'];

    this.selectedJenisProgram9 = this.initForm.value['jpControl9'];
    this.selectedKecamatan9 = this.initForm.value['kecamatanControl9'];

    this.selectedJenisProgram10 = this.initForm.value['jpControl10'];
    this.selectedKecamatan10 = this.initForm.value['kecamatanControl10'];

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
    } else if (this.selectedJenisProgram === 'Terminal' && this.selectedKecamatan === 'Abepura') {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';

    } else if (this.selectedJenisProgram === 'Terminal' && this.selectedKecamatan === 'Heram') {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = 'Ada';
      this.rtrwkota = 'Ada';

    } else if (this.selectedJenisProgram === 'Terminal' && this.selectedKecamatan === 'Jayapura Selatan') {
      this.rtrwn = 'Ada';
      this.rtrksn = 'Ada';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = 'Ada';
      this.rtrwkota = 'Ada';

    } else if (this.selectedJenisProgram === 'Terminal' && this.selectedKecamatan === 'Jayapura Utara') {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';

    } else if (this.selectedJenisProgram === 'Terminal' && this.selectedKecamatan === 'Muara Tami') {
      this.rtrwn = 'Ada';
      this.rtrksn = 'Ada';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = 'Ada';
    } else if (this.selectedJenisProgram === 'Pelabuhan' && this.selectedKecamatan === 'Abepura') {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';

    } else if (this.selectedJenisProgram === 'Pelabuhan' && this.selectedKecamatan === 'Heram') {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';

    } else if (this.selectedJenisProgram === 'Pelabuhan' && this.selectedKecamatan === 'Jayapura Selatan') {
      this.rtrwn = '-';
      this.rtrksn = 'Ada';
      this.rtrwpulau = 'Ada';
      this.rtrwprovinsi = 'Ada';
      this.rtrwkota = 'Ada';

    } else if (this.selectedJenisProgram === 'Pelabuhan' && this.selectedKecamatan === 'Jayapura Utara') {
      this.rtrwn = '-';
      this.rtrksn = 'Ada';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = 'Ada';

    } else if (this.selectedJenisProgram === 'Pelabuhan' && this.selectedKecamatan === 'Muara Tami') {
      this.rtrwn = '-';
      this.rtrksn = 'Ada';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';
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

  onSelected2() {

    this.selectedJenisProgram2 = this.initForm.value['jpControl2'];
    this.selectedKecamatan2 = this.initForm.value['kecamatanControl2'];

    if (this.selectedJenisProgram2 === 'Jalan' && this.selectedKecamatan2 === 'Abepura') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Jalan' && this.selectedKecamatan2 === 'Heram') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Jalan' && this.selectedKecamatan2 === 'Jayapura Selatan') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Jalan' && this.selectedKecamatan2 === 'Jayapura Utara') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = '-';

    } else if (this.selectedJenisProgram2 === 'Jalan' && this.selectedKecamatan2 === 'Muara Tami') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota = 'Ada';
    } else if (this.selectedJenisProgram2 === 'Terminal' && this.selectedKecamatan2 === 'Abepura') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = '-';

    } else if (this.selectedJenisProgram2 === 'Terminal' && this.selectedKecamatan2 === 'Heram') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Terminal' && this.selectedKecamatan2 === 'Jayapura Selatan') {
      this.rtrwn2 = 'Ada';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Terminal' && this.selectedKecamatan2 === 'Jayapura Utara') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = '-';

    } else if (this.selectedJenisProgram2 === 'Terminal' && this.selectedKecamatan2 === 'Muara Tami') {
      this.rtrwn2 = 'Ada';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = 'Ada';
    } else if (this.selectedJenisProgram2 === 'Pelabuhan' && this.selectedKecamatan2 === 'Abepura') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = '-';

    } else if (this.selectedJenisProgram2 === 'Pelabuhan' && this.selectedKecamatan2 === 'Heram') {
      this.rtrwn2 = '-';
      this.rtrksn2 = '-';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = '-';

    } else if (this.selectedJenisProgram2 === 'Pelabuhan' && this.selectedKecamatan2 === 'Jayapura Selatan') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = 'Ada';
      this.rtrwprovinsi2 = 'Ada';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Pelabuhan' && this.selectedKecamatan2 === 'Jayapura Utara') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota2 = 'Ada';

    } else if (this.selectedJenisProgram2 === 'Pelabuhan' && this.selectedKecamatan2 === 'Muara Tami') {
      this.rtrwn2 = '-';
      this.rtrksn2 = 'Ada';
      this.rtrwpulau2 = '-';
      this.rtrwprovinsi2 = '-';
      this.rtrwkota = '-';
    } else {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';
    }

  }


  onSelected3() {

    this.selectedJenisProgram3 = this.initForm.value['jpControl3'];
    this.selectedKecamatan3 = this.initForm.value['kecamatanControl3'];

    if (this.selectedJenisProgram3 === 'Jalan' && this.selectedKecamatan3 === 'Abepura') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Jalan' && this.selectedKecamatan3 === 'Heram') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Jalan' && this.selectedKecamatan3 === 'Jayapura Selatan') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Jalan' && this.selectedKecamatan3 === 'Jayapura Utara') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = '-';

    } else if (this.selectedJenisProgram3 === 'Jalan' && this.selectedKecamatan3 === 'Muara Tami') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota = 'Ada';
    } else if (this.selectedJenisProgram3 === 'Terminal' && this.selectedKecamatan3 === 'Abepura') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = '-';

    } else if (this.selectedJenisProgram3 === 'Terminal' && this.selectedKecamatan3 === 'Heram') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Terminal' && this.selectedKecamatan3 === 'Jayapura Selatan') {
      this.rtrwn3 = 'Ada';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Terminal' && this.selectedKecamatan3 === 'Jayapura Utara') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = '-';

    } else if (this.selectedJenisProgram3 === 'Terminal' && this.selectedKecamatan3 === 'Muara Tami') {
      this.rtrwn3 = 'Ada';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = 'Ada';
    } else if (this.selectedJenisProgram3 === 'Pelabuhan' && this.selectedKecamatan3 === 'Abepura') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = '-';

    } else if (this.selectedJenisProgram3 === 'Pelabuhan' && this.selectedKecamatan3 === 'Heram') {
      this.rtrwn3 = '-';
      this.rtrksn3 = '-';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = '-';

    } else if (this.selectedJenisProgram3 === 'Pelabuhan' && this.selectedKecamatan3 === 'Jayapura Selatan') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = 'Ada';
      this.rtrwprovinsi3 = 'Ada';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Pelabuhan' && this.selectedKecamatan3 === 'Jayapura Utara') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = 'Ada';

    } else if (this.selectedJenisProgram3 === 'Pelabuhan' && this.selectedKecamatan3 === 'Muara Tami') {
      this.rtrwn3 = '-';
      this.rtrksn3 = 'Ada';
      this.rtrwpulau3 = '-';
      this.rtrwprovinsi3 = '-';
      this.rtrwkota3 = '-';
    } else {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';
    }

  }


  onSelected4() {

    this.selectedJenisProgram4 = this.initForm.value['jpControl4'];
    this.selectedKecamatan4 = this.initForm.value['kecamatanControl4'];


    if (this.selectedJenisProgram4 === 'Jalan' && this.selectedKecamatan4 === 'Abepura') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Jalan' && this.selectedKecamatan4 === 'Heram') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Jalan' && this.selectedKecamatan4 === 'Jayapura Selatan') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Jalan' && this.selectedKecamatan4 === 'Jayapura Utara') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = '-';

    } else if (this.selectedJenisProgram4 === 'Jalan' && this.selectedKecamatan4 === 'Muara Tami') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Terminal' && this.selectedKecamatan4 === 'Abepura') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = '-';

    } else if (this.selectedJenisProgram4 === 'Terminal' && this.selectedKecamatan4 === 'Heram') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Terminal' && this.selectedKecamatan4 === 'Jayapura Selatan') {
      this.rtrwn4 = 'Ada';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Terminal' && this.selectedKecamatan4 === 'Jayapura Utara') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = '-';

    } else if (this.selectedJenisProgram4 === 'Terminal' && this.selectedKecamatan4 === 'Muara Tami') {
      this.rtrwn4 = 'Ada';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = 'Ada';
    } else if (this.selectedJenisProgram4 === 'Pelabuhan' && this.selectedKecamatan4 === 'Abepura') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = '-';

    } else if (this.selectedJenisProgram4 === 'Pelabuhan' && this.selectedKecamatan4 === 'Heram') {
      this.rtrwn4 = '-';
      this.rtrksn4 = '-';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = '-';

    } else if (this.selectedJenisProgram4 === 'Pelabuhan' && this.selectedKecamatan4 === 'Jayapura Selatan') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = 'Ada';
      this.rtrwprovinsi4 = 'Ada';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Pelabuhan' && this.selectedKecamatan4 === 'Jayapura Utara') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = 'Ada';

    } else if (this.selectedJenisProgram4 === 'Pelabuhan' && this.selectedKecamatan4 === 'Muara Tami') {
      this.rtrwn4 = '-';
      this.rtrksn4 = 'Ada';
      this.rtrwpulau4 = '-';
      this.rtrwprovinsi4 = '-';
      this.rtrwkota4 = '-';
    } else {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';
    }

  }

  onSelected5() {

    this.selectedJenisProgram5 = this.initForm.value['jpControl5'];
    this.selectedKecamatan5 = this.initForm.value['kecamatanControl5'];


    if (this.selectedJenisProgram5 === 'Jalan' && this.selectedKecamatan5 === 'Abepura') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Jalan' && this.selectedKecamatan5 === 'Heram') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Jalan' && this.selectedKecamatan5 === 'Jayapura Selatan') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Jalan' && this.selectedKecamatan5 === 'Jayapura Utara') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = '-';

    } else if (this.selectedJenisProgram5 === 'Jalan' && this.selectedKecamatan5 === 'Muara Tami') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';
    } else if (this.selectedJenisProgram5 === 'Terminal' && this.selectedKecamatan5 === 'Abepura') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = '-';

    } else if (this.selectedJenisProgram5 === 'Terminal' && this.selectedKecamatan5 === 'Heram') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Terminal' && this.selectedKecamatan5 === 'Jayapura Selatan') {
      this.rtrwn5 = 'Ada';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Terminal' && this.selectedKecamatan5 === 'Jayapura Utara') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = '-';

    } else if (this.selectedJenisProgram5 === 'Terminal' && this.selectedKecamatan5 === 'Muara Tami') {
      this.rtrwn5 = 'Ada';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = 'Ada';
    } else if (this.selectedJenisProgram5 === 'Pelabuhan' && this.selectedKecamatan5 === 'Abepura') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = '-';

    } else if (this.selectedJenisProgram5 === 'Pelabuhan' && this.selectedKecamatan5 === 'Heram') {
      this.rtrwn5 = '-';
      this.rtrksn5 = '-';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = '-';

    } else if (this.selectedJenisProgram5 === 'Pelabuhan' && this.selectedKecamatan5 === 'Jayapura Selatan') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = 'Ada';
      this.rtrwprovinsi5 = 'Ada';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Pelabuhan' && this.selectedKecamatan5 === 'Jayapura Utara') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = 'Ada';

    } else if (this.selectedJenisProgram5 === 'Pelabuhan' && this.selectedKecamatan5 === 'Muara Tami') {
      this.rtrwn5 = '-';
      this.rtrksn5 = 'Ada';
      this.rtrwpulau5 = '-';
      this.rtrwprovinsi5 = '-';
      this.rtrwkota5 = '-';
    } else {
      this.rtrwn = '-';
      this.rtrksn = '-';
      this.rtrwpulau = '-';
      this.rtrwprovinsi = '-';
      this.rtrwkota = '-';
    }
  }

  onSelected6() {

  }


  onSelected7() {

  }

  onSelected8() {

  }

  onSelected9() {

  }

  onSelected10() {

  }
}
