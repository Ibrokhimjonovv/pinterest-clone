import Header from "@/components/header/header";
import HomeImages from "@/components/homeImages/homeImages";
import SideMenu from "@/components/sideMenu/sideMenu";
import "@/styles/global.scss"

export default function Home() {
  return (
    <div className="root_hp_1">
      <SideMenu />
      <div className="may-rayt">
        <Header />
        <HomeImages />
      </div>
    </div>
  );
}
