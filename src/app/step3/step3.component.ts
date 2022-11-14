import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit,OnChanges {
  @Input() searchText; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();




  heroes = [
    { id: 11, name: 'Mr. Nice', number: 21 },
    { id: 12, name: 'Narco' , number: 25},
   
  ];
  heroess = [
    { id: 11, name: 'Mr. Nice', number: 21 },
    { id: 12, name: 'Narco' , number: 25},
   
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
