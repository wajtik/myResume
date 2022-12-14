import { LightningElement, api } from "lwc";

export default class MyResumeOtherInformation extends LightningElement {
  @api schoolInfo;
  @api skills;
  @api languages;
  @api socialDetails;
  @api userDetails;
  @api interests;
  @api heading;

  get phoneLink() {
    return `tel:${this.userDetails.PHONE}`;
  }
  get emailLink() {
    return `mailto:${this.userDetails.EMAIL}`;
  }
}
