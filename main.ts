bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    データ = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    ライン = Math.constrain(parseFloat(データ.substr(0, 2)), 0, 29)
    inkybit.clearRectangle(
    ライン * 4,
    0,
    4,
    250
    )
    for (let カウンター = 0; カウンター <= データ.length - 2; カウンター++) {
        ドット = データ.charAt(カウンター + 2)
        if (ドット == "1") {
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "2") {
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
        } else if (ドット == "3") {
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "4") {
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
        } else if (ドット == "5") {
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "6") {
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
        } else if (ドット == "7") {
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "8") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
        } else if (ドット == "9") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "A") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
        } else if (ドット == "B") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "C") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
        } else if (ドット == "D") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else if (ドット == "E") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
        } else if (ドット == "F") {
            inkybit.setPixel(カウンター, ライン * 4 + 0, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 1, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 2, inkybit.Color.Black)
            inkybit.setPixel(カウンター, ライン * 4 + 3, inkybit.Color.Black)
        } else {
        	
        }
    }
    inkybit.show()
})
let ドット = ""
let ライン = 0
let データ = ""
bluetooth.startUartService()
inkybit.clear()
inkybit.show()
データ = ""
ライン = 0
ドット = ""
