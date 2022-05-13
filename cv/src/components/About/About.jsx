import React from 'react';

// import { FaBeer } from 'react-icons/fa';

export default function About() {
    return (
        <div id='About'>
            <div id='about-me'>
                <h2 className='about-titles'>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor debitis archi</p>
                <h3>hoby</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum atque quis quod dignissimos, rerum quas libero incidunt odio excepturi aperiam, earum, voluptatum illum explicabo numquam blanditiis soluta quisquam deleniti! Reprehenderit inventore veritatis obcaecati voluptates tempora non est accusamus, numquam aut suscipit odio earum, repudiandae eligendi eaque. Corporis dicta, labore, voluptatum, quaerat optio doloremque velit a veritatis assumenda officiis provident impedit! Modi saepe aperiam ut nesciunt illo! Distinctio esse quae delectus harum repellat eos voluptate nisi nesciunt totam. Vero, velit earum culpa modi error, facilis itaque voluptate tempore quia quod dolorem. Accusantium adipisci aliquid vero. Soluta totam harum ducimus doloremque nam ea earum sit labore adipisci aperiam? Reprehenderit fugiat animi esse.</p>
            </div>
            <div id='information-div' >
                <h2 className='about-titles'>Information</h2>
                <table id='info-table' >
                    <tr>
                        <td className='obj-info'>EMAIL</td>
                        <td>pashapourmehdi@gmail.com</td>      
                    </tr>
                    <tr>
                        <td className='obj-info'>PHONE</td> 
                        <td>+31-(0)630-015-221</td>
                    </tr>
                    <tr>
                        <td className='obj-info'>ADDRESS</td>
                        <td>Echt</td>
                    </tr>
                    <tr>
                        <td className='obj-info'>LANGUAGE</td>
                        <td>English -Dutch(Nederlands) - Farsi </td>  
                    </tr>
                </table>
            </div>
        </div>
        // <span className='var'>{params.username}</span> <span className='var'>{params.id} </span>   <span className='var'>{params.address}</span>
    )
}
