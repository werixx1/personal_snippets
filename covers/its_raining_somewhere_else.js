/* original song 'its raining somewhere else' by toby fox
work very much in progress, im just figuring things out :]
notes taken from here with some modifications: https://onlinesequencer.net/305294
*/
setcpm(200)

// main melody
$lead: note(`<
~@1
d#5 d5 d#5@2 c5 d5
d#5 a#5 g5 
d#5@2 
d5 c5 g4
~@2 d5 c5 d5@2
g4 a4 a#4
f5@2 d5@4
~@3 c#5 c5 c#5@2
f4 g4 g#4
f5@2 c#5@2
c5 a#4 c5
f4@3
[g4,d#4] [f4, g#4]
[c5, d#5]@2
[g5, d#5]@8
>`).scale("c:minor").sound("piano").room(.5).roomsize(6)
  .gain(.25)
  .detune("[-5, 5]")
  .lpf(800)
  ._pianoroll()

// $: note("0").lpa(2)
//   .s("swpad").n(3)
//   //.distort("2:.5")
//   .gain(.8)
//   .lpf(300)
//   .room(1)

// back melody - this is so distorted help
$harmony: note(`<
[a#3, g3, d#3, c3]@14
~@1
[f3, d4, a#2, g2]@14
~@2
[g#3, f3, d3, a#3]@14
~@2
[d#3, c3, g#3, f2]@14
~@1
>`).scale("c:minor").sound("piano").room(.5).roomsize(6)
  .gain(.25)
  .detune("[-5, 5]")
  .lpf(600)
