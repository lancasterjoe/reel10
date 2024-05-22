radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 100) {
        reel = randint(1, 9)
        basic.pause(500)
        if (reel == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendValue("A", 1)
        }
        if (reel == 2) {
            basic.showIcon(IconNames.Sad)
            radio.sendValue("A", 2)
        }
        if (reel == 3) {
            basic.showIcon(IconNames.Confused)
            radio.sendValue("A", 3)
        }
        if (reel == 4) {
            basic.showIcon(IconNames.Angry)
            radio.sendValue("A", 4)
        }
        if (reel == 5) {
            basic.showIcon(IconNames.Asleep)
            radio.sendValue("A", 5)
        }
        if (reel == 6) {
            basic.showIcon(IconNames.Surprised)
            radio.sendValue("A", 6)
        }
        if (reel == 7) {
            basic.showIcon(IconNames.Silly)
            radio.sendValue("A", 7)
        }
        if (reel == 8) {
            basic.showIcon(IconNames.Fabulous)
            radio.sendValue("A", 8)
        }
        if (reel == 9) {
            basic.showIcon(IconNames.Meh)
            radio.sendValue("A", 9)
        }
    }
})
let reel = 0
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
radio.setGroup(1)
