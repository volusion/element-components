import { VolComponentButton } from '../src/ButtonComponent/types';

export interface GlobalSettings {
    globalComponents: {
        volComponentButton: VolComponentButton;
    };
}

export interface BlockUtils {
    isAmpRequest: boolean;
}

export type ElementComponent<Props> = React.Component<Props>;
