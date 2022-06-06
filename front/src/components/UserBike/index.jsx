import Maintenance from '../Maintenance';

import {
  Container,
  LastMaintenance,
  LastServices,
  BikeName,
  Distance,
} from './styles';

export default function UserBike({ name, image, distance }) {
  return (
    <Container>
      <img src={image} alt="" />

      <BikeName>{name}</BikeName>

      <Distance>
        <span>Distância rodada</span> <span>{distance} km</span>
      </Distance>

      <LastMaintenance>
        <LastServices>Últimos serviços</LastServices>
        <Maintenance />
        <Maintenance />
      </LastMaintenance>
    </Container>
  );
}
