import {LightningElement, api, wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class HelloIteration extends LightningElement {
  @api recordId;
  @wire(getContacts, {accountId: '$recordId'}) contacts;
}
