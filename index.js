console.log("Александров Никита");
for (let i = 0; i < 10; i++){
    console.log(`Мне не досталось пары, поэтому сегодня я один :(`)
}
let previous = 993
for (let i = 1000; i > 0; i-=7){
    console.log(`${i} - 7 = ${previous}`)
    previous = i - 14
}