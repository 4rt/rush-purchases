import React, { useEffect } from 'react';
import '../css/app.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/common';

const History: React.FunctionComponent = () => {
    const { data: purchases } = useSelector((state: RootState) => state);

    // const onSaveBtnClick = (): void => {
    //     sendStatuses(externalId, statuses).then(() => {
    //         setShowNotification(true);
    //         dispatch(getStatuses(externalId));
    //     })
    // }

    useEffect(() => console.log(purchases), [purchases]);

    return (
        <div>
            <h1>Purchases</h1>
            { purchases.length && purchases.map(purchase => (
                <div key={ purchase.id }>
                    <div>{ purchase.name }</div>
                    <div>{ purchase.added }</div>
                    <div>{ purchase.store }</div>
                    <div>{ purchase.price }</div>
                </div>
            )) }
            {/*<button onClick={ onSaveBtnClick } className='btn btn-primary w-50'>Save</button>*/}

        </div>
    )
};

export default History;
