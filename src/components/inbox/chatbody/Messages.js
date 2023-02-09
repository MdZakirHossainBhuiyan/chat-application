import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const Messsages = ({messages = []}) => {
    const {user} = useSelector((state) => state.auth) || {};
    const {email} = user || {};

    return (
        <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">

                {
                    messages
                        .slice()  //original array er upor sort kortechi dekhe react er strict mode seta korte di na tai ekhane slice use korechi. jeta make original array er ekta copy dei
                        .sort((a, b) => a.timestamp - b.timestamp)
                        .map((message) => {
                            const {message: lastMessage, id, sender} = message || {};
                            const justify = sender.email !== email ? "start" : "end";

                            return (
                                <Message
                                    key={id}
                                    justify={justify}
                                    message={lastMessage}
                                />
                            )
                        })
                }
            </ul>
        </div>
    );
};

export default Messsages;