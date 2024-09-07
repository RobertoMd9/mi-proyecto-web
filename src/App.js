import React, { useEffect, useState } from 'react';
import 'whatwg-fetch';
import logo from '/logo.svg';
import './App.css'

function App() {

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch('https://jsonnplaceholder.typicode.com/posts');
        const result = await response.json();
        console.log(result);
        setdata(result);
        setLoading(false);
      }catch (error){
        console.error('Error fetching data:', error);
     setLoading(false);
    };
  };

    fetchData();
}, []);

return (
    <div className="App">
        <header className="App-header">
            <h1>Bienvenidos a mi proyecto</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        <main>
            <h2>Inicio de Pagina</h2>
            <p>Este es el contenido de la pagina</p>
            <button onClick={() => alert('Button clicked!')}>Has Click</button>
            
            <h3>Posts desde la API</h3>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                            </li>
                    ))}
                </ul>
            )}
            
        </main>
    </div>
);
}
export default App;