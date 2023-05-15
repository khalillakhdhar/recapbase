import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>A propos de moi</h1>
            <img className="pphoto" src="./img/me.jpg"></img>
            <table>
                <tr><td>nom</td><td>Khalil Lakhdhar</td></tr>
                <tr><td>Adresse</td><td>Gabés</td></tr>
                <tr><td>tel</td><td>....</td></tr>
            </table>
        </div>
    );
}

export default Home;
