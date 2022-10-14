process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = (start, inc) => {
  const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  for (let step of animation) {
    setTimeout(() => {
      process.stdout.write(step);
    }, start);
    start += inc;
  }
};

spinner(100, 200);
spinner(900, 200);
spinner(1700, 200);
spinner(2500, 200);