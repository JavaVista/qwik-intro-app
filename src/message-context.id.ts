import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export interface messagesContextState {
    messageSignal: Signal<string>;
    colorSignal: Signal<string>;
}

// export const messageContextId = createContextId<Signal<string>>('messageContext');
// export const colorContextId = createContextId<Signal<string>>('colorContext');

export const messagesContextId = createContextId<messagesContextState>('messagesContext');