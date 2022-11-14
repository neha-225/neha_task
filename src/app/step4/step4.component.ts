import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  @Input() searchText; // decorate the property with @Input()


  heroes = [
    { id: 5, name: 'ASD', number: 521 },
    { id: 6, name: 'SAchin' , number: 529},
   
   
  ];



  heroess = [
    { id: 5, name: 'ASD', number: 521 },
    { id: 6, name: 'SAchin' , number: 529},
   
   
  ];


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // if(this.searchText!=undefined && this.searchText!=""){
      this.heroes = this.heroess.filter((val)=>val.name.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) )
    console.log('this.heroes',this.heroes)
    // }
  }

  ngOnInit() {

    console.log('se',this.searchText);
  }

  Delete(index){
    const removed = this.heroes.splice(index, 1); // returns array of removed items
  }


}
