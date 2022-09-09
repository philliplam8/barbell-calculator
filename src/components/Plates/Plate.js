import './Plate.css';

export default function Plate(props) {

    return (
        <div className={`plate ${props.plateClass} ${props.plateDisplay}`}>
            <div className='plate--weight'>{props.weight}</div>
            <div className='plate--amount'>x{props.amount}</div>
        </div>
    )
}