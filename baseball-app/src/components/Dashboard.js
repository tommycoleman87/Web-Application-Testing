import React, {useState} from 'react';
import Display from './Display';
const Dashboard = () => {
    const [balls,setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const baseballEventHandler =(e)=> {
        if(e.target.name === 'strike' && strikes < 2) {
            setStrikes(strikes + 1)
        } else if(e.target.name === 'ball' && balls < 3) {
            setBalls(balls + 1)
        } else if(e.target.name === 'foul' && strikes < 2) {
            setStrikes(strikes + 1)
        } else if(e.target.name === 'foul' && strikes === 2) {
            return;
        } else {
            setBalls(0);
            setStrikes(0);
        }
    }
    return (
        <div>
            <Display balls={balls} strikes={strikes} />
            <button name='strike' onClick={baseballEventHandler}>Strike</button>
            <button name='foul' onClick={baseballEventHandler}>Foul</button>
            <button name='hit' onClick={baseballEventHandler}>Hit</button>
            <button name='ball' onClick={baseballEventHandler}>Ball</button>
        </div>
    )
}

export default Dashboard;