import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { DisplayText } from '~/components/display-text/displayText';

export default component$(() => {
  const messageSignal = useSignal('');
  const customColor = useSignal('');

  useTask$(({track}) => {
    track(() => messageSignal.value);

    if(messageSignal.value === 'llama'){
      customColor.value = 'red';
    } else {
      customColor.value = 'black';
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

    <DisplayText message={messageSignal.value} customColor={customColor.value} >
      Your message is:
    </DisplayText>
  </div>
});