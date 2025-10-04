class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {}
  private enabled = true

  constructor() {
    if (typeof window !== "undefined") {
      this.loadSounds()
      this.enabled = localStorage.getItem("soundEnabled") !== "false"
    }
  }

  private loadSounds() {
    const soundFiles = {
      click: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      hover: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      success: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      error: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      notification: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      whoosh: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      pop: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    }

    Object.entries(soundFiles).forEach(([name, path]) => {
      const audio = new Audio(path)
      audio.preload = "auto"
      audio.volume = 0.3
      this.sounds[name] = audio
    })
  }

  play(soundName: string, volume = 0.3) {
    if (!this.enabled || !this.sounds[soundName]) return

    const sound = this.sounds[soundName].cloneNode() as HTMLAudioElement
    sound.volume = volume
    sound.play().catch((e) => console.log("Sound play failed:", e))
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled
    localStorage.setItem("soundEnabled", enabled.toString())
  }

  isEnabled() {
    return this.enabled
  }
}

export const soundManager = new SoundManager()

export const playSound = (soundName: string, volume?: number) => {
  soundManager.play(soundName, volume)
}

export const setSoundEnabled = (enabled: boolean) => {
  soundManager.setEnabled(enabled)
}

export const isSoundEnabled = () => {
  return soundManager.isEnabled()
}
