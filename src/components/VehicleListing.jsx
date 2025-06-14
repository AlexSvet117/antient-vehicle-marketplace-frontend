import VehicleCard from "./VehicleCard"

function VehicleListing({vehicles}) {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {
                vehicles.map(vehicle => (
                    <div key={vehicle.id} className="col">
                        <VehicleCard vehicle={vehicle} />
                    </div>
                ))
            }

        </div>
      
    </div>
)
}

export default VehicleListing
