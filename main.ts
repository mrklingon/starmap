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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    VgerProbe.setVelocity(VgerProbe.vx - 19, VgerProbe.vy)
    VgerProbe.setImage(assets.image`ProbeE`)
    pause(100)
    VgerProbe.setImage(assets.image`Probe`)
})
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
