import {LightningElement, track} from 'lwc';

export default class BmiCalcurator extends LightningElement {
  label = {
    height: '身長(cm)',
    weight: '体重(kg)',
    calculate: '計算',
    bmi: 'BMI'
  };

  @track height = 160; // cm
  @track weight = 60; // kg
  @track bmi = '';

  heightChange(event) {
    this.height = event.target.value;
  }
  weightChange(event) {
    this.weight = event.target.value;
  }
  calculateBmi() {
    const heightMeter = this.height / 100;
    this.bmi = this.weight / (heightMeter * heightMeter);
  }
}
