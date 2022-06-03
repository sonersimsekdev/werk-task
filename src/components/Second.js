import React, { useState } from 'react'
import "./styles/_main.scss"
import "./styles/_input.scss"
import "./styles/_second.scss"
export default function Second() {
    const [stateName, SetStateName] = useState(false);
    return (
        <>
            {stateName ? <div className='main todo-page'>
                <div>Datepicker</div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>To Do</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>In Progress</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div className='section-out'>
                    <div className='section-in'>
                        <div className='emoji-button'>&#128058;</div>
                        <div>Done</div>
                    </div>
                    <div className='divField'>
                        <div>aadada</div>
                        <button className='button' type='button'>b</button>
                    </div>
                </div>
                <div><input placeholder='+New' type="email" className='inputField'></input></div>
            </div> :  <div className='main todo-page'><div><input placeholder='+New' type="email" className='inputField'></input></div></div>}
        </>
    )
}
