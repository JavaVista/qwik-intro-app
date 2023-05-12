import { component$, useSignal } from '@builder.io/qwik';


export default component$(() => {
  const isVisibleSignal = useSignal(false);

  return (
    <>
      <button onClick$={() => {
        isVisibleSignal.value = !isVisibleSignal.value;
      }}>Heya!</button>

      {isVisibleSignal.value ? <Display /> : null}
    </>

  );
});

export const Display = component$(() => {
  return <div>I am visible!</div>;
});