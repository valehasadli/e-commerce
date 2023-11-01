import React, { useState, useEffect } from "react";
import { searchEmitter } from "./events";

const AnotherBox: React.FC = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const unsubscribe = searchEmitter.subscribe('searchTermUpdated', (term: string) => {
            const text = `${term} - Another component listening the same event`;
            setText(text);
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

export default AnotherBox;
