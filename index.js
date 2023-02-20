function randomizeString(str) {
    let arr = str.split('');
  
    for (let i = 0; i < arr.length; i++) {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  
    return arr.join('');
}

hashCode = function(s) {
return s.split("").reduce(function(a, b) {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
}, 0);
}

const input = 'sirileNKggl '
const magicConstant = -1039686423;

while (true) {
    const output = randomizeString(input)
    const hash = hashCode(output)
    if (hash === magicConstant) {
        console.log("Oh no...")
        break
    }
    console.log(`"${output}" is not quite right`)
}
  