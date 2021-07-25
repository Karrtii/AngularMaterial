import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

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

  options: string[] = ['Angular', 'Android', 'Blazor'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Android'},
    {name: 'Blazor'}
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): string[]
  {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

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
}
