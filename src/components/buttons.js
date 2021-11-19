
const Buttons = ({start, stop, reset, pause, works}) => {

    return(
        <div className='buttons'>
            <button className='start' onClick={(works ? stop : start)}>START / STOP</button>
            <button className='reset' onClick={reset}>RESET</button>
            <button className='pause' onClick={pause}>PAUSE</button>
        </div>
    )
}

export default Buttons;