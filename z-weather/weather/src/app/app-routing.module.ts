import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { ZipCodeComponent } from './components/zip-code/zip-code.component';
import { RetirementIncomeComponent } from './components/retirement-income/retirement-income.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'zipCode', component: ZipCodeComponent}, 
  {path: 'retirementIncome', component: RetirementIncomeComponent}, 
  {path: 'calculator', component: CalculatorComponent}, 
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
