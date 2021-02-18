import * as Button from './ButtonComponent';
// This is a JS file and it's OK to import as any
// @ts-ignore
import * as LegacyButton from './Button';
import * as Logo from './Logo';
import * as Image from './Image';
import * as Text from './Text';
import { BlockUtils, ComponentProps, GlobalSettings } from '../types';

export * as ElementBlock from './ElementBlock/src';

export const LegacyComponents = {
    Button: LegacyButton
};

export const StandardComponents = {
    Button,
    Image,
    Logo,
    Text
};

export { BlockUtils, ComponentProps, GlobalSettings };
