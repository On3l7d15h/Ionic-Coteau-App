import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, maleFemale, maleFemaleOutline, maleFemaleSharp, notificationsOutline, notificationsSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, personCircleSharp, personOutline, personSharp, timeOutline, timeSharp, timerOutline, timerSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Principal',
    url: '/Principal',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sexo',
    url: '/Sexo',
    iosIcon: maleFemaleOutline,
    mdIcon: maleFemaleSharp
  },
  {
    title: 'Edad',
    url: '/Edad',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Universidades',
    url: '/Universidades',
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp
  },
  {
    title: 'Clima (RD)',
    url: '/Clima',
    iosIcon: timerOutline,
    mdIcon: timerSharp
  },
  {
    title: 'Noticias',
    url: '/Noticias',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp
  },
  {
    title: 'Acerca de',
    url: '/Acerca',
    iosIcon: personOutline,
    mdIcon: personSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Coteau App</IonListHeader>
          <IonNote>Invitado</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
