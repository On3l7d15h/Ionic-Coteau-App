import { useIonLoading, IonText, IonContent, IonNote, IonButton, IonCard, IonCardHeader, IonImg, IonCardContent } from '@ionic/react';
import { useParams } from 'react-router';
import React from "react";
import ExploreContainer from '../components/ExploreContainer';

const NewsView: React.FC = () => {

    // VARS AND STATES
    const { name } = useParams<{ name: string; }>();
    const [articles, setArticles] = React.useState<any>([])
    const [present, dismiss] = useIonLoading();

    // FUNCTIONS
    const handleOnChange = (e: any) => {
        setArticles(e.target.vaue);
    }

    const handleOnFetch = async () => {
        
        present({
            message: "Cargando..."
        })

        try
        {
            await fetch(`https://arturogoga.com/wp-json/wp/v2/posts?per_page=3`)
                .then((res) => res.json())
                .then((info) => setArticles(info))
                .catch()
        }
        catch(e)
        {
            console.error("APP: ", e)
        }

        dismiss();
    }

    const getImage = (v: any) => {
        let newString:string = v?.content?.rendered.substr(v?.content?.rendered.indexOf("img"), articles[1]?.content?.rendered.indexOf("/"))
        let altered1 = newString.substr(newString.indexOf("src")+5)
        let result = altered1.substr(0, altered1.indexOf("alt")-1);
        return result;
    }

    React.useEffect(() => {
        if(articles.length === 0)
        {
            handleOnFetch()
        }
    }, [articles])


    return (
        <IonContent>
            
            <div className="w-full min-h-full flex flex-col justify-center items-center">
                
                {/* Number */}
                <IonText 
                    className="w-full opacity-50 text-8xl font-bold text-center my-4"
                    color="primary"
                >
                    06
                </IonText>

                <div className='flex flex-row w-full'>

                    <section className="w-1/2 text-left p-4 flex flex-col justify-center mx-auto">
                        <IonText 
                            className="w-full text-4xl font-bold text-left my-4"
                        >
                            Noticias
                        </IonText>

                        <IonNote 
                            className="my-4 w-full text-left"
                        >
                        ¡Veamos que noticias tenemos para hoy! 🔥✨
                        </IonNote>
                    </section>

                    <section className="w-1/2 flex justify-end items-start p-4">
                        <IonImg 
                            src="https://arturogoga.com/wp-content/uploads/2023/04/cropped-goga-logo-1.png" 
                            className="w-32 h-32 rounded"
                        />
                    </section>
                </div>

                {
                    articles?.length !== 0
                    ?
                        articles?.map((v: any) => {
                            return <IonCard className="w-3/5 min-h-[20rem] flex flex-col p-4 justify-between items-center">
                                        <IonCardHeader className="w-full h-[170px] bg-blue-500 p-0 m-4 overflow-hidden rounded-3xl">
                                            <IonImg
                                                className="w-full rounded"
                                                src={getImage(v)} 
                                            />
                                        </IonCardHeader>
                                        <IonCardContent className="flex flex-col justify-center items-center gap-2">
                                            <h2 className="w-full text-center">{v?.title?.rendered}</h2>
                                            <IonButton onClick={() => document.location.href = v.link}>
                                                Ir a la publicación.
                                            </IonButton>
                                        </IonCardContent>
                                    </IonCard>
                        })
                    :
                    ""
                }

                
            </div>

        </IonContent>
    );
};

export default NewsView;
