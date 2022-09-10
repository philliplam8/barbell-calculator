import './Plate.css';

export default function Plate(props) {

    return (
        <div className={`plate ${props.plateClass} ${props.plateDisplay}`}>
            <div className='plate--text'>{props.weight}</div>
            <div className='plate--text plate--amount'>{props.amount}</div>
        </div>
    )
}