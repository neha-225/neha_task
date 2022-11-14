// import { Component } from '@angular/core';
// import {MatCardModule} from '@angular/material/card';



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'task';
//   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
//   from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
//   originally bred for hunting.`;
// }
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  
  heroes = [
   
  ];
  ngOnInit(){
}
  
}

