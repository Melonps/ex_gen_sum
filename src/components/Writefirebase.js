import React from 'react';
import { db } from "../firebase";
import {
    updateDoc,
    doc
} from "firebase/firestore";

const Addread = ({ id }) => {
    
    async function update(value) {
        const userRef = doc(db, "users", value);
        await updateDoc(userRef, {
            password: "changed"
        });
    }
    return (
        <button button type="button" class="btn btn-primary" onClick={update(id)} > Primary</button>
    );
    
};

export default Addread;