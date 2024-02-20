function getPartyRating(money) {
    if (money > 0.5)
        return "Большая миска риса";
    return "Маленькая миска риса";
}


while (true) {
    console.log("Великий Лидер XI");
    console.log("Вам положена: ", getPartyRating(Math.random()));
}
