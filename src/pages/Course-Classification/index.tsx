
import { Container } from "@mui/material";
import CourseClassificationCarousel from "~/components/ListJob-TypeJob/CourseClassification-carosel";
import CourseClassificationServicesRelated from "~/components/ListJob-TypeJob/CourseClassification-ServicesRelated";
import Footer from "~/components/Home/Footer";
import HeaderUserDetails from "~/components/User/Header-Userdetails";


export default function CourseClassidicationPage() {
  return (
    <>
      <HeaderUserDetails />
      <CourseClassificationCarousel />
      <CourseClassificationServicesRelated />
      <Container>
        <Container>
          <Container>
            <Footer />
          </Container>
        </Container>
      </Container>

    </>

  )
}
