import { api, LightningElement } from "lwc";

export default class MyResumeHeader extends LightningElement {
  @api userDetails;
  @api profileImage;
}
