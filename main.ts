bluetooth.onBluetoothConnected(function () {
    basic.setLedColor(0x00ff00)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Button A\\r\\n")
})
bluetooth.startUartService()
basic.showString("Hi!")
bluetooth.uartWriteString("Hello World")
led.setBrightness(95)
basic.forever(function () {
	
})
