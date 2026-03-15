import { useState } from 'react';

export default function PokemonTable({ initialPokemons }) {
const [busqueda, setBusqueda] = useState('');

const filtrados = initialPokemons.filter(p => 
    p.name.toLowerCase().includes(busqueda.toLowerCase())
);

return (
    <div className="contenedor-tabla">
    <input 
        type="text" 
        placeholder="Buscar Pokémon..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
    />

    <table className="tabla-pokemon">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Acción</th>
        </tr>
        </thead>
        <tbody>
        {filtrados.map((p) => (
            <tr key={p.name}>
            <td className="nombre">{p.name}</td>
            <td><a href={p.url} className="enlace">Ver JSON</a></td>
            </tr>
        ))}
        </tbody>
    </table>

    {filtrados.length === 0 && <p>No se encontraron resultados.</p>}
    </div>
);
}