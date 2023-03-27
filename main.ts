radio.onReceivedValue(function (name, value) {
    if (name.includes("steering")) {
        steering = Math.map(value, -255, 255, 0, 180)
        serial.writeValue("steering", steering + 90)
        SuperBit.Servo(SuperBit.enServo.S4, steering + 90)
    }
    if (name.includes("m1m3")) {
        m1m3 = value
        serial.writeValue("m1m3", m1m3)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        m1m3,
        SuperBit.enMotors.M3,
        m1m3
        )
    }
    if (name.includes("m2")) {
        m2 = value
        SuperBit.MotorRun(SuperBit.enMotors.M2, m2)
    }
    if (name.includes("m4")) {
        m4 = value
        SuperBit.MotorRun(SuperBit.enMotors.M4, m4)
    }
})
let m4 = 0
let m2 = 0
let m1m3 = 0
let steering = 0
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # . . . #
    `)
radio.setGroup(1)
steering = 90
m1m3 = 0
SuperBit.Servo(SuperBit.enServo.S4, 0)
basic.pause(1000)
SuperBit.Servo(SuperBit.enServo.S4, 90)
basic.pause(1000)
SuperBit.Servo(SuperBit.enServo.S4, 180)
basic.pause(1000)
