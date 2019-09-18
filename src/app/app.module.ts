import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatFormFieldModule} from "@angular/material";

//components
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { PopupComponent } from './list/item/popup/popup.component';
import { IconListComponent } from './components/icon-list/icon-list.component';


//Routes
import { AppRoutingModule } from './app-routing.module';

//Material
import 'hammerjs';
import { MaterialComponent } from './material/material.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Drag&Drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from "@angular/cdk/overlay";
import { LinesComponent } from './components/lines/lines.component';






@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    ListComponent,
    ItemComponent,
    PopupComponent,
    IconListComponent,
    LinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
