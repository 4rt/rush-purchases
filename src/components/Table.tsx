import React, { useEffect, useState } from 'react';
import { Purchases } from '../types/common';
import { formatDate } from '../utils';

interface TableProps {
    purchases: Purchases[],
    clickHandler?: (id: number) => void | null
}

const Table: React.FunctionComponent<TableProps> = ({ purchases = [], clickHandler = null }) => {

    const [list, updateList] = useState<Purchases[]>(purchases);

    useEffect(() => {
        updateList(purchases);
    }, [purchases])

    return (
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Shop</td>
                <td>Added</td>
            </tr>
            </thead>
            <tbody>
            {
                list.length > 0 ? list.map(listItem => (
                    <tr key={ listItem.id }>
                        <td>{ listItem.name }</td>
                        <td>
                            <a href={listItem.shopLink} target='_blank'>
                                { listItem.shopName }
                            </a>
                        </td>
                        <td>{ formatDate(listItem.added) }</td>
                        {
                            clickHandler && <td>
                                <button type='button' onClick={ () => clickHandler(listItem.id) }>Remove</button>
                            </td>
                        }
                    </tr>
                ))
                : <tr><td colSpan={ 3 }>List is empty</td></tr>
            }
            </tbody>
        </table>
    )
};

export default Table;