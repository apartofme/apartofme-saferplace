import { IRadioButtonListItem } from '../../../components';
import { RecognitionAcknowledgementType } from '../RecognitionAcknowledgement/RecognitionAcknowledgement.data';

export const CHOOSE_REASON_DATA: ReadonlyArray<IRadioButtonListItem> = [
  {
    id: RecognitionAcknowledgementType.SomeoneDied,
    title: 'screens.recognition.choose_reason.first',
  },
  {
    id: RecognitionAcknowledgementType.LeaveHome,
    title: 'screens.recognition.choose_reason.second',
  },
  {
    id: RecognitionAcknowledgementType.SawHorribleThings,
    title: 'screens.recognition.choose_reason.third',
  },
];
