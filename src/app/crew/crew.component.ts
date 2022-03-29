import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  //for setmemberhovered
  hoveredCandidate: object; //undefined by default

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

  addCrewMember(candidate: object){
    //check if candidate is part of the crew
    for(let i=0;i<this.crew.length;i++){
      if (this.crew[i]["name"] === candidate["name"]){

        //candidate exists in the crew array - doing this
        //even though kyle doesnt reccomend manipulating arrays inside of for loop unless returning right afterwards which is the case here
        this.crew.splice(i,1);
        return;
      }
    }
    //if the crew size less than 3
    if (this.crew.length >= 3){
      return;
    }


    //then their data should be added to crew array
    this.crew.push(candidate);
  }


  isCandidateSelected(candidate: object): boolean{
    for(let i=0;i<this.crew.length;i++){
      if (this.crew[i]["name"] === candidate["name"]){
        return true;
      }

    }
    return false;
  }

  setMemberHovered(candidate: object){
    this.hoveredCandidate = candidate;
  }



}
