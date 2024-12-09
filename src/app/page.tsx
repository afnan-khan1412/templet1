import Image from "next/image";
import Link from "next/link";
import TopHeader from "./Topheader/page";
import Navbar from "./Navbar/page";
import Herosection from "./Component/Herosection";
import Logosection from "./Component/Logosection";
import NewArrival from "./NewArrival/NewArrival";
import TopSeller from "./TopSeller/TopSeller";
import Catagory from "./Catagory/Catagory"

 export default function Home (){
  return(
    <div>
    <TopHeader />
    <Navbar />
    <Herosection />
    <Logosection />
    <NewArrival />
    <TopSeller/>
    <Catagory />
    </div>
  )
}
    