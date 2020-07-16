import React, { FC } from 'react';
import s from './Select.module.scss';

interface Select {
    label: string;
    name: string;
    onSelect: Function;
    options: string[];
}

export const Select: FC<Select> = ({label, name, options, onSelect }) => {
    return (
        <label>
            {label}
            <br />
            <select className={s.selectStyle} multiple name={name} onChange={(e) => onSelect(name, e)}>
                {options && options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </label>
    )
}