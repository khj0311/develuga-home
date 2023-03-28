import React, {useEffect} from 'react';
import Navigation from './components/navigation/index.js';
import Visual from './components/visual/index.js';
import Cards from './components/cards/index.js';
import Grid from './components/grid/index.js';
// import Contact from './components/contact/index.js';

class Header extends React.Component {
    render() {
        return (
            <h1 className='blind'>Develuga | Home</h1>
        )
    }
}
class Contents extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <div id='develuga-contents' className='develuga'>
                    <Cards/>
                    <Navigation/>
                    <Visual/>
                    <Grid/>
                    {/* <Contact/> */}
                </div>
            </>
        )
    }
}

export default function App() {
    useEffect(() => {
        // document.title = 'Develuga | Home';
    }, []);

    return (<Contents/>);
}