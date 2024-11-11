import { Filtering } from "../../components/Filtering/Filtering";
import Card from "../../components/Card/Card";
import './Home.scss'

export const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-left">
                <Filtering />
            </div>
            <div className="home-right">
                <Card />
            </div>
        </div>
    )
}