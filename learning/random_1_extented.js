samples({
breaks: 'breaks165/000_RAWCLN.WAV'
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');
samples('github:switchangel/pad')

setcps(165/60/4)

$: s("breaks*2")
  .gain(.5)

$: s("bd:1!2")
  .lpf(200)
  ._scope()

$: n("[0 2 4 <[6,8] [7,9]>]*2")
  .scale("A4:minor").sound("piano").room(2).gain(.6)
  .color("pink")
  ._pianoroll()

$: n("[0 2 4 <[6,8] [7,9]>]*2")
  .scale("A3:minor").sound("pulse").lpf(150)
  .distort("2.2:.3")
  .color("pink")
  ._pianoroll()

$: s("sbd!4").distort("2.2:.3").gain(.2).lpf(200)
._scope()