import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

// cannot contain space for the name


export const beerContextId = createContextId<Signal<boolean>>('beerContext');