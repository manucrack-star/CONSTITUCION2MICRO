input.onButtonPressed(Button.A, function () {
    basic.showString("CORAZON")
    radio.sendString("CORAZON")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
})
radio.setGroup(5)
