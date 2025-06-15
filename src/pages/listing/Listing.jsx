import { useGlobalStore } from "../../hooks/useGlobalStore"
import { useParams } from "react-router"


function Listing() {

    const {store, _} = useGlobalStore()
    const {id} = useParams()
    const vehicleId = parseInt(id)

    const vehicle = store.listings.find((p) => p.id === vehicleId)

    if (!vehicle) {
        return (
            <div className="container mt-5">
                <h2>Vehicle with id {vehicleId} not found</h2>
                <p>The vehicle you are looking for doesn't exist</p>
            </div>
        )
    }

  return (
    <div className="container my-4">
        <div className="d-flex">
            <h2>Listings Page</h2>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card border">
                    <img src={vehicle.images[0].image_url} alt="..." className="card-img-top" />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Listing
