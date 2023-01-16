import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import {
    collection,
    getDoc,
    doc
} from "firebase/firestore";

const Read = () => {
    const [data, setdata] = useState();

    useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
        const read_data2 = async () => {
            const userdata = (collection(db, "users"));
            const usersDocRefId1 = doc(userdata, "p2");
            const usersDocId1 = await getDoc(usersDocRefId1);
            const usersDataId1 = usersDocId1.data();

            setdata(usersDataId1.id);
        };
        read_data2();
    }, []);


    return (
        <div>
            <p>{data}</p>
        </div>
    );
    
}

export default Read;