
import Header from '~/components/Home/Header';
import Footer from '~/components/Home/Footer';
import Category from '~/components/Home/Category';
import CustomCarousel from '~/components/Home/Carousel';
import Proposition from '~/components/Home/Proposition';


export default function Home() {
  return (
    <>
      <Header />
      <CustomCarousel />
      <Proposition />
      <Category/>
      <Footer/>

    </>
  )
}
