import { component$, Resource, useResource$, useStylesScoped$ } from "@builder.io/qwik";
// the beers.json is from sample api √https://sampleapis.com/api-list
// mock server api url http://localhost:5173/api/beers
import styles from "./beer-selector.css?inline"

export interface Beer {
    name: string;
}

export const BeerSelector = component$(() => {

    // useStyles$(styles)
    useStylesScoped$(styles) // for making sure is scoped to the one component

    const beersResource = useResource$<Beer[]>(async () => {
        const result = await fetch('http://localhost:5173/api/beers');
        return result.json();
    })

    // const beers: Beer[] = [
    //     { name: 'ale' },
    //     {name: 'stout'},
    //     {name: 'porter'}
    // ]

    return <div>
        <Resource value={beersResource}
            onPending={() => <span>...loading</span>}
            onRejected={(reason) => <span>Got an Error: {reason instanceof Error ? reason.message : reason}</span>}
            onResolved={(beers) =>
                <select>
                    {beers.map((beer, index) => <option key={index}>{beer.name}</option>)}
                </select>}
        />

    </div>
});