import React from 'react';


//functional components are better
const PrimeraApp = () => {

    const saludo = {
        nombre:'narri',
        edad:26
    };
    const saludo1='Hola jeje'
    return (
        <>
            <h1> {saludo1} </h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>aaaa</p>
        </>
    );
}

export default PrimeraApp;