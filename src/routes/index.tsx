import { component$ } from '@builder.io/qwik';


export default component$(() => {
  return (
    <>
      <Display />
      <div>
        Hola Mundo!
      </div>
      <button onClick$={() => console.log('Hola')}>Heya!</button>
    </>

  );
});

export const Display = component$(() => {
  return <div>Hey!</div>
});