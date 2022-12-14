import { Component } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#888888',
      cursorColor: '#A9A9A9',
    });

    const greetings = ['console.log("Hello, world!");', 'print("Hello, world!")', 'echo "Hello, world!";', 'puts "Hello, world!";', 'System.out.println("Hello, world!");', 'Console.WriteLine("Hello, world!");'];
    const time = 2000;

    greetings.forEach((greeting) => {
      writer.type(greeting).rest(time).remove(greeting.length).start();
    });
  }
}
