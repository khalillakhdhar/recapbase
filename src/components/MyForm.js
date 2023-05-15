import React,{ useState, useEffect } from 'react';
const MyForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '',adresse:'' });
    const [age,setAge] = useState(30);
    useEffect(() => {
        // Action à exécuter à chaque changement de l'état du formulaire
        console.log('Formulaire mis à jour :', formData);
        }, [formData]); // Dépendance sur l'état du formulaire
        const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        };
        
        const handleSubmit = event => {
            event.preventDefault();
            // Soumettre le formulaire
            console.log('Envoi du formulaire avec les données', formData);            };
    return (
        <div>
            
            <h1>Mon age est : {age}</h1>
            <form onSubmit={handleSubmit}>
Nom<input type="text" name="name" value={formData.name}
onChange={handleChange} />
Email<input type="email" name="email" value={formData.email}
onChange={handleChange} /> 
Adresse<input type="text" name="adresse" value={formData.adresse}
onChange={handleChange} /> 
<button type="submit">Envoyer</button>
<br></br>
Name:{formData.name} Email: {formData.email} Adresse: {formData.adresse}

</form>
        </div>
    );
}

export default MyForm;
