import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';
declare const $: any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('step1', { static: true }) step1: Step1Component;
  @ViewChild('step2', { static: true }) step2: Step2Component;
  @ViewChild('step3', { static: true }) step3: Step3Component;
  @ViewChild('step4', { static: true }) step4: Step4Component;
  itemsssss: any =[];
  step2Shift: any;
  step3Shift: number;

  addItem(newItem : any) {
    this.step2Shift =0;
    this.step3Shift = 0;

    console.log('this.item', newItem);
    this.itemsssss.push(newItem);


    this.step1.heroes =  this.step1.heroes.filter(object => {

      if( object.number == newItem.number){
        this.step2Shift = 1;

        this.step2.heroes.push(newItem)

        this.step2.heroes.sort(function (a, b) {
          return a.number - b.number
          
        })






      }else{
        // this.step2Shift = 0;

      }
      return object.number !== newItem.number;



      //  code for step2

      
    });

    if(this.step2Shift == 0){

    
          this.step2.heroes =  this.step2.heroes.filter(object => {



            if( object.number == newItem.number){
              console.log('if');
              this.step3Shift = 1;

              if(this.step3Shift == 1){
                console.log('iffff');

                this.step3.heroes.push(newItem);
                this.step3.heroes.sort(function (a, b) {
                  return a.number - b.number;
                })
                
              }else{
                // return false;

              }

             

            }else{
              console.log('else')
              // this.step3Shift = 0;
              // return false;

            }
          
            return object.number !== newItem.number;
          });
        }


        if(this.step3Shift == 0){

    
          this.step3.heroes =  this.step3.heroes.filter(object => {


            if( object.number == newItem.number){
              this.step3Shift = 1;

              this.step4.heroes.push(newItem)
              this.step4.heroes.sort(function (a, b) {
                return a.number - b.number
              })

            }else{
              this.step3Shift = 0;

            }
          
            return object.number !== newItem.number;
          });
        }
        

        // this.step1.heroess = this.step1.heroes;
        // this.step2.heroess = this.step2.heroes;
        // this.step3.heroess = this.step3.heroes;
        // this.step4.heroess = this.step4.heroes;
    

    // console.log(newArr);
    

    // // var matchingObj = this.header.heroes.find(o => o.number === newItem.number);
    // const index = this.header.heroes.map(i => i.number).indexOf(this.store);
    // this.header.heroes.splice(index,1);


  }

  title = 'Angular Search Using ng2-search-filter';
  searchText;
  name;
  number
  store: number;
  store2: number;

  constructor() { }

  ngOnInit() {
  }

  addTask() {

    var merged = [...this.step1.heroes, ...this.step2.heroes, ...this.step3.heroes, ...this.step4.heroes];
    console.log('merged', merged);

    const result = merged
      .map(d => d.number)
      .sort((a, b) => Math.abs(a - this.number) - Math.abs(b - this.number));
    this.store = result[0]

    console.log('result', result[0])

    $('#removeValue').val('');
    $('#removeValueNumber').val('');
    $('#exampleModal').modal('hide');

    const index = this.step1.heroes.map(i => i.number).indexOf(this.store);

    console.log(index);
    if (index != -1) {
      this.step1.heroes.push({ id: 100, name: this.name, number:this.number})
              this.step1.heroess = this.step1.heroes;

      this.step1.heroes.sort(function (a, b) {
        return a.number - b.number
      })


      

      console.log('Resorted', this.step1.heroes)




    }
    const index1 = this.step2.heroes.map(i => i.number).indexOf(this.store);

    console.log(index1);
    if (index1 != -1) {
      this.step2.heroes.push({ id: 100, name: this.name, number:this.number})
      this.step2.heroess = this.step2.heroes;

      this.step2.heroes.sort(function (a, b) {
        return a.number - b.number
      })


      

      console.log('Resorted', this.step2.heroes)




    }

    const index3 = this.step3.heroes.map(i => i.number).indexOf(this.store);
    console.log(index3);
    if (index3 != -1) {
      this.step3.heroes.push({ id: 100, name: this.name, number:this.number})
      this.step3.heroess = this.step3.heroes;

      this.step3.heroes.sort(function (a, b) {
        return a.number - b.number
      })


      

      console.log('Resorted3', this.step3.heroes)




    }

    const index4 = this.step4.heroes.map(i => i.number).indexOf(this.store);

    console.log(index4);
    if (index4 != -1) {
      this.step4.heroes.push({ id: 100, name: this.name, number:this.number})
      this.step4.heroess = this.step4.heroes;

      this.step4.heroes.sort(function (a, b) {
        return a.number - b.number
      })


      

      console.log('Resorted4', this.step4.heroes)




    }



  }
}
