export default function Card(props) {
	const cardImg = props.imageUrl;
	return (
		<div className="card-body">
			<img className="card-img" src={cardImg} alt="My" />
			<div className="card-text">
				<div className="text-line1">
					<p className="location">
						<i className="fa fa-map-marker"></i>&nbsp;
						{props.location.toUpperCase()}
					</p>
					<p className="gmaps">
						<a className="gmaps" href={props.googleMapsUrl}>
							View on Google Maps
						</a>
					</p>
				</div>
				<div className="text-line2">
					<h1 className="title">{props.title}</h1>
					<p className="date">
						{props.startDate} - {props.endDate}
					</p>
					<p className="description">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
