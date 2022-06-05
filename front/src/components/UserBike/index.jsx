import Maintenance from '../Maintenance';

import { Container, LastMaintenance } from './styles';

export default function UserBike({ name, image, distance }) {
  return (
    <Container>
      <span>{name}</span>

      <img src={image} alt="" />

      <span>{distance} km rodados</span>

      <LastMaintenance>
        <span>últimos serviços</span>
        <Maintenance />
        <Maintenance />
      </LastMaintenance>
    </Container>
  );
}
