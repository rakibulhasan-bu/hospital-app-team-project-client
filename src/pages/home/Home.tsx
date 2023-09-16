import { useEffect } from "react";
import AboutUsHome from "./aboutUsHome/AboutUsHome";
import Banner from "./banner/Banner";
import BranchesHome from "./branchesHome/BranchesHome";
import Faq from "./faq/Faq";
import GalleryHome from "./galleryHome/GalleryHome";
import NewsMediaHome from "./newsMediaHome/NewsMediaHome";
import Partners from "./partners/Partners";
import PharmacyHome from "./pharmacyHome/PharmacyHome";
import PopularDoctor from "./popularDoctor/PopularDoctor";
import Specialities from "./specialities/Specialities";
import Testimonial from "./testimonial/Testimonial";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetSingleUsersQuery } from "../../redux/features/user/userApi";
import { RootState } from "../../redux/store";

const Home = () => {
  const dispatch = useDispatch()
  const { email } = useSelector((state: RootState) => state.userState)
  const { data: singleUser } = useGetSingleUsersQuery(email)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          name: user?.displayName,
          email: user?.email,
          role: singleUser?.data?.role,
          imageUrl: singleUser?.data?.imageUrl
        }))
        dispatch(toggleLoading(false))
      } else {
        dispatch(toggleLoading(false))
      }
    })
  }, [dispatch, singleUser, email])

  return (
    <div className="">
      <Banner />
      <PopularDoctor />
      <GalleryHome />
      <Specialities />
      <AboutUsHome />
      <PharmacyHome />
      <BranchesHome />
      <Testimonial />
      <NewsMediaHome />
      <Faq />
      <Partners />
    </div>
  );
};

export default Home;
