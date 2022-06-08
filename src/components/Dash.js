import React, { useEffect, useState } from 'react'
import "./styles/_main.scss"
import "./styles/_input.scss"
import "./styles/_second.scss"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { logout, stateAdd, selectUser } from '..//redux/features/userSlice';
import { auth, db, } from '../firebase/firebase';
import { doc, setDoc, Timestamp, getDocs, collection } from "firebase/firestore";
export default function Dash() {

    const [toggle, setToggle] = useState(true)
    const [task, setTask] = useState([]);
    //const state = useSelector((state => state.tasks));
    const [input, SetInput] = useState(null)
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    let length = task.length

    /*await setDoc(doc(db, "todos", "todo4"), {
            task: input,
            timeStamp:Timestamp.fromDate(new Date())
          }); */

    async function postAdd() {
        const usersCollectionRef = doc(db, 'todos', uuidv4());
        try {
            await setDoc(usersCollectionRef, {
                task: input,
                timeStamp: Timestamp.fromDate(new Date())
            }, { capital: true }, { merge: true });
            alert("Added")
            SetInput("")
        } catch (e) { console.log(e) }
    }

    /*   async function firebaseToState() {
          const querySnapshot = await getDocs(collection(db, "todos"));
          querySnapshot.forEach((doc) => {
              dispatch(
                  stateAdd({
                      title: setTitle(doc.data()),
                      time: setTimeStamp(doc.id()),
                  })
              )
          })
      } */

    /* async function firebaseToState() {
        const data = await getDocs(collection(db, "todos"));
        //console.log(data.docs)
        setTask(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
        dispatch(
            stateAdd({
                title: task.task,
                id: task.id,
            })
        )
    }
     */

    async function firebaseToState() {
        const data = await getDocs(collection(db, "todos"));
        //console.log(data.docs)
        setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => { firebaseToState() }, [task])


    return (
        <>
            {user ?
                <div>
                    {length != 0 ?
                        <div className='main todo-page'>
                            <div>Datepicker</div>
                            <div className='section-out'>
                                <div className='section-in'>
                                    <div className='emoji-button'>&#128058;</div>
                                    <div>To Do</div>
                                </div>
                                <div className='divField'>
                                    <div>aadada</div>

                                </div>
                            </div>
                            <ul className='ulClass'>
                             {task.map((item) => <li onDoubleClick={() => { setToggle(false) }} className='liClass' key={item.id} id={item.id}>{item.task}</li>)}
                            </ul>

                            <div><input placeholder='+New' type="email" className='inputField'  value={input} onChange={(e) => SetInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && postAdd()}></input></div>
                            <div><button type="button" onClick={logoutOfApp} className='button'>Log Out</button></div>
                        </div>
                        : <div className='main todo-page'>
                            <div>
                                <input placeholder='+New' type="email" value={input} className='inputField' onChange={(e) => SetInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && postAdd()}></input>
                            </div></div>
                    }</div>
                : ''}
        </>
    )
}
