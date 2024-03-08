import { IonText, IonContent, IonNote, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { } from 'ionicons/icons';

const MainView: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
      <IonContent>
        
        <div className="w-full h-full flex flex-col justify-center items-center">
            
            {/* Number */}
            <IonText 
                    className="w-full opacity-50 text-8xl font-bold text-center my-4"
                    color="primary"
                >
                    01
            </IonText>

            <IonText 
                className="w-full text-4xl font-bold text-center my-4"
            >
                Bienvenido
            </IonText>

            <IonNote 
                className="my-2 w-3/4 text-center"
            >
                A Coteau App, una aplicación con múltiples pantallas y funcionalidades. ✨🌟
            </IonNote>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300" height="300" viewBox="0,0,256,256">
                <g fill="#339af0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M19,5c-1.64453,0 -3,1.35547 -3,3v3h-13c-1.65234,0 -3,1.34766 -3,3v8h9c0,-1.10156 0.89844,-2 2,-2h5c1.10156,0 2,0.89844 2,2h14c0,-1.10156 0.89844,-2 2,-2h5c1.10156,0 2,0.89844 2,2h9v-8c0,-1.65234 -1.34766,-3 -3,-3h-13v-3c0,-1.64453 -1.35547,-3 -3,-3zM19,7h12c0.5625,0 1,0.4375 1,1v3h-14v-3c0,-0.5625 0.4375,-1 1,-1zM11,22v2h5v-2zM34,22v2h5v-2zM0,24v18c0,1.65234 1.34766,3 3,3h44c1.65234,0 3,-1.34766 3,-3v-18h-9c0,1.10156 -0.89844,2 -2,2h-5c-1.10156,0 -2,-0.89844 -2,-2h-14c0,1.10156 -0.89844,2 -2,2h-5c-1.10156,0 -2,-0.89844 -2,-2z"></path></g></g>
            </svg>
        </div>

      </IonContent>
  );
};

export default MainView;
