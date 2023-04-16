import React, {useEffect} from 'react';
import 'Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Send data"
        })
    },[])
    return (
        <div className={"form"}>
            <h3>Input your data</h3>
        </div>
    );
};

export default Form;