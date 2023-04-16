import React, {useCallback, useEffect} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        tg.sendData(JSON.stringify("данные, которые отправляются с react"))
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', callback)
        return () => {
            tg.offEvent('mainButtonClicked', callback)
        }
    },[])

    useEffect(() => {
        tg.MainButton.show()
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