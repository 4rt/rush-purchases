import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/common';

const History: React.FunctionComponent = () => {
    const { history } = useSelector((state: RootState) => state);

    return (
        <div>
            <h1>Purchases history</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <input type='text' placeholder='Name...'/>
                    <input type='text' placeholder='Shop...'/>
                    <input type="text" inputMode="numeric" pattern="[0-9]*" />
                </form>
                {/* TODO create component to show list */}
                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Shop</td>
                        <td>Added</td>
                    </tr>
                    </thead>
                    <tbody>
                        {/* TODO show something if the list is empty */}
                        { history.map(historyItem => (
                            <tr key={ historyItem.id }>
                                <td>{ historyItem.name }</td>
                                <td>{ historyItem.shop }</td>
                                <td>{ historyItem.added }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
        </div>
    )
};

export default History;
