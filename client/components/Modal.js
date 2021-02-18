import React from "react";
import {ModalContainer, ModalSquare, ModalHeader, ModalContent, ModalExit} from "../pages/styles";

const Modal = ({ isVisible = false, title, content, onClose}) => {

    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };
    
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
                <ModalExit onClick={onClose}>
                    <svg width="30" height="30" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.06066" y1="1.93934" x2="41.0607" y2="38.9393" stroke="black" stroke-width="3"/>
                        <line x1="1.93934" y1="38.9393" x2="38.9393" y2="1.93934" stroke="black" stroke-width="3"/>
                    </svg>

                </ModalExit>
            </ModalSquare>

        </ModalContainer>
    )
}
export default Modal;