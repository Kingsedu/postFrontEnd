import {  ModalProps } from "../..";
import classes from "./Modal.module.css";

export default function Modal(
    {children, propHideModalHandler}: ModalProps) {
    return (
        <>
        <div 
        className={classes.backdrop} 
        onClick={propHideModalHandler}
        />
        <dialog open className={classes.modal}>
            {children}
        </dialog>
        </>
    )
}
