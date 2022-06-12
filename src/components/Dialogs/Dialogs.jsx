import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
 import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";

<DialogItem />;

<Message />;

const Dialogs = (props) => {

    // let dialogs = [
    //     { id: 1, name: 'Vadym' },
    //     { id: 2, name: 'Klaudia' },
    //     { id: 3, name: 'Maksim' }
    // ];
    // let messages = [
    //     { id: 1, message: 'Hi' },
    //     { id: 2, message: 'How a you' },
    //     { id: 3, message: 'Yo' }
    // ];

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d =>  <DialogItem name={d.name} id={d.id} />  ); 
    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements }
            </div>

            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div> <textarea value={ newMessageBody }
                                    onChange = {onNewMessageChange}
                                    placeholder="Enter your message">
                                    </textarea> </div>
                    <div> <button onClick={ onSendMessageClick }>Send</button> </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;