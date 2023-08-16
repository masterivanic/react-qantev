// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { useParams } from 'react-router-dom';
import { towns } from "../data/town";
import Navbar from '../Navbar';
import '../index.css';

const TownMaps = () => {
   
    const { id } = useParams();
    const _town = towns.find(town => town.id === parseInt(id));
    const position = _town.coordinates

    return (
        <div className='App'>
            <Navbar />
            <div className='content'>
                <h2>{_town.address} - {position}</h2>
                {/* <MapContainer center={[1.3127619, 103.8545562]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer> */}
            </div>
        </div>
    );
}

export default TownMaps;