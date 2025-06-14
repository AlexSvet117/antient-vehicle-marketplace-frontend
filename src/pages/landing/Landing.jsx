import Hero from "../../components/Hero/Hero.jsx";
import VehicleCard from "../../components/VehicleCard.jsx";
import VehicleListing from "../../components/VehicleListing.jsx";
import { useGlobalStore } from "../../hooks/useGlobalStore.js";

function Landing() {
  const { store, dispatch } = useGlobalStore();
  return (
    <div className="container-fluid">
      <div>
        <Hero />
      </div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h3 mb-1">Best Certified Cars</h2>
            <p className="text-muted mb-0">Based on recently viewed</p>
          </div>
        </div>
        <VehicleListing vehicles={store.listings.slice(0, 4)} />
      </div>
    </div>
  );
}

export default Landing;
