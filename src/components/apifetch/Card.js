import "./Card.css"

export default function Card({nTitle,nPrice,nImage}){
    return <div className="card">
        {/* <img className="timg" src={nImage}/> */}
        <img className="timg" src={nImage} alt={nTitle} />
        <p>{nTitle}</p>
        <p> <span>Sale </span> <p className="cut">{nPrice}</p></p>
    </div>
}