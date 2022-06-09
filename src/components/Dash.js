import React, { useEffect, useState } from "react";
import "./styles/_login.scss";
import "./styles/_input.scss";
import "./styles/_dash.scss";
import "./styles/_button.scss";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, stateAdd } from "..//redux/features/userSlice";
import { auth, db } from "../firebase/firebase";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
    doc,
    setDoc,
    Timestamp,
    getDocs,
    collection,
    writeBatch,
} from "firebase/firestore";


export default function Dash() {
    const [toggle, setToggle] = useState(true);
    const [task, setTask] = useState([]);
    const state = useSelector((state => state.tasks));
    const [input, SetInput] = useState(null);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null)
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    let length = task.length;

    /*await setDoc(doc(db, "todos", "todo4"), {
                task: input,
                timeStamp:Timestamp.fromDate(new Date())
              }); */

    async function postAdd() {
        const usersCollectionRef = doc(db, "todos", uuidv4());
        try {
            await setDoc(
                usersCollectionRef,
                {
                    task: input,
                    timeStamp: Timestamp.fromDate(new Date()),
                },
                { capital: true },
                { merge: true }
            );
            alert("Added");
            SetInput("");
        } catch (e) {
            console.log(e);
        }
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
        setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        /* dispatch(
            stateAdd({
                task:task.task,
                timeStamp:task.Timestamp,
                id:task.id,
            })
        ) */
    }
    console.log(task)
    /* async function update() {
            const data = await doc(collection(db, "todos"));
            batch.update(data, {"population": 1000000});
        } */

    function toggleInput() {
        setToggle(false);
    }

    useEffect(() => {
        firebaseToState();
    }, []);
    console.log(task)
    return (
        <>
            {user ? (
                <div>
                    {length !== 0 ? (
                        <div className="main todo-page">
                            <div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    placeholderText={'dd/mm/yyyy'}
                                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                                    showYearDropdown // year show and scrolldown alos
                                    scrollableYearDropdown
                                />
                             
                            </div>
                            <div className="section-out">
                                <div className="section-in">
                                    <div className="emoji-button">&#128058;</div>
                                    <div>To Do</div>
                                </div>
                                <div className="divField">
                                    <ul className="ulClass">
                                        {toggle ? (
                                            task.map((item) => (
                                                <li
                                                    key={item.id}
                                                    onDoubleClick={() => {
                                                        setToggle(false);
                                                    }}
                                                    className="liClass"
                                                    id={item.id}
                                                >
                                                    {item.task}
                                                </li>
                                            ))
                                        ) : (
                                            <input
                                                placeholder="+New"
                                                type="text"
                                                id="texst"
                                                value={input}
                                                className="inputField"
                                                onChange={(e) => SetInput(e.target.value)}
                                                onKeyPress={(e) => e.key === "Enter" && postAdd()}
                                            ></input>
                                        )}
                                    </ul>
                                </div>
                            </div>


                            <div className="section-out">
                                <div className="section-in">
                                    <div className="emoji-button">&#128058;</div>
                                    <div>In Progress</div>
                                </div>
                                <div className="divField">
                                    <ul className="ulClass">

                                        <li className="liClass">
                                            static element
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="section-out">
                                <div className="section-in">
                                    <div className="emoji-button">&#128058;</div>
                                    <div>Done</div>
                                </div>
                                <div className="divField">
                                    <ul className="ulClass">

                                        <li className="liClass">
                                            static element
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div>
                                <input
                                    placeholder="+New"
                                    type="text"
                                    value={input}
                                    className="inputField"
                                    onChange={(e) => SetInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && postAdd()}
                                ></input>
                            </div>
                            <div>
                                <button type="button" onClick={logoutOfApp} className="buttonField">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="main todo-page">
                            <div>
                                <input
                                    placeholder="+New"
                                    type="text"
                                    value={input}
                                    className="inputField"
                                    onChange={(e) => SetInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && postAdd()}
                                ></input>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    );
}
