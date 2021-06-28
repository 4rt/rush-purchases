import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/common';
import { removeItem, setData } from '../store/actions/purchases';
import { generateId } from '../utils';

const New: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { purchases } = useSelector((state: RootState) => state);

    const onSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            shop: { value: string };
        };

        const id = generateId();
        const name = target.name.value;
        const password = target.shop.value;
        const added = (new Date()).toISOString();

        dispatch(setData({
            id,
            name,
            password,
            added
        }));
    }

    const onDeleteClick = (id: number): void => {
        dispatch(removeItem(id));
    }

    return (
        <div>
            <h1>Add new purchase</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Name...' name='name'/>
                <input type='text' placeholder='Shop...' name='shop'/>
                <button type='submit'>+ Add</button>

            </form>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Shop</td>
                    <td>Added</td>
                </tr>
                </thead>
                <tbody>
                { purchases.map(purchase => (
                    <tr key={ purchase.id }>
                        <td>{ purchase.name }</td>
                        <td>{ purchase.shop }</td>
                        <td>{ purchase.added }</td>
                        <td>
                            <button type='button' onClick={ () => onDeleteClick(purchase.id) }>- Remove</button>
                        </td>
                    </tr>
                )) }
                </tbody>
            </table>
        </div>
    )
};

export default New;
