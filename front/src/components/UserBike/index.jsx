import Maintenance from '../Maintenance';

import { Container, LastMaintenance } from './styles';

export default function UserBike() {
  return (
    <Container>
      <img src="https://i.zst.com.br/thumbs/12/2f/2d/1295580915.jpg" alt="" />

      <span>190 km rodados</span>

      <LastMaintenance>
        <span>últimos serviços</span>
        <Maintenance />
        <Maintenance />
      </LastMaintenance>
    </Container>
  );
}
