export default function Card(props) {
	const img = props.ImageUrl;
	return (
		<div className="card-body">
			<div className="card-img">
				<img src={img} alt="" />
				{/* <img src={require(${this.props.imageUrl})} alt="" /> */}

				{/* <img src={`${props.ImageUrl}`} alt="My" /> */}
			</div>

			<div className="card-text">
				<div className="text-line1">
					<p className="path">📍</p>
					<p className="location">{props.location}</p>
					<a className="gmaps" href={props.googleMapsUrl}>
						View on Google Maps
					</a>
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
