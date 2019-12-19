import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引入material和hammer
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import 'hammerjs';

// 引入flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatButtonModule, // 为子组件引入 Material Button
    MatSelectModule, MatIconModule,
    FlexLayoutModule, // 为子组件引入 FlexLayout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
