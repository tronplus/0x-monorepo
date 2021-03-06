import { DoneCallback } from '@0xproject/types';

export const reportCallbackErrors = (done: DoneCallback) => {
    return (f: (...args: any[]) => void) => {
        const wrapped = async (...args: any[]) => {
            try {
                f(...args);
            } catch (err) {
                done(err);
            }
        };
        return wrapped;
    };
};
