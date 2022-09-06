import './Barbell.css';

export default function Barbell(props) {
    return (
        <div className='barbell--bar'>
            <div className='barbell--bar-text'>
                <p>{props.weight}lb</p>
            </div>
        </div>
    );
}