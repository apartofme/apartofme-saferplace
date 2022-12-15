import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export class AudioPlayerHelper {
  private static currentAudio: Sound | null;
  public static filepath: string;
  public static currentBackgrounAudio: Sound | null;
  public static backgroundFilepath: string;

  public static play(
    filepath: string,
    setIsFinished?: (newValue: boolean) => void,
    setDuration?: (newValue: number) => void,
  ) {
    if (this.currentAudio?.isPlaying()) {
      this.stop();
    }

    const newAudioInstance = new Sound(filepath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        // TODO: set error
        return;
      }

      if (setDuration) {
        setDuration(newAudioInstance.getDuration());
      }

      newAudioInstance.play(isSuccess => {
        isSuccess && setIsFinished?.(true);
      });

      setIsFinished?.(false);
      this.currentAudio = newAudioInstance;

      this.filepath = filepath;
    });
    // console.log('prevAudio?.currentAudio', prevAudio?.currentAudio);
    // setTimeout(() => {
    //   this.currentAudio = prevAudio?.currentAudio ?? null;
    //   this.filepath = prevAudio?.filepath ?? null;
    //   this.start();
    // }, this.currentAudio?.getDuration());
  }

  public static setInfiniteLoop(filepath: string) {
    // console.log(12);
    // console.log(this.filepath);
    // console.log(this.currentAudio);
    if (this.currentBackgrounAudio?.isPlaying()) {
      // console.log('this.currentAudio?.isPlaying');
      // console.log(this.currentAudio);
      this.stop();
    }

    const newAudioInstance = new Sound(filepath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        // TODO: set error
        return;
      }

      newAudioInstance.play(isSuccess => {
        isSuccess;
      });

      newAudioInstance.setNumberOfLoops(-1);

      this.currentBackgrounAudio = newAudioInstance;
      this.backgroundFilepath = filepath;
    });
  }

  public static stop() {
    this.currentAudio?.stop();
    this.currentAudio = null;
  }

  public static stopInfiniteLoop() {
    this.currentBackgrounAudio?.stop();
    this.currentBackgrounAudio = null;
  }

  public static pause() {
    this.currentAudio?.pause();
  }
  public static pauseInfiniteLoop() {
    this.currentBackgrounAudio?.pause();
  }

  public static start() {
    this.currentAudio?.play();
  }
  public static startInfiniteLoop() {
    this.currentBackgrounAudio?.play();
  }
}
