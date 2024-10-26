import { ChangeEvent, useEffect, useState } from "react";

interface Observation {
  taxon: {
    name: string,
    preferred_common_name: string
  }
}

export default () => {
  const kmOptions = [
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
  
  const [species, setSpecies] = useState<string[]>();
  const [obs, setObs] = useState<Observation[]>();  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      const obsEndpoint = 'https://api.inaturalist.org/v1/observations';
      const params = `?taxon_name=${species?.join(',')}&lat=${latitude}&` +
      `lng=${longitude}&radius=${kmRadius}&order=desc&order_by=created_at`;
      console.log('p', params);
      try {
        fetch(encodeURI(obsEndpoint + params)) 
          .then(res => res.json())
          .then(data => setObs(data.results));
      } catch (error) {
        console.error(error);
      }
    });
  }, [species]);

  const selectChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
    const selectedOpts = Array.from(target.selectedOptions).map(o => o.value)
    console.log('s', selectedOpts);
    setSpecies(selectedOpts);
  }
  
  return(
    <div className='container channel-container mushroom'>
      <select multiple value={species} onChange={e => selectChange(e)}>
        { speciesOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
      <select value={kmRadius} onChange={e => selectChange(e)}>
        { speciesOptions.map((spec, i) => <option value={spec} key={i}>{spec}</option>) }
      </select>
      { obs?.map((ob, i) => <div key={i}>{ ob.taxon.preferred_common_name }</div>) }
    </div>
  )
}

