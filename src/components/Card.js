import React from "react";


// const cardHead = 'Card'
// const cardDesc = 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text,'

            // destructuring example for array
// const name=['Sahil', 'Akram'];
// const [name1,name2]=name
// console.log(name1);
// console.log(name2);


function Card(props) {

    // destructruring 
    const {cardText,cardDesc}=props

    return (
        <div>
            {/* <div>
                <div className='card'>
                    <div className='cardHead'>{cardHead}</div>
                    <div className='cardDesc'>{cardDesc}</div>
                </div>
            </div> */}

            {/* using props */}

            <div>
                <div className='card'>
                    <div className='cardHead'>{cardText}</div>
                    <div className='cardDesc'>{cardDesc}</div>
                </div>
            </div>
        </div>
    )
}
export default Card;