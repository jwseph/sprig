/*
@title: Ch 2 Walk
@author: hackclub

This bean can walk left and down.
Can you add controls to walk right and up also?

Hint: we use w, a, s, d as inputs, check the help tab
*/

const bean = 'a';

setLegend(
  [bean, bitmap`
................
......000.......
.....0.220......
.....002020.....
..0..022..0.....
...0..0...0.....
...0000...20....
....2.0...20....
.....0....200...
....0...220.0...
....0...220.0...
....02.220...2..
.....0000.......
....0....0......
....0....0......
...00...00......`]
);

setMap(map`
.....
.....
..a..
.....
.....`);

onInput("a", () => {
  getFirst(bean).x -= 1
});

onInput("s", () => {
  getFirst(bean).y += 1
});