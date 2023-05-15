import { component$, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { DisplayText } from '~/components/display-text/displayText';
import { messagesContextId } from '~/message-context.id';
//import { colorContextId, messageContextId } from '~/message-context.id';

export default component$(() => {
  const messageSignal = useSignal('');
  const colorSignal = useSignal('');

  // useContextProvider(messageContextId, messageSignal);
  // useContextProvider(colorContextId, customColor);

  useContextProvider(messagesContextId, {
    messageSignal,
    colorSignal
  });

  useTask$(({track}) => {
    track(() => messageSignal.value);

    if(messageSignal.value === 'llama'){
      colorSignal.value = 'red';
    } else {
      colorSignal.value = 'black';
    }
  })

  return <div>
    This is Page 1

    <hr />

    <input type="text" 
    placeholder="Type your search" 
    onInput$={(e: InputEvent) => {
      messageSignal.value = (e.target as HTMLInputElement).value;
    }} />

    <hr />

    <DisplayText >
      Your message is:
    </DisplayText>
  </div>
});