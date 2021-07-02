import { Component, OnInit } from '@angular/core';
import { Retire } from './retire';

@Component({
  selector: 'app-retirement-income',
  templateUrl: './retirement-income.component.html',
  styleUrls: ['./retirement-income.component.scss']
})
export class RetirementIncomeComponent implements OnInit {

  constructor() { }
  retirementInfo : any;
  balance : number = 0;
  income: number = 0;
  ngOnInit(): void {
  }

  processKeyup(startAge?: String, retireAge? : String, monthlyContributions? : String, expReturn? : String, retirementYield? : String){
    if(startAge != '' && retireAge != '' && monthlyContributions != '' && expReturn != ''){
      console.log('has-value');
      var duration = Number(retireAge)-Number(startAge);      
      this.balance = this.calculateValues(Number(monthlyContributions) *12, Number(duration),  Number(expReturn));
      this.income = this.getIncome(this.balance, Number(retirementYield));
    } else {
      console.log('missing values')
    }
  }

  onKey(event : any){
    if(Number((<HTMLInputElement>document.getElementById('startAge')).value) != null && Number((<HTMLInputElement>document.getElementById('retireAge')).value) != null && Number((<HTMLInputElement>document.getElementById('monthlyContributions')).value) != null
     && Number((<HTMLInputElement>document.getElementById('expReturns')).value) != null){
      var duration = Number((<HTMLInputElement>document.getElementById('startAge')).value) - Number((<HTMLInputElement>document.getElementById('retireAge')).value);
      this.balance = this.calculateValues(Number((<HTMLInputElement>document.getElementById('monthlyContributions')).value) *12, Number(duration),  Number((<HTMLInputElement>document.getElementById('expReturn')).value));
      this.income = this.getIncome(this.balance, 4); //estimated 4% yield 
    } else {
      console.log('missing values')
    }
  } 
  onClick(event : any){
    if(Number((<HTMLInputElement>document.getElementById('startAge')).value) != null && Number((<HTMLInputElement>document.getElementById('retireAge')).value) != null && Number((<HTMLInputElement>document.getElementById('monthlyContributions')).value) != null
     && Number((<HTMLInputElement>document.getElementById('expReturns')).value) != null){
      var duration = Number((<HTMLInputElement>document.getElementById('startAge')).value) - Number((<HTMLInputElement>document.getElementById('retireAge')).value);
      this.balance = this.calculateValues(Number((<HTMLInputElement>document.getElementById('monthlyContributions')).value) *12, Number(duration),  Number((<HTMLInputElement>document.getElementById('expReturn')).value));
      this.income = this.getIncome(this.balance, 4); //estimated 4% yield 
    } else {
      console.log('missing values')
    }
  }
 

  calculateValues(contributions : number, duration : number ,rate : number) : number{
      this.retirementInfo = new Retire(contributions, duration, rate);
      var accumulated = 0;
      if(duration > 1){
        accumulated = this.calculateValues(contributions, duration-1, rate);
      }

      accumulated += contributions;
      accumulated = accumulated * (Math.pow(1 + rate / (100 * 1), 1));
      console.log(accumulated);
      return Number(accumulated);
  }

  getIncome(balance : number, yieldPct : number){
    var income = balance * (yieldPct/100);
    return Number(income);
  }
}
