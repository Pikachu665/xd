music.setVolume(200)
music.play(music.stringPlayable("C D B G A C5 F E ", 125), music.PlaybackMode.LoopingInBackground)
basic.showString("Hello Alan!")
music.stopAllSounds()
