import { component$, Slot } from "@builder.io/qwik";

export interface DisplayProps {
    message: string;
    customColor: string;
}

export const DisplayText = component$<DisplayProps>((props) => {
    const style = {
        color: props.customColor
    }
    return <div > <Slot />
        <span style={style}> {props.message}</span>
    </div>;
}); 