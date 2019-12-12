import {LightningElement, track} from 'lwc';
import findOpportunities from '@salesforce/apex/OpportunityController.findOpportunities';

export default class ApexImperativeMethodWithParams extends LightningElement {
  label = {
    title: 'Opportunity Search',
    search: '検索',
    opportunityName: '商談名'
  };

  @track searchKey = '';
  @track opportunities;
  @track error;

  handleKeyChange(event) {
    this.searchKey = event.target.value;
  }

  handleSearch() {
    findOpportunities({searchKey: this.searchKey})
      .then((result) => {
        this.opportunities = result;
        this.error = undefined;
      })
      .catch((error) => {
        this.error = error;
        this.opportunities = undefined;
      });
  }
}
