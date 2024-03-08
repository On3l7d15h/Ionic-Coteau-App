import { useIonRouter, IonText, IonTitle, IonList, IonLabel, IonItem, IonInfiniteScroll, IonContent, IonImg, IonButton, IonIcon } from "@ionic/react";
import { codeWorking } from "ionicons/icons";
import React from "react";

interface ContainerProps {
  page: string;
}

const AboutMeView: React.FC = () => {

  // VARS
  const router = useIonRouter();

      return (
        <IonContent>
          
          <div className="h-full flex flex-col  !justify-center !items-center overflow-hidden rounded-xl">
            
            <div className="w-52 h-52 my-5 rounded-full overflow-hidden">
              <IonImg src="/assets/me.jpeg" className="w-full" />
            </div>

            <IonText className="text-xl font-bold text-left w-3/4">
              Soy Onell Dishmey
            </IonText>

            <p className="!w-3/4 !text-justify !my-3 opacity-50">
              Soy un desarrollador de Software, orientado mayormente a la web, pero conoce un poco de cada plataforma, incluyendo plataformas móbiles. Puedes contactarme vía:
            </p>

            <IonList className="w-3/4">

              <IonItem >
                <IonLabel className="">Correo: Onelldish@gmail.com</IonLabel>
              </IonItem>

              <IonItem >
                <IonLabel className="">Teléfono: 809 - 993 - 6640</IonLabel>
              </IonItem>

            </IonList>

          </div>
        </IonContent>
      );

};

export default AboutMeView;


