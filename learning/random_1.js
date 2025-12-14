setcps(165/60/4)

$: note("0 2 4 <[6,8] [7,9]>")
  .scale("A2:minor").sound("piano")
  .lpf(300)
  .color("magenta")
  ._pianoroll()


$: note("[0 2 4 <[6,8] [7,9]>]/4")
  .scale("G:mixolydian").sound("piano")
  .lpf(300)
  .color("cyan")
  ._pianoroll()