import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from '../app.component';
import { ParentComponent } from '../parent/parent.component';



@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit,AfterViewInit {

  @Input() searchText; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();




  name;
  heroes = [
    { id: 1, name: 'Neha', number: 1 },
    { id: 2, name: 'Sharma' , number: 3},
   
  ];
  heroess = [
    { id: 1, name: 'Neha', number: 1 },
    { id: 2, name: 'Sharma' , number: 3},
   
  ];

  constructor() { }
  

  ngOnChanges(changes: SimpleChanges): void {
      this.heroes = this.heroess.filter((val)=>val.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) )
    console.log('this.heroes',this.heroes)
    // }
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {

  }

  Shift(item){
    // console.log('item', item);


      this.newItemEvent.emit(item);
    
    // if

  }
 

  Delete(index){
    // console.log('this.parent', this.parent);
    // this.parent.addTask();
    const removed = this.heroes.splice(index, 1); // returns array of removed items
  }



}
