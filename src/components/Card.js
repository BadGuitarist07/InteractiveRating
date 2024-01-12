import '../css/styleCard.css'
import iconStart from '../assets/images/icon-star.svg';
import ItemCard from './ItemCard';

const Card = ({handleClick}) => {
    return (
    <div className="all-card">
        <img src={iconStart} alt='iconStar'/>
        <h1 className='title-card'>How did we do?</h1>
        <p className='text-card'>
            Please let us know how we did with your support
            request. All feedbacks is appreciated to help us
            improve our offering!
        </p>
        
        <ItemCard onItemSelect={handleClick}/>
        <input 
        className='btn-card' 
        type="button" 
        value="Submit" 
        onClick={() =>  handleClick('submit')}
        />
    </div>
    )
}

export default Card