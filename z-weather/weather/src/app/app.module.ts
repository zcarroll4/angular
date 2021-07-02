import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ZipCodeComponent } from './components/zip-code/zip-code.component';
import { RetirementIncomeComponent } from './components/retirement-income/retirement-income.component'
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { StocksComponent } from './components/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent, HomeComponent, ZipCodeComponent, RetirementIncomeComponent, CalculatorComponent, StocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
