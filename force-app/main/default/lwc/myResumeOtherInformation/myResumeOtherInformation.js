import { LightningElement, api } from 'lwc';

export default class MyResumeOtherInformation extends LightningElement {
    @api schoolInfo
    @api skills
    @api socialDetails
    @api userDetails
   
    get phoneLink(){
        return `tel:${this.userDetails.PHONE}`
    }
    get emailLink(){
        return `mailto:${this.userDetails.EMAIL}`
    }
}