let item = 0
let myDisplay = Brickcell.segment_tm1637.create(
DigitalPin.P0,
DigitalPin.P1,
7,
4
)
myDisplay.showNumber(1234)
myDisplay.showDP(1, true)
myDisplay.intensity(2)
basic.pause(1000)
myDisplay.intensity(8)
basic.pause(1000)
basic.forever(function () {
    myDisplay.showNumber(item)
    item += 1
    basic.pause(1000)
})
