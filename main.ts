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
    if (curconst > numConsts) {
        curconst = 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx - 19, VgerProbe.vy)
    VgerProbe.setImage(assets.image`ProbeE`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
function getName (num: number) {
    return nquants[num * 5]
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
}
let VgerProbe: Sprite = null
let maxquad = 0
let quads: Image[] = []
let quad = 0
let numConsts = 0
let nquants: string[] = []
let curconst = 0
let Label: Sprite = null
Label = sprites.create(assets.image`LBL`, SpriteKind.text)
Label.setPosition(33, 40)
Label.sayText("Welcome to Starmap", 1000, true)
curconst = 1
nquants = [
"Constellation",
"English name",
"Area (square degrees)",
"Quadrant",
"Visible between latitudes",
"Andromeda",
"Andromeda",
"722.278",
"NQ1",
"90°N – 40°S",
"Aquila",
"Eagle",
"652.473",
"NQ4",
"90°N – 75°S",
"Aries",
"Ram",
"441.395",
"NQ1",
"90°N – 60°S",
"Auriga",
"Charioteer",
"657.438",
"NQ2",
"90°N – 40°S",
"Boötes",
"Herdsman",
"906.831",
"NQ3",
"90°N – 50°S",
"Camelopardalis",
"Giraffe",
"756.828",
"NQ2",
"90°N – 10°S",
"Cancer",
"Crab",
"505.872",
"NQ2",
"90°N – 60°S",
"Canes Venatici",
"Hunting Dogs",
"465.194",
"NQ3",
"90°N – 40°S",
"Canis Minor",
"Lesser Dog",
"183.367",
"NQ2",
"90°N – 75°S",
"Cassiopeia",
"Cassiopeia",
"598.407",
"NQ1",
"90°N – 20°S",
"Cepheus",
"Cepheus",
"587.787",
"NQ4",
"90°N – 10°S",
"Coma Berenices",
"Berenice's Hair",
"386.475",
"NQ3",
"90°N – 70°S",
"Corona Borealis",
"Northern Crown",
"178.71",
"NQ3",
"90°N – 50°S",
"Cygnus",
"Swan",
"803.983",
"NQ4",
"90°N – 40°S",
"Delphinus",
"Dolphin",
"188.549",
"NQ4",
"90°N – 70°S",
"Draco",
"Dragon",
"1082.952",
"NQ3",
"90°N – 15°S",
"Equuleus",
"Little Horse (Foal)",
"71.641",
"NQ4",
"90°N – 80°S",
"Gemini",
"Twins",
"513.761",
"NQ2",
"90°N – 60°S",
"Hercules",
"Hercules",
"1225.148",
"NQ3",
"90°N – 50°S",
"Lacerta",
"Lizard",
"200.688",
"NQ4",
"90°N – 40°S",
"Leo",
"Lion",
"946.964",
"NQ2",
"90°N – 65°S",
"Leo Minor",
"Lesser Lion",
"231.956",
"NQ2",
"90°N – 45°S",
"Lynx",
"Lynx",
"545.386",
"NQ2",
"90°N – 55°S",
"Lyra",
"Lyre",
"286.476",
"NQ4",
"90°N – 40°S",
"Monoceros",
"Unicorn",
"481.569",
"NQ2",
"75°N – 90°S",
"Orion",
"Orion (the Hunter)",
"594.12",
"NQ1",
"85°N – 75°S",
"Pegasus",
"Pegasus",
"1120.794",
"NQ4",
"90°N – 60°S",
"Perseus",
"Perseus",
"614.997",
"NQ1",
"90°N – 35°S",
"Pisces",
"Fishes",
"889.417",
"NQ1",
"90°N – 65°S",
"Sagitta",
"Arrow",
"79.932",
"NQ4",
"90°N – 70°S",
"Serpens",
"Snake",
"636.928",
"NQ3",
"80°N – 80°S",
"Taurus",
"Bull",
"797.249",
"NQ1",
"90°N – 65°S",
"Triangulum",
"Triangle",
"131.847",
"NQ1",
"90°N – 60°S",
"Ursa Major",
"Great Bear",
"1279.66",
"NQ2",
"90°N – 30°S",
"Ursa Minor",
"Little Bear",
"255.864",
"NQ3",
"90°N – 10°S",
"Vulpecula",
"Fox",
"268.165",
"NQ4",
"90°N – 55°S"
]
numConsts = nquants.length / 5
quad = 0
quads = [
assets.image`quad`,
assets.image`quad0`,
assets.image`quad1`,
assets.image`quad2`
]
maxquad = quads.length - 1
showQuad(randint(0, maxquad))
VgerProbe = sprites.create(assets.image`Probe`, SpriteKind.Player)
VgerProbe.setStayInScreen(true)
VgerProbe.setBounceOnWall(true)
game.onUpdateInterval(500, function () {
    VgerProbe.setVelocity(0.7 * VgerProbe.vx, 0.7 * VgerProbe.vy)
})
