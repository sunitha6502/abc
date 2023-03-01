import { Component } from '@angular/core';


@Component({
  selector: 'app-button-types',
  templateUrl: './button.types.component.html',
  styleUrls: ['./button.types.component.scss']
})
export class ButtonTypesComponent {

  isExpressive=false; 

  onClick() 
  { 
  console.log("sunitha");
  }

}

