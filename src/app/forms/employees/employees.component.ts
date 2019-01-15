import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';
import { EmployeesTableDataSource,EmployeesTableItem } from './employees-table-datasource';

@Component({
  selector: 'employees-table',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<EmployeesTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nic', 'firstname','lastname','dateofbirth','phoneno','gender','address','levelid','actions'];

  constructor() {
    // Create 100 users
    const EXAMPLE_DATA: EmployeesTableItem[] = [
      {nic:'950552212v', firstname: 'yasiru',lastname:'bhagya',dateofbirth:new Date(),phoneno:'+94710579840',gender:'Male',address:'simple address',levelid:2},
      {nic:'961881072v', firstname: 'prasad',lastname:'madushanka',dateofbirth:new Date(),phoneno:'+947105795540',gender:'Male',address:'simple address2',levelid:2},
    
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}