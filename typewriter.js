
const typeWriter = function (sentence) {
  let i = 0;
  for (const char of sentence) {
    i += 50
    setTimeout(() => {
      
      process.stdout.write(char)
      
      
    }, i);
  }
}

const sentence = "hello there from lighthouse labs";

typeWriter(sentence);