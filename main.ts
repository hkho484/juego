let numero1 = 0
input.onButtonPressed(Button.A, function () {
    let numero2 = 0
    numero1 = randint(1, 9)
    basic.showNumber(numero1)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    numero1 = randint(1, 9)
    basic.showNumber(numero2)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.pause(numero2 + numero1)
})
