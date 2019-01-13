import $ from 'jquery';
import Rx from 'rxjs/Rx';
///Observable from EVENT
/* const btn = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

var count = 0;

btnStream$.subscribe(
  function(e) {
    console.log(e.target.innerHTML);
  },
  function(err) {
    console.log(err);
  },

  function() {
    console.log('completed');
  }
);

const input = $('#input');
const output = $('#output');
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(
  function(e) {
    console.log(e.target.value);
    output.append(e.target.value);
  },

  function(err) {
    console.log(err);
  },
  function() {
    console.log('Completed');
  }
);

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(
  function(e) {
    console.log('X: ' + e.clientX + 'Y: ' + e.clientY);
    output.html('<h1>X: ' + e.clientX + ' Y: ' + e.clientY + '</h1>');
  },
  function(err) {
    console.log(err);
  },
  function() {
    console.log('completed');
  }
);

*/

/// subscribe to an array and an object

/*
const numbers = [33, 44, 55, 66, 77];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log('Completed');
  }
);

const posts = [
  { title: 'Post One', body: ' This is one' },
  { title: 'Post Two', body: ' This is Two' },
  { title: 'Post Three', body: ' This is Three' }
];

const post$ = Rx.Observable.from(posts);
post$.subscribe(
  v => {
    console.log(v);
    $('#post').append('<li><h3>' + v.title + '</h3><p>' + v.body + '</p></li>');
  },
  err => {
    console.log(err);
  },
  complete => {
    console.log('Completed!');
  }
);

*/

//~~~~~~~~~~~ Create Observable from set
// const set = new Set(['Hello', 44, { title: 'My Title' }]);
// const set$ = Rx.Observable.from(set);
// set$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('Completed');
//   }
// );

///~~~~~~~~ Create Observable from Scratch

// const source$ = new Rx.Observable(observer => {
//   console.log('Creating Observable');
//   observer.next('Hello World!');
//   observer.next('Another Value');

//   observer.error(new Error('Something went wrong'));

//   setTimeout(() => {
//     observer.next('Yet another value');
//     observer.complete();
//   }, 3000);
// });

// source$
//   .catch(err => Rx.Observable.of(err))
//   .subscribe(
//     x => {
//       console.log(x);
//     },
//     err => {
//       console.log(err);
//     },
//     complete => {
//       console.log('Completed!');
//     }
//   );

////~~~~~~~~~~~~~~ Observable sequence from a promise
/// a promise is a result from asynchonous operation
/// it returns a value but at later time

// const myPromise = new Promise((resolve, reject) => {
//   console.log('Creating Promises');
//   setTimeout(() => {
//     resolve('Hello from promises');
//   }, 5000);
// });

// // myPromise.then(v => {
// //   console.log(v);
// // });

// // const source$ = Rx.Observable.fromPromise(myPromise);
// // source$.subscribe(v => {
// //   console.log(v);
// // });

// function getUser(username) {
//   return $.ajax({
//     url: 'https://api.github.com/users/' + username,
//     dataType: 'jsonp'
//   }).promise();
// }

// const input$ = Rx.Observable.fromEvent($('#input'), 'keyup');
// input$.subscribe(x => {
//   console.log(x.target.value);
//   Rx.Observable.fromPromise(getUser(x.target.value)).subscribe(v => {
//     console.log(v);
//     $('#name').text(v.data.name);
//     $('#blog').text(v.data.blog);
//     $('#repos').text(v.data.public_repos);
//   });
// });

///~~~~~~~~~~~~~~ Observable with interval !!!
// const source$ = Rx.Observable.interval(1000).take(5);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('Completed!');
//   }
// );

///~~~~~~~~~~~~~~~~~ Observable with Timer !!!

// const source$ = Rx.Observable.timer(5000, 2000).take(5);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('Completed!');
//   }
// );

///~~~~~~~~~~~~ Observable with RANGE

// const source$ = Rx.Observable.range(1000, 2000);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log('Completed!');
//   }
// );

///~~~~~~~~~~~~ Observable with Map and Pluck

// const source$ = Rx.Observable.interval(1000)
//   .take(10)
//   .map(v => v * 2);
// source$.subscribe(v => console.log(v));

// const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
//   .map(v => v.toUpperCase())
//   .map(v => 'I am ' + v);
// source$.subscribe(v => console.log(v));

// function getUser(username) {
//   return $.ajax({
//     url: 'https://api.github.com/users/' + username,
//     dataType: 'jsonp'
//   }).promise();
// }

// Rx.Observable.fromPromise(getUser('bradtraversy'))
//   .map(user => user.data.name)
//   .subscribe(v => console.log(v));

///~~~~~~~~~~~~~~~ Observable with Pluck ~~~~~~~~~~~~
// const users = [
//   { name: 'Will', age: 34 },
//   { name: 'Mike', age: 33 },
//   { name: 'Paul', age: 35 }
// ];

// const users$ = Rx.Observable.from(users).pluck('name');
// users$.subscribe(x => console.log(x));

///~~~~~~~~~~~ Observale with Merge and Concat

// Rx.Observable.of('Hello World!')
//   .merge(Rx.Observable.of('Everyone'))
//   .subscribe(x => console.log(x));

// Rx.Observable.interval(2000)
//   .merge(Rx.Observable.interval(500))
//   .take(25)
//   .subscribe(x => console.log(x));

///A better syntax with merge

// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
// const source2$ = Rx.Observable.interval(500).map(v => 'Merge2: ' + v);

// Rx.Observable.merge(source1$, source2$)
//   .take(25)
//   .subscribe(v => console.log(v));

///Observable with Concat

// const source1$ = Rx.Observable.range(0, 5).map(v => 'Source1: ' + v);
// const source2$ = Rx.Observable.range(6, 5).map(v => 'Source2: ' + v);

// Rx.Observable.concat(source1$, source2$).subscribe(x => console.log(x));

///~~~~~~~~~~~ Merge map and Concat map and Switch Map
///This is nested subscribe =>>> we need to avoid this at all cost!!!!!!!!!
// Rx.Observable.of('Hello').subscribe(v => {
//   Rx.Observable.of(v + ' Everyone').subscribe(x => console.log(x));
// });

/// Solution is here!!!!!
// Rx.Observable.of('Hello')
//   .mergeMap(v => {
//     return Rx.Observable.of(v + 'Everyone');
//   })
//   .subscribe(x => console.log(x));

function getUser(username) {
  return $.ajax({
    url: 'Https://api.github.com/users/' + username,
    dataType: 'jsonp'
  }).promise();
}

// const input$ = Rx.Observable.fromEvent($('#input'), 'keyup');
// input$.subscribe(v => {
//   Rx.Observable.fromPromise(getUser(v.target.value)).subscribe(user => {
//     $('#name').text(user.data.name);
//     $('#blog').text(user.data.blog);
//     $('#repos').text('Public Repos: ' + user.data.public_repos);
//   });
// });

const input$ = Rx.Observable.fromEvent($('#input'), 'keyup')
  .map(e => e.target.value)
  .switchMap(v => {
    return Rx.Observable.fromPromise(getUser(v));
  });

input$
  .map(user => user.data)
  .subscribe(user => {
    $('#name').text(user.name);
    $('#blog').text(user.blog);
    $('#repos').text('Public Repos: ' + user.public_repos);
  });
