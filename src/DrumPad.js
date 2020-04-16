import React from 'react';

class DrumPad extends React.Component {
  
    constructor(props) {
      super(props);
      this.audio=React.createRef()
    }
    
    componentDidMount() {
      document.addEventListener('keydown', this.keyDown)
    }
    
    playSound = () => {
      this.audio.current.play()
      const elem = document.getElementById(`${this.props.text}`) 
      const display = document.getElementById('display')
      display.innerHTML=`${this.props.text}`
      elem.parentElement.style.backgroundColor='orange';
      setTimeout(()=> elem.parentElement.style.backgroundColor=null, 100);
      
    }
    
    keyDown = (e) => {
      let pressedKey= e.key.toUpperCase()
      if (pressedKey===this.props.text) {
        this.playSound()
      }
      
    }
    
    render() {
      const {text, sound} = this.props
      
  
      return(
         <div className='drum-pad' id={sound} onClick={this.playSound} noselect>
          {text}
          <audio ref={this.audio} src={sound} className='clip' id={text}/>
        </div>
      )
    }
    
  }

export default DrumPad;
