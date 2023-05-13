import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  gridData: any[] = [
    {
      id: '848e6002-8a92-447d-951b-1ffd5e695578',
      full_name: 'Sig Jeannel',
      job_title: 'Human Resources Assistant III',
      is_online: true,
      target: 100,
      budget: 47601,
    },
    {
      id: '19d18d40-0e64-4837-9420-92130a0ed253',
      full_name: 'Shelden Greyes',
      country: 'GB',
      is_online: true,
      target: 40,
      budget: 12253,
    },
    {
      id: 'bebdc6eb-9179-484a-917d-2e16a23bfdfe',
      full_name: 'Megen Cody',
      job_title: 'Operator',
      is_online: false,
      target: 66,
      budget: 96183,
    },
  ];

  gridView!: any[];

  mySelection: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.gridView = this.gridData;
  }
}
