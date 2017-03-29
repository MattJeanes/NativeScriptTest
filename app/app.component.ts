import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <StackLayout>
      <TextField hint="Email Address" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button text="Sign in" (tap)="test()"></Button>
      <Button text="Sign up for Groceries"></Button>
    </StackLayout>
  `
})
export class AppComponent {
    constructor() {
        console.log({
            type: "Apple",
            color: "Red"
        });

        console.log("violets are red");
    }
    test(){
        alert("hello!");
    }
}