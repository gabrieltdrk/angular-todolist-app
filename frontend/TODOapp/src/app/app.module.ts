import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroClipboard,
  heroPencilSquare,
  heroTrash,
  heroNoSymbol,
  heroCheck,
} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      heroClipboard,
      heroPencilSquare,
      heroTrash,
      heroNoSymbol,
      heroCheck,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
