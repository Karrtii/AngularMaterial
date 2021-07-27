import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

//data table begins
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
//data table ends

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MaterialDemo';

  notifications = 2;

  showSpinner = false;

  opened = false;

  selectedValue: string = "";

  //autocomplete begins
  options: string[] = ['Angular', 'Android', 'Blazor'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Android'},
    {name: 'Blazor'}
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>


  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {

    //for virtual scrolling
    for(let i=0; i<1000; i++)
    {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));

    //for data table sorting
    this.dataSource.sort = this.sort;

    //for data table pagination
    this.dataSource.paginator = this.paginator;
  }

  private _filter(value: string): string[]
  {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
//autocomplete ends

  loadData()
  {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  log(state: any)
  {
    console.log(state);
  }

  logChange(index: any)
  {
    console.log(index);
  }

  displayFn(subject: any)
  {
    return subject ? subject.name : undefined;
  }

//datepicker begins
  minDate = new Date();
  maxDate = new Date(2022, 3, 10); //month starts from 0, so this is actually April

  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  };
  //datepicker ends


  //snackbar begins, need to inject it

  openSnackBar(message, action)
  {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }

  openCustomSnackBar()
  {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }
  //snackbar ends


  //dialog begins, need to inject it, need to create a component as well
  openDialog()
  {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Kratos'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
  //dialog ends


  //data table begins, also in OnInit method
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //for filtering
  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //for sorting
  @ViewChild(MatSort) sort: MatSort;

  //for pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //data table ends


  //virtual scrolling begins, also in the constructor
  numbers = [];


  //virtual scrolling ends
}

//for snackbar
@Component({
  selector: 'custom-snackbar',
  template: `<span style="color: orange">Custom Snackbar</span>`
})
export class CustomSnackBarComponent {}
