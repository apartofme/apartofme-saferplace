export enum RecognitionAcknowledgementType {
  SomeoneDied = 'someoneDied',
  LeaveHome = 'leaveHome',
  SawHorribleThings = 'sawHorribleThings',
  Multiple = 'multiple',
}

export interface IRecognitionAcknowledgementItem {
  title: string;
  subtitle: string;
  type: RecognitionAcknowledgementType;
}

export const RECOGNITION_ACKNOWLEDGEMENT_DATA: ReadonlyArray<IRecognitionAcknowledgementItem> =
  [
    {
      title: 'screens.recognition.recognition_acknowledgement.first.title',
      subtitle:
        'screens.recognition.recognition_acknowledgement.first.description',
      type: RecognitionAcknowledgementType.SomeoneDied,
    },
    {
      title: 'screens.recognition.recognition_acknowledgement.second.title',
      subtitle:
        'screens.recognition.recognition_acknowledgement.second.description',
      type: RecognitionAcknowledgementType.LeaveHome,
    },
    {
      title: 'screens.recognition.recognition_acknowledgement.third.title',
      subtitle:
        'screens.recognition.recognition_acknowledgement.third.description',
      type: RecognitionAcknowledgementType.SawHorribleThings,
    },
    {
      title: 'screens.recognition.recognition_acknowledgement.multiple.title',
      subtitle:
        'screens.recognition.recognition_acknowledgement.multiple.description',
      type: RecognitionAcknowledgementType.Multiple,
    },
  ];
