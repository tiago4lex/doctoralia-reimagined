import MainHero from "../components/MainHero/MainHero"
import SpecialtyButtons from "../components/SpecialtyButtons/SpecialtyButtons"

export default function Home() {
    return (
        <div className="home-page">
            <MainHero />
            <SpecialtyButtons />
        </div>
    )
}