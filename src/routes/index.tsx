import { component$, Signal, Slot, useSignal, useTask$ } from '@builder.io/qwik';


export default component$(() => {
  const isVisibleSignal = useSignal(false);
  const didIgetAbeerSignal = useSignal(false)

  useTask$(({ track }) => {
    track(() => didIgetAbeerSignal.value);

    if(didIgetAbeerSignal.value){
      isVisibleSignal.value = true;
    }
  })

  return (
    <>
      {/* <button onClick$={() => {
        isVisibleSignal.value = !isVisibleSignal.value;
      }}>Heya!</button> */}

      <BeerHandler gotABeerSignal={didIgetAbeerSignal} />

      {isVisibleSignal.value ? <Display>Projecting this...</Display> : null}
    </>

  );
});

interface BeerGiveProps {
  gotABeerSignal: Signal<boolean>
}

export const BeerHandler = component$((props: BeerGiveProps) => {
  return <div>
    <button onClick$={() => {
      props.gotABeerSignal.value = true;
    }
    } >Give me a Beer</button>
  </div>;
});

export const Display = component$(() => {
  return <div>
    <div>I am visible!</div>
    <Slot />
  </div>;
});