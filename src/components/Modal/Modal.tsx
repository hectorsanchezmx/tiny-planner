import React, { FC, Dispatch, SetStateAction } from 'react';
import s from './Modal.module.scss';

const Modal:FC<{show: Dispatch<SetStateAction<boolean>>}> = ({show, children}) => {

    return (
        <div className={s.container}>
            <div className={s.close} onClick={() => show(false)}>x</div>
            <div className={s.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
