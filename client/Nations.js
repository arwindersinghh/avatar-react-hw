import React from "react";

function Nations({nations, handleDelete}){
    return (
        <div>
                <h2>Nations ({nations.length})</h2>
               <ul>
                  {
                      nations.map(nation => {
                          return ( <li key = { nation.id } >
                              <a href={`#${nation.id}`}> 
                              <img src={nation.imgURL} />
                              <br />
                              { nation.name }
                              </a>
                              <ul>
                                  {
                                      nation.characters.map(character => {
                                          return (
                                              <li key = { character.id }>
                
                                                  { character.name }
                                                  <button onClick={() => handleDelete(character.id)}>x</button>                                                  
                                              </li>                                              
                                          )                                          
                                      })                                      
                                  }                                                                    
                              </ul>
                        
                        
                          </li>
                          );  
                    })
                  }  
               </ul> 
            </div>

    )
}

export default Nations;