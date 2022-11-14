import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit,OnChanges {
  @Input() searchText; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();

  
  heroes = [
    { id: 3, name: 'Aditi', number: 8},
    { id: 4, name: 'Harsh' , number: 9},
   
  ];
  heroess = [
    { id: 3, name: 'Aditi', number: 8 },
    { id: 4, name: 'Harsh' , number: 9},
   
  ];
 
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // if(this.searchText!=undefined && this.searchText!=""){
      this.heroes = this.heroess.filter((val)=>val.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) )
    console.log('this.heroes',this.heroes)
    // }
  }

  ngOnInit() {
  }


  Shift(item){
    // console.log('item', item);


      this.newItemEvent.emit(item);
    
    // if

  }

  Delete(index){
    const removed = this.heroes.splice(index, 1); // returns array of removed items
  }


}
