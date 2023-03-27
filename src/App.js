import React, {useEffect} from 'react';
import Navigation from './components/navigation/index.js';
import Visual from './components/visual/index.js';
import Cards from './components/cards/index.js';
import Contact from './components/contact/index.js';

class Contents extends React.Component {
    render() {
        return (
            <div id='develuga-contents' className='develuga'>
                <Navigation/>
                <Visual/>
                <Cards/>
                <Contact/>
            </div>
        )
    }
}

export default function App() {
    useEffect(() => {
        // document.title = 'Develuga | Home';
    }, []);

    return (<Contents />);
}