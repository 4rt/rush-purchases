import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Purchases, RootState } from '../types/common';
import Table from '../components/Table';

type InputType = 'name' | 'shopName' | 'added'

const History: React.FunctionComponent = () => {
    const { history } = useSelector((state: RootState) => state);
    const [ list, filterList ] = useState<Purchases[]>(history);
    const [ filters, updateFilters ] = useState<{ name: string, shopName: string, date: string }>({
        name: '',
        shopName: '',
        date: ''
    });

    useEffect(() => {
        filterList(history)
    }, [history])

    const handleChange = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;
        const value = target.value;
        const filterName = target.getAttribute('name') as InputType;

        updateFilters(previousState => {
            return {...previousState, [filterName]: value}
        })
    }

    useEffect(() => {
        if (!Object.values(filters).join("")) filterList(history);

        filterList(() => {
            return [...history]
                .filter(purchase => {
                    return (purchase.name.toLowerCase()).includes(filters.name.toLowerCase())
                        && (purchase.shopName.toLowerCase()).includes(filters.shopName.toLowerCase())
                        && (purchase.added).includes(filters.date)
                })
        })
    }, [filters])

    return (
        <main>
            <section className='column-direction'>
                <header>
                    <h1>Purchases history</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type='text' placeholder='Name...' name='name' onChange={ handleChange } />
                        <input type='text' placeholder='Shop name...' name='shopName' onChange={ handleChange } />
                        <input type='text' placeholder='Added...' name='added' inputMode="numeric" pattern="[0-9]*" onChange={ handleChange } />
                    </form>
                </header>
                <Table purchases={ list } />
            </section>
        </main>
    )
};

export default History;
