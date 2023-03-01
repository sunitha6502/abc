import { Component,OnInit,Input,Inject } from '@angular/core'; 
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ListItem } from 'carbon-components-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.component.css']
})
export class AppComponent implements OnInit{  
 
 
  title = 'app';  
  signUp:FormGroup; 
  items: ListItem[]=[{ content: "one1", id: 0, selected:false },
  { content: "two", id: 1, selected:false},
  { content: "three", id: 2, selected:false },
  { content: "four", id: 3, selected:false }];
  
  disabled1=true;  
  disabled=false;  
  placeholder = "mm/dd/yyyy";
  value=["10/19/2023"];
  label="Date picker"; 
  noTrailingSlash=true; 
  hideLabel=false; 
  model=true; 
  single='single'; 
  range=true; 
  min=0; 
  max=100; 
  step=1;
ngOnInit() 
{ 
this.signUp=new FormGroup({  
  'userData':new FormGroup({ 
    'username':new FormControl(null,[Validators.required,Validators.email]),  
    'password':new FormControl(null,Validators.required)
  })

});
}
  onSubmit() 
  { 
    console.log("Form success");
  } 
  selected() 
  { 

  } 
  onChange() 
  { 

  } 
  onIndeterminateChange() 
  { 

  } 
  toggleModel() 
  { 
    this.model=!this.model; 

  } 
  valueChange() 
  { 

  }
}

