import { NgModule ,AfterViewInit,Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTypesComponent } from './button.types/button.types.component'; 
import { ButtonModule, DropdownList, DropdownModule, InputModule, PlaceholderModule } from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AccordionModule } from 'carbon-components-angular';
import { UIShellModule,IconModule } from 'carbon-components-angular'; 
import { IconService } from 'carbon-components-angular'; 
import { Accessibility16 } from "@carbon/icons";
import * as Icons from "@carbon/icons";  
import { CodeSnippetModule } from 'carbon-components-angular';
import { GridModule } from 'carbon-components-angular'; 
import { ModalModule } from 'carbon-components-angular';  
import { BreadcrumbModule } from 'carbon-components-angular'; 
import { DialogModule } from 'carbon-components-angular';
import { ModalButton,AlertModalType,ModalButtonType } from 'carbon-components-angular';
import { BaseModal } from 'carbon-components-angular'; 
import { Dropdown } from 'carbon-components-angular'; 
import { CheckboxModule } from 'carbon-components-angular';
import { Observable, Subject } from "rxjs"; 
import { ComboBox } from 'carbon-components-angular'; 
import { DatePicker } from 'carbon-components-angular'; 
import { DatePickerModule } from 'carbon-components-angular';
import { TabsModule } from 'carbon-components-angular'; 
import { FileUploaderModule } from 'carbon-components-angular';
import { ListModule } from 'carbon-components-angular';
import { LoadingModule } from 'carbon-components-angular'; 
import { NotificationModule } from 'carbon-components-angular';
import { ModalService } from 'carbon-components-angular';  
import { NumberModule } from 'carbon-components-angular';
import { TimePickerSelectModule } from 'carbon-components-angular'; 
import { ExperimentalModule } from 'carbon-components-angular';
@NgModule({
  declarations: [
    AppComponent,
    ButtonTypesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ButtonModule, 
    FormsModule, InputModule,
    ReactiveFormsModule, 
    IconModule, 
    GridModule,ModalModule, 
    PlaceholderModule, 
    ModalModule,  
    BreadcrumbModule, 
    DialogModule,
    PlaceholderModule, 
    DropdownModule, 
    AccordionModule, 
    CheckboxModule,CodeSnippetModule, 
    DatePickerModule,TabsModule,
    FileUploaderModule,ListModule,LoadingModule, 
    NotificationModule,NumberModule,TimePickerSelectModule, 
    ExperimentalModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
