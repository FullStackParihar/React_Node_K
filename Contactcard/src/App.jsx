import React from 'react';
import ContactCard from "./components/ContactCard";
import contacts from './utility/data';

const App = () => {
    return (
        <div>
            <ContactCard contacts={contacts} />
        </div>
    );
};

export default App;
