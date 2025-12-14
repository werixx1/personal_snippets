samples({
breaks: 'breaks165/000_RAWCLN.WAV'
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');
samples('github:switchangel/pad')

setcps(165/60/4)

$: s("breaks*2")
  .rib("<50>",4)
  .n(irand(1).rib(40,1))
  .almostNever(ply("2 | 4"))
  .orbit(4).distort("2:.5")
  .lpf(300)

$: note("<c2 g#1 f1 f2>/2").lpa(2)
  .s("swpad").n(2)
  .distort("2:.5")
  .gain(.8)
  .lpf(300)
  .room(1)

$: s("sbd!4").distort("2.2:.3").gain(.1).lpf(300)
  ._scope()