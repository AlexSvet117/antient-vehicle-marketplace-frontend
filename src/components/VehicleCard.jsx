import { Link } from "react-router";

function VehicleCard({ vehicle }) {

    const formatPriceUS = new Intl.NumberFormat('en-US', {
        style:'currency', 
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(vehicle.price)


  return (
    <Link to={"/listings/id"} className="text-decoration-none">
      <div className="card">
        {/* <img src={vehicle.images[0].image_url} className="card-img-top" alt="Car Image" /> */}
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {formatPriceUS}
          </h5>
          <div className="gap-2 mb-2">
            <span>{vehicle.make} {vehicle.model} </span>
            <span> | </span>
            <span>{vehicle.year} </span>
            <span> | </span>
            <span>{vehicle.milage} miles</span>
          </div>
          <p className="card-text fw-bolder">
            {vehicle.title}

          </p>
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;
