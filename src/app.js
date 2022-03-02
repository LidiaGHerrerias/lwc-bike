// import module elements
import { LightningElement } from 'lwc';
// declare class to expose the component
export default class App extends LightningElement {
  //App is the name you assign your component class
  //As a best practice, the name of the class usually matches the file name of the JavaScript class, but it’s not a requirement.
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
   ready = false;
   //the method is triggered when a component is inserted in the document object model (DOM). In this case, it starts the timer.
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}