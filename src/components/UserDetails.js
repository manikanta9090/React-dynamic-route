import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();

    const users = {
        1: { name: "Manikanta", email: "Manikanta@example.com" },
        2: { name: "Harsha", email: "Harsha@example.com" },
        3: { name: "Naveen", email: "Naveen@example.com" },
        4: { name: "Rohan kumar", email: "Rohankumar@example.com" }
    };

    const user = users[id];

    if (!user) {
        return <h3 > User not found❌ < /h3>;
    }

    return ( <
        div >
        <
        h2 > 👤User Details < /h2> <
        p > < strong > ID: < /strong> {id}</p >
        <
        p > < strong > Name: < /strong> {user.name}</p >
        <
        p > < strong > Email: < /strong> {user.email}</p >
        <
        /div>
    );
}

export default UserDetails;