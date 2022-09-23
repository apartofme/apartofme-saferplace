import Sound from 'react-native-sound';

export class AudioPlayerHelper {
  private static currentAudio: Sound | null;
  public static filepath: string;

  public static play(
    filepath: string,
    setDuration: (newValue: number) => void,
    setIsFinished?: (newValue: boolean) => void,
  ) {
    if (this.currentAudio?.isPlaying()) {
      this.stop();
    }

    const newAudioInstance = new Sound(filepath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        // TODO: set error
        return;
      }

      setDuration(newAudioInstance.getDuration());

      newAudioInstance.play(isSuccess => {
        isSuccess && setIsFinished?.(true);
      });

      setIsFinished?.(false);
      this.currentAudio = newAudioInstance;

      this.filepath = filepath;
    });
  }

  public static stop() {
    this.currentAudio?.stop();
    this.currentAudio = null;
  }

  public static pause() {
    this.currentAudio?.pause();
  }

  public static start() {
    this.currentAudio?.play();
  }
}
