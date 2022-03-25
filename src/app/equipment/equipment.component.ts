import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }
  equipment: string[] =["Habitat dome",
  "Drones",
  "Food containers",
  "Oxygen tanks"];
  ngOnInit() {
  }
  addEqu(newEqu: string) {
    this.equipment.push(newEqu);
  }
}
