import React, {useCallback, useEffect} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const text = 'данные, которые отправляются с react'
        const data = {
            text
        }
        tg.sendData(JSON.stringify(data))
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[onSendData()])

    useEffect(() => {
        return tg.MainButton.show();
    },[])

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