export const generateId = () => Math.floor(Math.random() * 100);

/**
 * Adds ordinal (suffix) to day
 * examples: 1 => 1st; 28 => 28th
 * @param { number } day
 * @return { string } formatted day.
 */
const formattedDay = (day: number): string => {
    const plurals = new Intl.PluralRules('en', { type: 'ordinal' });
    const daySuffixes = {
        zero: '',
        one: 'st',
        two: 'nd',
        few: 'rd',
        many: '',
        other: 'th'
    };
    const suffix = daySuffixes[plurals.select(day)];
    return `${day}${suffix}`;
}

export const formatDate = (date: string) => {
    let formattedDate = '';

    try {
        const d = new Date(date);
        const weekDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
        const year = d.getFullYear();
        const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const day = formattedDay(d.getDate());

        formattedDate = `${weekDay}, ${month} ${day}, ${year}, ${hours}:${minutes}`;
    } catch (error) {
        console.error(error);
    }


    return formattedDate;
}