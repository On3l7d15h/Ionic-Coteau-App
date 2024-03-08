import { IonText, IonContent, IonNote, IonList, IonLabel, IonItem, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, useIonLoading, useIonAlert } from '@ionic/react';
import { useParams } from 'react-router';
import React from "react";
import ExploreContainer from '../components/ExploreContainer';
import { male, searchCircleOutline } from 'ionicons/icons';

const UView: React.FC = () => {

    // VARS AND STATES
    const { name } = useParams<{ name: string; }>();
    const [country, setCountry] = React.useState<string>("")
    const [universities, setU] = React.useState<any>([])
    const [present, dismiss] = useIonLoading()
    const [presentAlert] = useIonAlert();

    // FUNCTIONS
    const handleOnChange = (e: any) => {
        setCountry(e.target.value);
    }

    const handleOnFetch = async () => {

        present({
            message: "Cargando..."
        })

        try
        {
            await fetch(`http://universities.hipolabs.com/search?country=${country}`)
                .then((res) => res.json())
                .then((info) => {

                    if (info.length === 0) {
                        presentAlert({
                            header: 'Oops!',
                            message: 'Este error es debido a que oh bien el nombre está mal escrito, o estas intentando escribir en español, trate de hacerlo en inglés.',
                            buttons: ['Cerrar'],
                        })
                    }
                    
                    setU(info)

                })
                .catch()  
        }
        catch(e)
        {
            presentAlert({
                header: 'Oops!',
                message: 'Este error es ' + e,
                buttons: ['Cerrar'],
            })
            console.error("APP: ", e)
        }

        dismiss();
        
    }

    return (
        <IonContent>
            
            <div className="w-full min-h-full flex flex-col justify-center items-center">
                
                {/* Number */}
                <IonText 
                    className="w-full opacity-50 text-8xl font-bold text-center my-4"
                    color="primary"
                >
                    04
                </IonText>

                <IonText 
                    className="w-full text-4xl font-bold text-center my-4"
                >
                    Universidades
                </IonText>

                <IonNote 
                    className="my-4 w-3/4 text-center"
                >
                    ¿Deseas ir a alguna universidad en algún otro país? Este apartado es para tí. 🔥✨
                </IonNote>

                <IonList className="md:w-3/6 sm:w-4/6 my-3 mb-9">
                    <IonItem>
                        <IonLabel></IonLabel>
                        <IonInput 
                            name="username" 
                            onIonInput={(e) => handleOnChange(e)} 
                            className="outline-none rounded" 
                            placeholder="País a buscar..."
                        /> 
                        
                        <IonButton onClick={() => handleOnFetch()}>
                            <IonIcon className="scale-[20rem]" md={searchCircleOutline}></IonIcon>
                        </IonButton>
                    </IonItem>
                </IonList>

                <IonList className="w-3/4">
                    {
                        universities?.length === 0
                        ?
                            <IonNote className="w-full text-center">
                                Nada aún... 📢
                            </IonNote>
                        :
                        universities?.map((value: any) => {
                            return <IonItem className="w-full font-bold flex flex-col">
                                <IonLabel className="w-full">
                                    
                                    {value?.name}

                                    <IonNote className="w-full">
                                        {value?.domains[0]}
                                    </IonNote>

                                    <IonText color="primary" className="w-full">
                                        {value?.web_pages[0]}
                                    </IonText>
                                    
                                </IonLabel>
                            </IonItem>
                        })
                    }
                </IonList>  
            </div>

        </IonContent>
    );
};

export default UView;
