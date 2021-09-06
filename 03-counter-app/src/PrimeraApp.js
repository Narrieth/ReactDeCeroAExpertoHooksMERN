import React from 'react';


//functional components are better
const PrimeraApp = () => {

    const saludo = {
        nombre:'narri',
        edad:26
    };
    const saludo1='Hola jeje';
    const array=[1,2,3,4,5];
    const enteros=1;

    return (
        <>
            <h1> {saludo1} </h1>
            <pre>{JSON.stringify(saludo,null,3)}</pre>
            <h2> {array} </h2>
            <h3> {enteros} </h3>
            <p>aaaa</p>
        </>
    );
}

export default PrimeraApp;