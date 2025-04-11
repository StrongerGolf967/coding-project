let db = 0
basic.forever(function () {
    db = smarthome.ReadNoise(AnalogPin.P2)
    OLED.init(128, 64)
    OLED.writeStringNewLine("DB")
    OLED.writeNumNewLine(db)
    if (db > 90) {
        servos.P1.setAngle(90)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
    if (db < 90) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        servos.P1.setAngle(0)
    }
})
