import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item : object) : boolean {
    this.cargoHold.push(item);
    this.cargoMass += item["mass"];
    if(this.maximumAllowedMass - this.cargoMass <= 200)
      return true;
    else
      return false;

 }
 isActiveToggle(item : object) : boolean {
   if(this.cargoHold.length < this.maxItems && item["mass"] + this.cargoMass <= this.maximumAllowedMass)
    return true;
  else
    return false;
  
 }
 clearHold(){
   //clear cargo hold
    this.cargoHold = [];
   //reset cargo mass
   this.cargoMass = 0;
 }

}
