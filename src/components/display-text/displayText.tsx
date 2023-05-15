import { component$, Slot, useContext } from "@builder.io/qwik";
import { messagesContextId } from "~/message-context.id";

// export interface DisplayProps {
//     message: string;
//     customColor: string;
// }

export const DisplayText = component$(() => {
    // const customColor = useContext(colorContextId);
    // const message = useContext(messageContextId);
    const {messageSignal, colorSignal} = useContext(messagesContextId);
    const style = {
        color: colorSignal.value
    }
    return <div > <Slot />
        <span style={style}> {messageSignal.value}</span>
    </div>;
}); 