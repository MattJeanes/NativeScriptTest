import { Component } from "@angular/core";
import {EventData} from "data/observable";
import { Page } from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";

var view: View;

export function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    view = page.getViewById<View>("view");
}


@Component({
    selector: "my-app",
    template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <StackLayout>
    <Label text="Your email address: {{emailAddress}}"></Label>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none" [(ngModel)]="emailAddress"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      
      <Button cssClass="btn-login" [text]="signInButtonText" (tap)="login($event)"></Button>
      <Button cssClass="btn-test" #signInButton [text]="signUpButtonText" (tap)="test($event)"></Button>
    </StackLayout>
  `
})
export class AppComponent {
    public emailAddress: string = "";
    public signUpButtonText: string = "Create account";
    public signInButtonText: string = "Log in";
    public signUpButtonMode: boolean = false;
    constructor() {
        console.log("violets are red");
    }
    public login(args: EventData){
        if(!this.emailAddress){
            alert("Please enter email address!");
            return;
        }
        if(this.signUpButtonMode){
            alert(`Signed up with email address ${this.emailAddress}`);
        }else{
            alert(`Logged in with email adddress ${this.emailAddress}`);
        }
    }
    public test(args: EventData) {
        let button = args.object as any;
        let className = button.className.replace("-animated", "").replace("2", "");
        button.className = className;
        this.signUpButtonMode = !this.signUpButtonMode;
        if(this.signUpButtonMode) {
            button.className = className + "-animated";
            this.signUpButtonText = "Back";
            this.signInButtonText = "Sign up";
        }else{
             button.className = className + "-animated2";
            this.signUpButtonText = "Create account";   
            this.signInButtonText = "Log in";          
        }
    }
}