import { useEffect, useState } from "react";
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { fetchQuakes } from '@/services/earthquakes';
import { type EarthquakeUsgsGovResponse } from '@/types/earthquake';
import EarthquakesForm from '@/components/EarthquakesForm';

function EarthquakesContainer() {
    const [data, setData] = useState<EarthquakeUsgsGovResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    useEffect(() => { 
        let cancelled = false;
        async function fetchData() {
            try {
                const response = await fetchQuakes();

                if (!cancelled) {
                    setData(response);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err as Error);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchData();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="EarthquakesContainer">
        <h1><span role="img" aria-label="Globe">🌐</span> Earthquake Mapper (WIP) </h1>
        <div>
            Controle:
            { loading && (<>Carregando...</>)}
            { error && (<>Erro: {error?.message}</>)}
            { data && (<>Dados carregados</>)}
        </div>
        <div className="wrapper">
            <EarthquakesForm />
            <APIProvider apiKey={API_KEY}>
                <Map
                    style={{width: '85vw', height: '75vh'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling='greedy'
                    mapId='hybrid'
                />
            </APIProvider>
        </div>
        
        <p>
            This app was created based on <strong>Matthew Thorry</strong> work.
            {' '} Checkout {' '}
            <a href="https://github.com/saulobr88/earthquakes-mapper" 
            target="_blank" rel="noopener noreferrer">My GitHub repo
            </a> for more information about it.
            Feel free to contact me using {' '}
            <a href="https://www.linkedin.com/in/saulo-gomes-61175125" target="_blank" rel="noopener noreferrer">
            LinkedIn</a>.
            </p>
        </div>
    );
}

export default EarthquakesContainer;
