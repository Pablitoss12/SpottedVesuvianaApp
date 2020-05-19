import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HttpClient } from '@angular/common/http';
import { ListComponentComponent } from '../list-component/list-component.component';
import { Utility } from '../services/utility';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ListComponentComponent]
})

export class Tab1PageModule {


}
