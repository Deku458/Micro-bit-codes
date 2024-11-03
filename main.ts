input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (!(runing)) {
        basic.showNumber(Math.idiv(time, 1000))
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(h)
    basic.showNumber(min)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    runing = true
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (runing) {
        time += input.runningTime() - start
    }
    runing = false
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
let degrees = 0
let start = 0
let steps = 0
let time = 0
let runing = false
let h = 0
let min = 0
min = 20
h = 10
basic.forever(function () {
    basic.pause(60000)
    min += 1
    if (min == 60) {
        min = 0
        h += 1
    }
    if (h == 24) {
        h = 12
        min = 0
    }
})
basic.forever(function () {
    if (runing) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
