import { useState, useEffect } from 'react';
import axios from 'axios';

import Popup from 'reactjs-popup';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Topping from '../../components/Topping';
import UserBike from '../../components/UserBike';

import { Container, Content, Button, FormModal, Input } from '../../components/styles';

export default function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const userId = 3;

    axios
      .get(`https://bicare-hackathon.herokuapp.com/bikes/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setBikes(response.data);
          return;
        }
        console.log('deu ruim');
      });
  }, []);

  function handleAddBike() {
    const userId = 3;
    const object = {
      userId,
      name,
      image,
      distance,
    };

    axios
      .post(`https://bicare-hackathon.herokuapp.com/bikes`, object)
      .then((response) => {
        if (response.status === 201) {
          setName('');
          setImage('');
          setDistance(0);
          return;
        }
        console.log('deu ruim');
      });
  }

  return (
    <Container>
      <Topping name="Minhas Bikes" />

      <Content>
        {bikes?.length === 0 ? (
          <p>Você ainda não cadastrou nenhuma bike</p>
        ) : (
          <Swiper navigation={true} modules={[Pagination, Navigation]}>
            {bikes.map((bike) => (
              <SwiperSlide key={bike.id}>
                <UserBike
                  name={bike.name}
                  image={bike.image}
                  distance={bike.distance}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <Popup trigger={<Button>Adicionar bicicleta</Button>} modal>
          {(close) => (
            <FormModal>
              <Input
                type="text"
                name="nome"
                placeholder="nome da Bicicleta"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Input
                type="text"
                name="image"
                placeholder="link imagem"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                required
              />
              <Input
                type="number"
                name="distancia"
                placeholder="Distancia já pecorrida"
                value={distance}
                onChange={(event) => setDistance(event.target.value)}
              />
              <Button
                onClick={() => {
                  handleAddBike();
                  close();
                }}
              >
                Adicionar
              </Button>
            </FormModal>
          )}
        </Popup>
      </Content>
    </Container>
  );
}
