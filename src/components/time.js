
const Time = ({h, m, s}) => {

    const addZero = (x) => (x < 10) ? '0' + x : x;

    return (
        <div className='times'>
            {addZero(h)}:{addZero(m)}:{addZero(s)}
        </div>
    )
}

export default Time;