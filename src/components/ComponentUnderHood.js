import React from 'react'

function Welcome(){
   return <h2>Welcome</h2>
}

function Welcome1(){
    return React.createElement('h2',{},'Welcome 1')
}
function Todo(){
    return <div>
        <p>Todo title</p>
        <p>Todo desc</p>
    </div>
 }
 
 function Todo1(){
     return React.createElement('div',{},
     React.createElement('p',{},'Todo title under hood'),
     React.createElement('p',{},'Todo desc under hood')
     )
 }



function ComponentUnderHood() {
  return (
    <div>
      <Welcome />  
      <Welcome1 />  
      <Todo />  
      <Todo1 />  
    </div>
  )
}

export default ComponentUnderHood