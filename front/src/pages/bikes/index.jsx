import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import UserBike from '../../components/UserBike';

import { Container, Content } from './styles';

export default function Bikes() {
  return (
    <Container>
      <Content>
        <Swiper navigation={true} modules={[Pagination, Navigation]}>
          <SwiperSlide>
            <UserBike />
          </SwiperSlide>
          <SwiperSlide>
            <UserBike />
          </SwiperSlide>
          <SwiperSlide>
            <UserBike />
          </SwiperSlide>
        </Swiper>
      </Content>
    </Container>
  );
}
