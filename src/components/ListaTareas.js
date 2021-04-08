import React from 'react';
import ListaItem from './ListaItem';

const ListaTareas = (props) => {
    return (
      <ul className="list-group">
          {
            props.tareas.map((dato, indice)=><ListaItem nombreTarea={dato} key={indice} borrarTarea={props.borrarTarea}/>) 
          }

      </ul>
    );
};

export default ListaTareas;