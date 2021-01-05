import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Side1Component } from './side1/side1.component';
import { Side2Component } from './side2/side2.component';
import { Side3Component } from './side3/side3.component';
import { FooterComponent } from './footer/footer.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwobaybindingComponent } from './twobaybinding/twobaybinding.component';
import { TemplaterefrshvarialeComponent } from './templaterefrshvariale/templaterefrshvariale.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { EventComponent } from './event/event.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Side1Component,
    Side2Component,
    Side3Component,
    FooterComponent,
    InterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    AttributebindingComponent,
    EventbindingComponent,
    TwobaybindingComponent,
    TemplaterefrshvarialeComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    EventComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
