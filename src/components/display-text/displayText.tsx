import { component$, Slot } from "@builder.io/qwik";

export interface DisplayProps {
    message: string
}

export const DisplayText = component$<DisplayProps>((props) => {
    return <div><Slot /> {props.message} </div>;
});