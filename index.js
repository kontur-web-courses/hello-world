function getPartyRating(money) {
    if (money > 1000)
        return "Большая миска риса";
    return "Маленькая миска риса";
}


while (true) {
    console.log("Великий Лидер XI");
    getPartyRating(Math.random());
}
