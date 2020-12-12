import React from "react";

function Nations({nations, createCharacter}){
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
                                              </li>                                              
                                          )                                          
                                      })                                      
                                  }
                                  <button onClick={createCharacter}> Create Character for {nation.name} </button>
                                  
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