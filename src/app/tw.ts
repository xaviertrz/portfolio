// @ts-ignore
import Typewriter from 't-writer.js';

export function writer() {
    const greeting = 'Hello world!';
    const target = document.querySelector('.tw');
    const typeSpeed = 200;

    const writer1 = new Typewriter(target, {
      typeSpeed: 100,
      typeColor: '#bec0b5',
      cursorColor: '#888888',
    });

    const writer2 = new Typewriter(target, {
      typeSpeed: typeSpeed,
      typeColor: '#d9a86a',
      cursorColor: '#888888',
    });

    const writer3 = new Typewriter(target, {
      typeSpeed: typeSpeed,
      typeColor: '#3893d2',
      cursorColor: '#888888',
    });

    const writer4 = new Typewriter(target, {
      typeSpeed: typeSpeed,
      typeColor: '#a1c267',
      cursorColor: '#888888',
    });

    const writer5 = new Typewriter(target, {
      typeSpeed: typeSpeed,
      typeColor: '#2980B9',
      cursorColor: '#888888',
    });

    const writer6 = new Typewriter(target, {
      typeSpeed: typeSpeed,
      typeColor: '#bec0b5',
      cursorColor: '#888888',
    });

    writer1
      .rest(2000)
      .removeCursor()
      .type('console')
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .removeCursor()
      .type('.log')
      .then(writer3.start.bind(writer3));

    writer3
      .removeCursor()
      .type('(')
      .then(writer4.start.bind(writer4));

    writer4
      .type(`"${greeting}"`)
      .removeCursor()
      .then(writer5.start.bind(writer5));

    writer5
      .removeCursor()
      .type(')')
      .then(writer6.start.bind(writer6));

    writer6
      .rest(2000)
      .type(';');
}
