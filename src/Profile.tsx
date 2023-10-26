import React, { useState, useEffect } from "react";
import { searchEmitter } from "./events";

const Profile : React.FC = () => {
    const [lastSearch, setLastSearch] = useState('');

    useEffect(() => {
        const unsubscribe = searchEmitter.subscribe('searchTermUpdated', ( term ) => {
            setLastSearch(term);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            Last search term: { lastSearch }
        </div>
    );
}

export default Profile;
