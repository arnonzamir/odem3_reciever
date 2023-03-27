radio.onReceivedValue(function (name, value) {
    if (name.includes("x")) {
        x_value = value
        serial.writeValue("x", x_value)
        SuperBit.Servo(SuperBit.enServo.S1, 90 + x_value)
    }
    if (name.includes("y")) {
        y_value = value
        serial.writeValue("y", y_value)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        y_value,
        SuperBit.enMotors.M2,
        y_value
        )
    }
})
let y_value = 0
let x_value = 0
radio.setGroup(1)
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # . . . #
    `)
x_value = 90
y_value = 0
