import React, { Component } from 'react';
import "./estilo.css";
class CardNota extends Component {
    render() {
        return (
            <section >
                <head>
                    <h3 className='card-nota'>Título</h3>
                </head>
                <p>Escreva sua nota</p>
            </section>
        );
    }
}

export default CardNota;
