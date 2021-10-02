namespace SpriteKind {
    export const text = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx, VgerProbe.vy - 19)
    VgerProbe.setImage(assets.image`ProbeS`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    quad += 1
    if (quad > maxquad) {
        quad = 0
    }
    showQuad(quad)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Label.sayText(getName(curconst), 500, true)
    curconst += 1
    if (0 == quad) {
        if (curconst >= NQ1.length) {
            curconst = 0
        }
    }
    if (1 == quad) {
        if (curconst >= NQ2.length) {
            curconst = 0
        }
    }
    if (2 == quad) {
        if (curconst >= NQ3.length) {
            curconst = 0
        }
    }
    if (3 == quad) {
        if (curconst >= NQ3.length) {
            curconst = 0
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx - 19, VgerProbe.vy)
    VgerProbe.setImage(assets.image`ProbeE`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
function getName (num: number) {
    if (0 == quad) {
        return NQ1[num]
    }
    if (1 == quad) {
        return NQ2[num]
    }
    if (2 == quad) {
        return NQ3[num]
    }
    if (3 == quad) {
        return NQ4[num]
    }
    return ""
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx + 19, VgerProbe.vy)
    VgerProbe.setImage(assets.image`myImage3`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx, VgerProbe.vy + 19)
    VgerProbe.setImage(assets.image`ProbeN`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
function showQuad (num: number) {
    scene.setBackgroundImage(quads[num])
    curconst = 0
}
let quad = 0
let NQ4: string[] = []
let NQ3: string[] = []
let NQ2: string[] = []
let NQ1: string[] = []
let maxquad = 0
let quads: Image[] = []
let curconst = 0
let VgerProbe: Sprite = null
let Label: Sprite = null
Label = sprites.create(assets.image`LBL`, SpriteKind.text)
VgerProbe = sprites.create(assets.image`Probe`, SpriteKind.Player)
VgerProbe.setBounceOnWall(true)
VgerProbe.setStayInScreen(true)
Label.setPosition(58, 25)
Label.sayText("Welcome to Starmap", 1000, true)
curconst = 1
quads = [
assets.image`quad`,
assets.image`quad0`,
assets.image`quad1`,
assets.image`quad2`
]
maxquad = quads.length - 1
NQ1 = [
"Andromeda",
"Aries",
"Cassiopeia",
"Orion",
"Perseus",
"Pisces",
"Taurus",
"Triangulum"
]
NQ2 = [
"Auriga",
"Camelopardalis",
"Cancer",
"Canis Minor",
"Gemini",
"Leo",
"Leo Minor",
"Lynx",
"Monoceros",
"Ursa Major"
]
NQ3 = [
"Boötes",
"Canes Venatici",
"Coma Berenices",
"Corona Borealis",
"Draco",
"Hercules",
"Serpens",
"Ursa Minor"
]
NQ4 = [
"Aquila",
"Cepheus",
"Cygnus",
"Delphinus",
"Equuleus",
"Lacerta",
"Lyra",
"Pegasus",
"Sagitta",
"Vulpecula"
]
let quadnames = [
NQ1,
NQ2,
NQ3,
NQ4
]
showQuad(randint(0, maxquad))
quad = 0
game.onUpdateInterval(500, function () {
    VgerProbe.setVelocity(0.7 * VgerProbe.vx, 0.7 * VgerProbe.vy)
})
