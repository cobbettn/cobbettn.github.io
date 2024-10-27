import { ChangeEvent, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from 'leaflet'

interface INatObservation {
  taxon: {
    name: string,
    preferred_common_name: string,
  },
  observed_on_details: {
    date: string
  },
  location: string,
  geojson: {
    coordinates: [number, number]
  }
}

export default () => {
  const radiusOptions = [
    5,
    10,
    25,
    50,
    100
  ];
  const speciesOptions = [
    'Laetiporus sulphureus',
    'Morchella americana',
    'Grifola frondosa'
  ];

  const [observations, setObservations] = useState<INatObservation[]>(); 
  const [species, setSpecies] = useState<string[]>([speciesOptions[0]]);
  const [radius, setRadius] = useState<number>(radiusOptions[2]); // 25km yields better testing results
  const [location, setLocation] = useState<LatLngExpression>();
  
  useEffect(() => {
    if (!radius || !species) return; // short circuit until both inputs provided
    
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      setLocation([latitude, longitude]);
      const obsEndpoint = 'https://api.inaturalist.org/v1/observations';
      const params = `?taxon_name=${species?.join(',')}&lat=${latitude}&` +
      `lng=${longitude}&radius=${radius}&order=desc&order_by=created_at`;
      try {
        fetch(encodeURI(obsEndpoint.concat(params))) 
          .then(res => res.json())
          .then(data => setObservations(data.results));
      } catch (error) {
        console.error(error);
      }
    });
  }, [species, radius]);

  const changeSpecies = ({target}: ChangeEvent<HTMLSelectElement>) => setSpecies(Array.from(target.selectedOptions).map(o => o.value));
  const changeRadius = ({target}: ChangeEvent<HTMLSelectElement>) => setRadius(Number(target.value));
      
  return(
    <div className='container channel-container mushroom'>
      perennial edible mushrooms:
      <select multiple value={species} onChange={e => changeSpecies(e)}>
        { speciesOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
      radius (km)
      <select value={radius} onChange={e => changeRadius(e)}>
        { radiusOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
      {
        location &&
        <MapContainer style={{width: "100%", height: "100%"}} center={location} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { observations?.map((o, i) => 
              <Marker key={i} position={[o.geojson.coordinates[1], o.geojson.coordinates[0]]}>
                <Popup>
                  {o.taxon.preferred_common_name +" "+ o.geojson.coordinates[0] + " , " + o.geojson.coordinates[1]}
                </Popup>
              </Marker>
            )
          }
        </MapContainer>
      }

    </div>
  )
}
