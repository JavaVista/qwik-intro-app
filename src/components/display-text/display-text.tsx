import { component$ } from "@builder.io/qwik";

export interface DisplayProps {
    message: string
}

export const DisplayText = component$<DisplayProps>((props) => {
    return <div>You typed: {props.message} </div>;
});