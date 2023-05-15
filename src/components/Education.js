import React from 'react';

const Education = () => {
    return (
        <div>
            <h1>Mon parcrours</h1>
            <table className="table table-bordered">
<thead className="table-primary">
    <tr>
        <th>Logo</th>
        <th>Année</th>
        
        <th>Diplome</th>
        <th>Etablissement</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzDD4W4EAIlcE8E6XV-W68SWCyZk0Qw5FNeWcsUoAjF_h8Ara-AkT3IxGZ27sGzpPDQE&usqp=CAU"></img></td>
        <td>2009-2012</td>
        <td>licence</td>
        <td>Faculté des sciences de Gabés</td>
    </tr>
    <tr>
        <td><img className="logo" src="https://ut.uvt.tn/pluginfile.php/1/theme_lambda/logo/1605085812/logo-1000-700px.png"></img></td>
        <td>2012-2014</td>
        <td>Mastére</td>
        <td>UVT</td>
    </tr>
    <tr>
        <td><img className="logo" src="https://www.univ-lyon1.fr/images/www/LogoUCBL1.png"></img></td>
        <td>2015-2018</td>
        <td>Doctorat</td>
        <td>Université C.B 1 Lyon</td>
    </tr>
</tbody>
            </table>
        </div>
    );
}

export default Education;
