import React from "react";

function Topic({ match }) {
    console.log(match);

    return <h2>Topic id =  {match.params.id} </h2>;
}
export default Topic;