import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponentComponent } from './cli-component/cli-component.component';
import { ManualComponentComponent } from './manual-component/manual-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CliComponentComponent,
    ManualComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
