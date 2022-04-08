import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectorComponentComponent } from './selector-component/selector-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SelectorComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
