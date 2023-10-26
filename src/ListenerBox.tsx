import React, { useState, useEffect } from "react";
import { searchEmitter } from "./events";

const ListenerBox: React.FC = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const unsubscribe = searchEmitter.subscribe('searchTermUpdated', (term: string) => {
            const randomText = `${term} - ${Math.random().toString(36).substring(7)}`;
            setText(randomText);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div className="box">
            {text}
        </div>
    );
}

export default ListenerBox;
