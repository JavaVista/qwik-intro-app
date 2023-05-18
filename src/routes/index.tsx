import { component$, Slot, useContext, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { beerContextId } from '~/beer-context-id';
import { BeerSelector } from './beer-selector';

/* 
context: 
  createContextId
  useContextProvider
  useContext
*/


export default component$(() => {
  const isVisibleSignal = useSignal(false);
  const didIgetAbeerSignal = useSignal(false);

  useContextProvider(beerContextId, didIgetAbeerSignal);

  useTask$(({ track }) => {
    track(() => didIgetAbeerSignal.value);

    if (didIgetAbeerSignal.value) {
      isVisibleSignal.value = true;
    }
  })

  return (
    <>
      {/* <button onClick$={() => {
        isVisibleSignal.value = !isVisibleSignal.value;
      }}>Heya!</button> */}

      <BeerHandler />
      {isVisibleSignal.value ? <Display>Projecting this...</Display> : null}
    </>

  );
});

// interface BeerGiveProps {
//   gotABeerSignal: Signal<boolean>
// }

export const BeerHandler = component$(() => {
  return <div>
    <BeerSelector />
    <hr />
    <BeerHandlerButton />
  </div>

});

export const BeerHandlerButton = component$(() => {
  const gotABeerSignal = useContext(beerContextId);
  return <div>
    <button onClick$={() => {
      gotABeerSignal.value = true;
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