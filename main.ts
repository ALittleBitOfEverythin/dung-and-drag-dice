let _10_dice = 0
let response_2 = 0
let response = 0
input.onButtonPressed(Button.A, function () {
    _10_dice = response_2
})
input.onButtonPressed(Button.B, function () {
    _10_dice = response
})
input.onGesture(Gesture.Shake, function () {
    if (_10_dice == response) {
        response = randint(1, 10)
        if (response == 1) {
            basic.showNumber(1)
        } else if (response == 2) {
            basic.showNumber(2)
        } else if (response == 3) {
            basic.showNumber(3)
        } else if (response == 4) {
            basic.showNumber(4)
        } else if (response == 5) {
            basic.showNumber(5)
        } else if (response == 6) {
            basic.showNumber(6)
        } else if (response == 7) {
            basic.showNumber(7)
        } else if (response == 8) {
            basic.showNumber(8)
        } else if (response == 9) {
            basic.showNumber(9)
        } else if (response == 10) {
            basic.showNumber(10)
        }
    }
    if (_10_dice == response_2) {
        response_2 = randint(1, 20)
        if (response_2 == 1) {
            basic.showNumber(1)
        } else if (response_2 == 2) {
            basic.showNumber(2)
        } else if (response_2 == 3) {
            basic.showNumber(3)
        } else if (response_2 == 4) {
            basic.showNumber(4)
        } else if (response_2 == 5) {
            basic.showNumber(5)
        } else if (response_2 == 6) {
            basic.showNumber(6)
        } else if (response_2 == 7) {
            basic.showNumber(7)
        } else if (response_2 == 8) {
            basic.showNumber(8)
        } else if (response_2 == 9) {
            basic.showNumber(9)
        } else if (response_2 == 10) {
            basic.showNumber(10)
        } else if (response_2 == 11) {
            basic.showNumber(11)
        } else if (response_2 == 12) {
            basic.showNumber(12)
        } else if (response_2 == 13) {
            basic.showNumber(13)
        } else if (response_2 == 14) {
            basic.showNumber(14)
        } else if (response_2 == 15) {
            basic.showNumber(15)
        } else if (response_2 == 16) {
            basic.showNumber(16)
        } else if (response_2 == 17) {
            basic.showNumber(17)
        } else if (response_2 == 18) {
            basic.showNumber(18)
        } else if (response_2 == 19) {
            basic.showNumber(19)
        } else if (response_2 == 20) {
            basic.showNumber(20)
        }
    }
})
control.inBackground(function () {
    if (_10_dice > response && response_2) {
        control.reset()
    }
    if (_10_dice != response || _10_dice != response_2) {
        control.reset()
    }
    if (_10_dice == response_2) {
        response_2 = randint(1, 20)
        if (response_2 == 1) {
            basic.showNumber(1)
        } else if (response_2 == 2) {
            basic.showNumber(2)
        } else if (response_2 == 3) {
            basic.showNumber(3)
        } else if (response_2 == 4) {
            basic.showNumber(4)
        } else if (response_2 == 5) {
            basic.showNumber(5)
        } else if (response_2 == 6) {
            basic.showNumber(6)
        } else if (response_2 == 7) {
            basic.showNumber(7)
        } else if (response_2 == 8) {
            basic.showNumber(8)
        } else if (response_2 == 9) {
            basic.showNumber(9)
        } else if (response_2 == 10) {
            basic.showNumber(10)
        } else if (response_2 == 11) {
            basic.showNumber(11)
        } else if (response_2 == 12) {
            basic.showNumber(12)
        } else if (response_2 == 13) {
            basic.showNumber(13)
        } else if (response_2 == 14) {
            basic.showNumber(14)
        } else if (response_2 == 15) {
            basic.showNumber(15)
        } else if (response_2 == 16) {
            basic.showNumber(16)
        } else if (response_2 == 17) {
            basic.showNumber(17)
        } else if (response_2 == 18) {
            basic.showNumber(18)
        } else if (response_2 == 19) {
            basic.showNumber(19)
        } else if (response_2 == 20) {
            basic.showNumber(20)
        }
    }
    if (_10_dice == response) {
        if (response == 1) {
            basic.showNumber(1)
        } else if (response == 2) {
            basic.showNumber(2)
        } else if (response == 3) {
            basic.showNumber(3)
        } else if (response == 4) {
            basic.showNumber(4)
        } else if (response == 5) {
            basic.showNumber(5)
        } else if (response == 6) {
            basic.showNumber(6)
        } else if (response == 7) {
            basic.showNumber(7)
        } else if (response == 8) {
            basic.showNumber(8)
        } else if (response == 9) {
            basic.showNumber(9)
        } else if (response == 10) {
            basic.showNumber(10)
        }
    }
})
