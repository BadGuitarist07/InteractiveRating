import imgRating from '../assets/images/illustration-thank-you.svg';
import '../css/styleThanks.css'

const Thanks = ({selectedRating}) => {
    return (
    <div className="all-card-thanks">
        <img src={imgRating}  alt='imgRating'/>
        <p className='text-card-rating'>
            You selected {selectedRating} out of 5
        </p>
        <h1 className='title-card-thanks'>Thank you!</h1>
        <p className='text-card-thanks'>
            PWe appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to
            get in touch.
        </p>
    </div>
    )
}

export default Thanks