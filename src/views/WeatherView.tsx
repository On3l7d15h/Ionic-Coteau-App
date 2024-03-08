import { useIonLoading, IonText, IonContent, IonNote, IonCard, IonLabel, IonItem, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonCardHeader, IonCardContent, IonImg, useIonAlert } from '@ionic/react';
import { useParams } from 'react-router';
import React from "react";
import ExploreContainer from '../components/ExploreContainer';
import { cloud, cloudCircleSharp, male, searchCircleOutline } from 'ionicons/icons';

const WeatherView: React.FC = () => {

    // VARS AND STATES
    const { name } = useParams<{ name: string; }>();
    const [weather, setWeather] = React.useState<any>([])
    const [present, dismiss] = useIonLoading();
    const [presentAlert] = useIonAlert();

    // FUNCTIONS
    const handleOnFetch = async () => {

        try
        {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&APPID=027fa0c88b5c4b221d838c4e5989a958`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        setWeather(data);
                        dismiss();
                    })
        }
        catch(e)
        {
            console.error("APP: ", e);
            presentAlert({
                header: 'Oops!',
                message: 'Este es el error ' + e,
                buttons: ['Cerrar'],
            })
        }

        
        dismiss();
    }

    const handleMonth = (m: number) => {
        switch(m)
        {
            case 1:
                return "Enero"
            case 2:
                return "Febrero"
            case 3:
                return "Marzo"
            case 4:
                return "Abril"
            case 5:
                return "Mayo"
            case 6:
                return "Junio"
            case 7:
                return "Julio"
            case 8:
                return "Agosto"
            case 9:
                return "Septiembre"
            case 10:
                return "Octubre"
            case 11:
                return "Noviembre"
            case 12:
                return "Diciembre"
        }
    }

    const handleCastingCelsius = (num: number) => {
        return (num - 273.15).toFixed(2);
    }


    // USE EFFECTS
    React.useEffect(() => {
        if(weather.length === 0)
        {
            handleOnFetch()
        }

        return () => {}

    }, [weather])

    React.useEffect(() => {
        present({
            message: "Cargando...",
        })
    }, [])

    return (
        <IonContent>
            
            <div className="w-full min-h-full flex flex-col justify-center items-center">
                
                {/* Number */}
                <IonText 
                    className="w-full opacity-50 text-8xl font-bold text-center my-4"
                    color="primary"
                >
                    05
                </IonText>

                <IonText 
                    className="w-full text-4xl font-bold text-center my-4"
                >
                    Clima (RD)
                </IonText>

                <IonNote 
                    className="my-4 w-3/4 text-center -indent-[137px]"
                >
                   ¡Saludos! 🔥✨ <br />
                   Para el día de hoy: {new Date().getDate()} de { handleMonth(new Date().getMonth()) }  { new Date().getFullYear()}
                </IonNote>

                {
                    weather.length === 0
                    ?
                        "Nada"
                    :
                    <IonCard className="w-4/5 flex flex-row justify-between items-center">
                        <IonCardHeader className="w-1/2 bg-blue-500 p-0 m-4 overflow-hidden rounded-3xl">
                            <IonImg
                                className="w-full rounded"
                                src="https://imgs.search.brave.com/16TarUra6paxuJUX3AylUb1Wjc1Si5JSPeQsjoL5-oM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTc5/NDQ4MTA2L2RlL2Zv/dG8vc2FudG8tZG9t/aW5nby1jYXRoZWRy/YWwtZG9taW5pY2Fu/LXJlcHVibGljLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/dkY5bTlmOEZhUnBH/UjZ5MnMwOU9DUkNM/ejgtTlI1MHEwN2tr/SHdZTldVPQ" 
                            />
                        </IonCardHeader>
                        <IonCardContent className="w-1/2">

                            <div className="w-full text-center">
                                <IonTitle className="w-full font-bold">
                                    Sto. Dgo.
                                </IonTitle>
                                <small>
                                    República Dominicana
                                </small>
                            </div>

                            <div className="mt-8 flex flex-row">
                                <section className="w-full flex flex-col">
                                    <h1 className="w-full text-left">
                                        {handleCastingCelsius(weather?.main?.temp)} °C
                                    </h1>
                                    <IonText className="w-full text-left ">
                                        {weather?.weather[0].description}
                                    </IonText>
                                </section>

                                <section className='w-full flex justify-center items-center'>
                                    <IonIcon 
                                        md={cloud} 
                                        ios={cloud}
                                        className="scale-[3.5]"
                                    >    
                                    </IonIcon>
                                </section>
                            </div>
                        </IonCardContent>
                    </IonCard>
                }

            </div>

        </IonContent>
    );
};

export default WeatherView;
