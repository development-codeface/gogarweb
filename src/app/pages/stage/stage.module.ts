import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { StageComponent } from './stage.component';

import { ngfModule, ngf } from 'angular-file';
export const routes = [
  { path: '', component: StageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,    
    
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ngfModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule
  ],
  declarations: [
    StageComponent
  ]
})
export class StageModule { }
