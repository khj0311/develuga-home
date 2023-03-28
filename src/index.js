import React from 'react';
import ReactDOM from 'react-dom/client';

// Commmon Style
import './common/css/reset.css';
import './common/css/develuga.scss';
import './index.scss';

// Component Style
import './components/navigation/index.scss';
import './components/visual/index.scss';
import './components/cards/index.scss';
import './components/grid/index.scss';
// import './components/contact/index.scss';

// Common Javascript
import './common/js/develuga.common.initialize';
import './common/js/develuga.common.smoothScroll';

import App from './App';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
