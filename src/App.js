import { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaTareas from './components/ListaTareas';

function App() {
  const [tareaIndividual, setTareaIndividual] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('ingresa al handleSubmit');
    setTareas([...tareas, tareaIndividual]);
    setTareaIndividual('')

  }

  const guardarTarea =(e)=>{
    console.log('ingreso a guardar tarea');
    setTareaIndividual(e.target.value);
  }
   
  const borrarTarea=(nombreTarea)=>{
    let arregloFiltrado = tareas.filter((tarea)=>tarea !== nombreTarea);
    setTareas(arregloFiltrado);
  }
  
  return (
   <Fragment>
     <div className="container">
     <div className="card mt-5 ">
       <div className="card-body text-center">
         <h1>Bienvenido</h1>
         <h5>Ingresa tus tareas</h5>
         <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
           <input type="text" placeholder='tarea 1' className='form-control w-50 me-2' onChange={guardarTarea} value={tareaIndividual}/>
           <button type='submit' className='btn btn-danger'>
            Agregar
           </button>
         </form>
         <section className='my-5'>
           <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
         </section>
       </div>
     </div>
     </div>
     

   </Fragment>
     );
}

export default App;
