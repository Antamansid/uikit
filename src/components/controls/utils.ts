import type {BaseInputControlProps, InputControlState} from './types';

export const prepareAutoComplete = (
    autoComplete: BaseInputControlProps['autoComplete'],
): string | undefined => {
    if (typeof autoComplete === 'boolean') {
        return autoComplete ? 'on' : 'off';
    } else {
        return autoComplete;
    }
};

export const getInputControlState = (
    args: Pick<BaseInputControlProps, 'error'> = {},
): InputControlState | undefined => {
    return args.error ? 'error' : undefined;
};

export const getControlErrorTextId = (controlId?: string) =>
    controlId ? `${controlId}-error-text` : undefined;

export const getControlNoteId = (controlId?: string) =>
    controlId ? `${controlId}-note-text` : undefined;
