import { ChangeEvent, useEffect, useState } from "react";

interface INatObservation {
  taxon: {
    name: string,
    preferred_common_name: string
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

  useEffect(() => {
    if (!radius || !species) return; // short circuit until both inputs provided
    
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
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
      <div>perennial edible mushrooms:</div>
      <select multiple value={species} onChange={e => changeSpecies(e)}>
        { speciesOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
      
      <div>radius (km)</div>
      <select value={radius} onChange={e => changeRadius(e)}>
        { radiusOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
    </div>
  )
}
