const Card = ({url, description, title}) => {
    return (
        <div className="container">
            <div className="card">
                <img src={url} alt={description} className="card-img" />
                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;