import { Component } from 'react';
import './App.css';
import Time from './components/time';
import Buttons from './components/buttons';

class App extends Component {

    state = {
        h: 0,
        m: 0,
        s: 0,
        timer: null,
        works: false,
        count: 1
    }

    start = () => {
        this.startTime();
        this.setState({
            timer: setInterval(this.startTime, 1000),
            works: true,
        })
    }

    pause = () => {
        this.setState({count: this.state.count + 1});

        if(this.state.count === 2) {
            clearInterval(this.state.timer);
            this.setState({works: false, count:1});
        }

        setTimeout(() => {
            this.setState({count:1});
        }, 300)
    }

    reset = () => {
        this.setState({h:0,m:0,s:0});
    }

    stop = () => {
        clearInterval(this.state.timer);
        this.setState({
            works:false, 
            h:0,m:0,s:0
        })
    }

    startTime = () => {
        let {h, m , s} = this.state;
        let updS = s, updM = m, updH = h; 

        if(updS === 60) {
            updM++;
            updS = 0;
        }
        if(updM === 60) {
            updH++;
            updM = 0;
        }
        updS++;

        return this.setState({h:updH, m: updM, s:updS});
    }

    render() {
        const {h, m, s, works} = this.state;

        return(
            <div className='stopwatch'>
                <Time h={h} m={m} s={s} />
                <Buttons start={this.start} stop={this.stop} reset={this.reset} pause={this.pause} works={works} />
            </div>
        )
    }
}

export default App;