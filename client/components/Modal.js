import React, {useRef, useEffect, useState} from "react";
import {ModalContainer, ModalSquare, ModalHeader, ModalContent} from "../pages/styles";

const Modal = ({ isVisible = false, title, content, onClose}) => {

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    const pleaseDontJudgeThisHackSolution =
    
    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });



    return !isVisible ? null :(
        <ModalContainer onClick={onClose}>
            <ModalSquare onClick={(e) => (e.stopPropagation())}>
                <ModalHeader>
                    <h1>
                        {title}
                    </h1>
                </ModalHeader>
                <ModalContent>
                    {content}
                </ModalContent >
            </ModalSquare>

        </ModalContainer>
    )
}
export default Modal;