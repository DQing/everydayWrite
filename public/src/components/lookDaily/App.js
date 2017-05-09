import React, {Component} from "react";
import TodayDaily from './todayDaily';
import RecentTimeDaily from './recentTimeDaily';
import PersonalDaily from './personalDaily';

const App = React.createClass({

    render() {
        return (
            <div>
                {/*<TodayDaily/>*/}
                {/*<RecentTimeDaily/>*/}
                <PersonalDaily/>
            </div>
        )
    }
});

export default App;
