import React from "react";
import { Link } from "react-router-dom";

function UserList() {
    const users = [
        { id: 1, name: "Manikanta" },
        { id: 2, name: "Harsha" },
        { id: 3, name: "Naveen" },
        { id: 4, name: "Rohan kumar" }
    ];

    return ( <
        div >
        <
        h2 > 👥User List < /h2> <
        ul > {
            users.map((user) => ( <
                li key = { user.id } >
                <
                Link to = { `/user/${user.id}` } > { user.name } < /Link> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default UserList;