import React from 'react';

import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h3>Página não encontrada</h3>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default PageNotFound;