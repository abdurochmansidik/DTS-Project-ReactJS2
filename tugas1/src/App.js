import React from 'react';
import logo from './logo.svg';
import './App.css';


class Timer extends React.Component{
  constructor(props){
    super()
    this.state = {
      minutes: parseInt(props.menit),
      seconds: parseInt(props.detik),
    }
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state

        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
        } 
    }, 1000)
}
  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render(){
    const { minutes, seconds } = this.state
    return (
      <div>
        {
          minutes==0 && seconds==0 ? <h1>Selesai</h1>:<h1>Timer <br/> 
          Tersisa: {minutes}:{seconds < 10 ? '0${seconds}' : seconds}</h1>
        }
      </div>
    )
  }
}


class Stopwatch extends React.Component{
  constructor(props){
    super()
    this.state = {
      minutes: 0,
      seconds: 0,
      status: false
    }
    this.mulai = this.mulai.bind(this) 
    this.selesai = this.selesai.bind(this) 
    this.lap = this.lap.bind(this)
  }
  componentDidMount() {
    const { seconds, minutes, status } = this.state
    if(status){
      this.myInterval = setInterval(() => {
          if (seconds >= 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds + 1
            }))
          }
          if (seconds === 59) {
            this.setState(({ minutes }) => ({
              minutes: minutes + 1,
              seconds: 0
          }))
          } 
      }, 1000)
    }
  }
  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  async mulai(){
    await this.setState({status : true});
    this.componentDidMount();
  }

  selesai(){
    this.setState({status : false});
    this.componentWillUnmount();
  }

  lap(){
    console.log(this.state.minutes + " : " + this.state.seconds);
    return (
      <div>
        {
        <h1> Lap Time: 
          {this.state.minutes}
        </h1>
        }
      </div>
    );
  }


  render(){
    const { minutes, seconds, status } = this.state
    return (
      <div>
        {
          <h1> 
            Stopwatch <br/>
            {minutes}:{seconds} 
          <br/>
          <button onClick={this.mulai}> Mulai</button>
          <button onClick={this.selesai}>Selesai</button>
          <button onClick={this.lap}>Lap</button>
          </h1>
        }
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Timer menit="1" detik="0"/>
          <Stopwatch/>
        </p>
      </header>
    </div>
  );
}

export default App;