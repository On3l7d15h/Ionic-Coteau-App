import { useIonLoading, IonText, IonContent, IonNote, IonList, IonLabel, IonItem, IonTitle, IonToolbar, IonInput, IonIcon, IonButton } from '@ionic/react';
import { useParams } from 'react-router';
import React from "react";
import ExploreContainer from '../components/ExploreContainer';
import { femaleOutline, femaleSharp, male, maleOutline, maleSharp, searchCircleOutline } from 'ionicons/icons';

const GenderView: React.FC = () => {

    // VARS AND STATES
    const { name } = useParams<{ name: string; }>();
    const [username, setUserName] = React.useState({
        username: "",
        gender: ""
    })
    const [present, dismiss] = useIonLoading(); 

    // FUNCTIONS
    const handleOnChange = (e: any) => {
        setUserName(username => username = {
            ...username, 
            [e.target.name]: e.target.value
        });
    }

    const handleOnFetch = async () => {

        present({
            message: "Cargando..."
        })

        try
        {
            await fetch(`https://api.genderize.io/?name=${username.username}`)
                .then((res) => res.json())
                .then((info) => setUserName((v) => v.gender = info))
                .catch()
        }
        catch(e)
        {
            console.error("APP: ", e)
        }

        dismiss();
    }

    // USE EFFECTS

    return (
        <IonContent>
            
            <div className="w-full h-full flex flex-col justify-center items-center">
                
                {/* Number */}
                <IonText 
                    className="w-full opacity-50 text-8xl font-bold text-center my-4"
                    color="primary"
                >
                    02
                </IonText>

                 
                <IonText 
                    className="w-full text-4xl font-bold text-center my-4"
                >
                    Sexo en base a nombre
                </IonText>

                <IonNote 
                    className="my-4 w-3/4 text-center"
                >
                    Este apartado, busca identificar el sexo de una persona en base a su nombre. 🔥✨
                </IonNote>

                <IonList className="md:w-3/6 sm:w-4/6 my-3">
                    <IonItem>
                        <IonLabel></IonLabel>
                        <IonInput 
                            name="username" 
                            onIonInput={(e) => handleOnChange(e)} 
                            className="outline-none rounded" 
                            placeholder="Nombre"
                        /> 
                        
                        <IonButton onClick={() => handleOnFetch()}>
                            <IonIcon className="scale-125" md={searchCircleOutline}></IonIcon>
                        </IonButton>
                    </IonItem>
                </IonList>

                <span 
                    className={`my-4 w-32 h-32 flex justify-center items-center text-center ${username.gender === "male" ? "bg-blue-400" : "bg-pink-500"}`}
                >
                    {
                        username.gender !== "male"
                        ?
                            <IonIcon ios={femaleOutline} md={femaleSharp} className="scale-[3.5]">

                            </IonIcon>
                        :
                        <IonIcon ios={maleOutline} md={maleSharp} className="scale-[3.5]">

                        </IonIcon>
                    }
                </span>

                
            </div>

        </IonContent>
    );
};

export default GenderView;
