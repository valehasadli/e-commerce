import React, { useState } from "react";
import { searchEmitter } from "./events";

const Search : React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        const term: string = e.target.value;
        setSearchTerm(term);
        searchEmitter.emit('searchTermUpdated', term);
    };

    return (
        <div>
            <input
                type="text"
                value={ searchTerm }
                onChange={ handleChange }
                placeholder="Type to emit event"
            />
        </div>
    );
}

export default Search;
