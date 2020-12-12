import React from "react";

function Characters({characters}){
    return (
        <div>
                <h2>characters ({characters.length})</h2>
               <ul>
                  {
                      characters.map(nation => {
                          return ( <li key = { nation.id }>
                              { nation.name }
                              <br />
                              <img src={nation.imgURL} />
                          </li>
                          );  
                    })
                  }  
               </ul> 
            </div>

    )
}

export default Characters;