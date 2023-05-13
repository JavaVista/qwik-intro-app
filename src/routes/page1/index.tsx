import { component$, useSignal } from '@builder.io/qwik';
import { DisplayText } from '~/components/display-text/displayText';

export default component$(() => {
  const messageSignal = useSignal('')

  return <div>
    This is Page 1

    <hr />

    <input type="text" placeholder="Type your search" onInput$={(e: InputEvent) => {
      messageSignal.value = (e.target as HTMLInputElement).value;
    }} />

    <hr />

    <DisplayText message={messageSignal.value} >
      Your message is:
    </DisplayText>
  </div>
});