import React from 'react'
import Data from '../data.json'
import Card from './Card';


// let items = []
//  for loop example

// for (let index = 0; index < Data.length; index++) {
//   items.push(<Card  key={index} cardText={Data[index].title} cardDesc={Data[index].desc} />) 
// }
// map funtion example
// items=Data.map((item)=><Card cardText={item.title}  cardDesc={item.desc}/>)
function CardMapFuntion() {
    return (
        <div>
             
             {/* {items} */}

            {/* map funtion using inside html */}

            {Data.map((item, index) => <Card key={index} cardText={item.title} cardDesc={item.desc} />)}

            {/* Nested map funtion */}

            {details.map((user, index) =>
            (
                <article key={index}>
                    <div>
                        <h3>Name :- {user.Name}</h3>
                        <p>Age :- {user.age}</p>
                        {
                            user.phone.map((ph, index) => (
                                <div key={index}>
                                    <p>{ph.home}</p>
                                    <p>{ph.office}</p>
                                </div>
                            ))
                        }
                    </div>
                </article>
            )
            )}
        </div>
    )
}

const details = [
    { Name: 'Rabiul Sk', age: '23', phone: [{ home: '25146398', office: '4758961' }] },
    { Name: 'Sahil Sk', age: '18', phone: [{ home: '56281', office: '847596' }] },
    { Name: 'Rahul Sk', age: '28', phone: [{ home: '85479', office: '78596859' }] },
  ]
  
export default CardMapFuntion