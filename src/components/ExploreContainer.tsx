import AboutMeView from '../views/AboutMeView';
import AgeView from '../views/AgeView';
import GenderView from '../views/GenderView';
import MainView from '../views/MainView';
import NewsView from '../views/NewsView';
import UView from '../views/UView';
import WeatherView from '../views/WeatherView';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  switch(name)
  {
    case "Principal":
      return (
        <MainView />
      );

    case "Sexo":
      return (
        <GenderView />
      );

    case "Edad":
      return (
        <AgeView />
      );

    case "Universidades":
      return (
        <UView />
      );

    case "Clima":
      return (
        <WeatherView />
      );

    case "Noticias":
      return (
        <NewsView />
      );

    case "Acerca":
      return (
        <AboutMeView />
      );
  }
};

export default ExploreContainer;
