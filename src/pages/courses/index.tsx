import BannerCoursesPage from "@/components/BannerCoursesPage";
import JoinHomePage from "@/components/JoinHomePage";
import SEO from "@/components/SEO";
import ShortCourses from "@/components/ShortCourses";
import React from "react";

const Courses = () => {
  return (
    <>
      <SEO
        title="Истражете курсеви во VibeOn Edu | Подобрете ги вашите вештини денес
"
        description="Прелистајте ја нашата разновидна понуда на курсеви во VibeOn Edu. Од почетници до напредни, имаме нешто за сите. Запишете се сега и направете го следниот чекор во вашето учење!
"
        keywords="курсеви, онлајн учење, развој на вештини, VibeOn Edu, образование
"
        url="https://sparkasse.mk/"
        image="/Logo.png"
      />
      <section>
        <BannerCoursesPage
          headerText="Научи за себе."
          text="Модул фокусиран на финансиска писменост и управување со буџет."
          textOne="10+ курсеви."
          textTwo="20+ бесплатни"
          textThree="сертификати."
          colorOne="#0CB43F"
          colorTwo="#028661"
          imageSrc="/images/CoursesBanner.png"
          imageAlt="CoursesBanner"
        />
        <ShortCourses
          titleColor="#0CB43F"
          iconColor="#0CB43F"
          innerColor="#0CB43F"
        />
        <BannerCoursesPage
          headerText="Научи за твојот бизнис."
          text="Модул фокусиран на примена на финансиски стратегии во твојот иден бизнис."
          textOne="4+ курсеви."
          textTwo="16+ бесплатни "
          textThree="сертификати."
          colorOne="#EB4C79"
          colorTwo="#721C7A"
          imageSrc="/images/CoursesEffect.png"
          imageAlt="CoursesBanner"
        />
        <ShortCourses
          titleColor="#EB4C79"
          iconColor="#EB4C79"
          innerColor="#EB4C79"
        />
        <JoinHomePage
          titleText="80% од успешните луѓе имале финансиско образование."
          buttonText="Започни сега"
          backgroundColor="#FF6130"
        />
      </section>
    </>
  );
};

export default Courses;
