import React from 'react';
import PropTypes from 'prop-types';


//functional components are better
const PrimeraApp = ({saludo123, subtitulo}) => {



    const saludo = {
        nombre:'narri',
        edad:26
    };
    const saludo1='Hola jeje';
    const array=[1,2,3,4,5];
    const enteros=1;


    return (
        <>
            <h1> {saludo123} </h1>
            <p>{subtitulo}</p>
            <pre>{JSON.stringify(saludo,null,3)}</pre>
            <h2> {array} </h2>
            <h3> {enteros} </h3>
            <p>aaaa</p>
        </>
    );
}

PrimeraApp.propTypes={
    saludo123: PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo:'soy un subtitulo'
}


export default PrimeraApp;