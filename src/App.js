import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

    const [people, setPeople] = useState(data)

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                {
                    people.length > 0 ?
                        <button onClick={() => setPeople([])}>Clear</button>
                        :
                        <button onClick={() => setPeople(data)}>Refresh</button>
                }
            </section>
        </main>
    )
}

export default App;
