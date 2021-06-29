import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Purchases, RootState } from '../types/common';
import Table from '../components/Table';

type InputType = 'name' | 'shopName' | 'added'

const History: React.FunctionComponent = () => {
    const { history } = useSelector((state: RootState) => state);
    const [list, filterList] = useState<Purchases[]>(history);

    useEffect(() => {
        filterList(history)
    }, [history])

    const handleChange = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;
        const value = target.value;

        if (!value) {
            filterList(history)
        } else {
            const filterName = target.getAttribute('name') as InputType;

            filterList(() => {
                // TODO: use switch?
                if (filterName === 'name') {
                    return [...history].filter(purchase => (purchase.name.toLowerCase()).includes(value.toLowerCase()));
                } else if (filterName === 'shopName') {
                    return [...history].filter(purchase => (purchase.shopName.toLowerCase()).includes(value.toLowerCase()));
                } else if (filterName === 'added') {
                    // TODO: check this filter
                    return [...history].filter(purchase => (purchase.added).includes(value));
                } else {
                    return [...history];
                }
            })
        }
    }

    return (
        <main>
            <section className='column-direction'>
                <header>
                    <h1>Purchases history</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type='text' placeholder='Name...' name='name' onChange={ handleChange } />
                        <input type='text' placeholder='Shop name...' name='shopName' onChange={ handleChange } />
                        <input type="text" placeholder='Added...' name='added' inputMode="numeric" pattern="[0-9]*" onChange={ handleChange } />
                    </form>
                </header>
                <Table purchases={ list } />
            </section>
        </main>
    )
};

export default History;
