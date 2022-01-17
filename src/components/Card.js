import EllipsisMenu from '../images/icon-ellipsis.svg';

const Card = ({ title, dataCurrent, dataPrevious, cardClass }) => {
  return (
    <div className={`card ${cardClass}`}>
      <div className="card__content">
        <div className="card__head">
          <h2 className='card__title'>{title}</h2>
          <img className='card__dots' src={EllipsisMenu} alt="" />
        </div>
        <div className="card__hours">
          <p className='card__current'>
            {
              dataCurrent === undefined
              ?'0'
              : dataCurrent + 'hrs'
            }
          </p>
          <p className='card__previous'>Previous -&nbsp;
            {
              dataPrevious === undefined
              ? '0'
              : dataPrevious + 'hrs'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
