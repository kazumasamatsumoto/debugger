import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-debug';

  ngOnInit() {
    console.log("test");
    console.log("test1");
    console.log("test2");
    console.log("test3");
    console.log("test4");
    console.log("test5");
    console.log("test6");
    console.log("test7");
    console.log("test8");
    console.log("test9");
  }
}
