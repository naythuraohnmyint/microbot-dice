let Dice = 0
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 6)
    basic.showNumber(Dice)
})
