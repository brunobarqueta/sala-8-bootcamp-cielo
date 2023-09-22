import { Rating } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import CarouselStyle, { ProductCard } from './styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselProdutos = ({productsList, index}) => {
  const productsBefore = productsList.slice(0, index);
  const productsAfter = productsList.slice(index);

  const productsAll = [...productsAfter, ...productsBefore];

  return (
    <CarouselStyle>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["mobile"]}
        style={{
          '.react-multiple-carousel__arrow':{
            background: 'red',
          }
        }}
      >
        {productsAll.map((product, index) => (
          <ProductCard key={index}>
            <h2>{product.name}</h2>
            <img src={product.avatar} alt="" />
            <span style={{textAlign: 'center'}}>{product.description}</span>
            <div className='value-rating'>
              <Rating name="half-rating" defaultValue={product.rating} precision={0.5} />
              <span>R${product.price}</span>
            </div>
          </ProductCard>
        ))}
      </Carousel>
    </CarouselStyle>
  );
};

CarouselProdutos.propTypes = {
  productsList: PropTypes.array,
  index: PropTypes.number,
};

CarouselProdutos.defaultProps = {
  productsList: {},
  index: 0,
};

export default CarouselProdutos;
