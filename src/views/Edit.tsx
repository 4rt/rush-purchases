import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/common';
import { removeItem, setData } from '../store/actions/purchases';
import { generateId } from '../utils';
import Table from '../components/Table';

const Edit: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { purchases } = useSelector((state: RootState) => state);

    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            shopName: { value: string };
            shopLink: { value: string };
        };

        const id = generateId();
        const name = target.name.value;
        const shopName = target.shopName.value;
        const shopLink = target.shopLink.value;
        const added = (new Date()).toISOString();

        dispatch(setData({
            id,
            name,
            shopName,
            shopLink,
            added
        }));

        target.name.value = '';
        target.shopName.value = '';
        target.shopLink.value = '';
    }

    const onDeleteClick = (id: number): void => {
        dispatch(removeItem(id));
    }

    return (
        <div>
            <h1>Add new purchase</h1>
            <form onSubmit={ onSubmit }>
                <input type='text' placeholder='Name...' name='name'/>
                <input type='text' placeholder='Shop name...' name='shopName'/>
                <input type='text' placeholder='Shop link...' name='shopLink'/>
                <button type='submit'>+ Add</button>
            </form>
            <Table purchases={ purchases } clickHandler={ onDeleteClick } />
        </div>
    )
};

export default Edit;
