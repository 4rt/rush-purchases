import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Purchases, RootState } from '../types/common';
import Table from "../components/Table";

const History: React.FunctionComponent = () => {
    const { history } = useSelector((state: RootState) => state);

    const [list, filterList] = useState<Purchases[]>(history);

    useEffect(() => {
        // TODO
    }, [list])

    return (
        <main>
            <section className='column-direction'>
                <header>
                    <h1>Purchases history</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type='text' placeholder='Name...'/>
                        <input type='text' placeholder='Shop...'/>
                        <input type="text" placeholder='Added...' inputMode="numeric" pattern="[0-9]*" />
                    </form>
                </header>
                <Table purchases={ history } />
            </section>
        </main>
    )
};

export default History;
