import { useContext } from "react";
import { DataContext } from "../App";
import QuestionData from "./../data/QuestionData";

const Score = ()=>{
    const {score,setScore,setAppState} = useContext(DataContext)

    const restartApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    return(
        <div className="score">
            <h1>สรุปผลคะเเนน</h1>
            <h2>{score} / {QuestionData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score;