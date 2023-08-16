import TownList from "./components/townList";


const Home = () => {
    return ( 
        <div className="home">
            <h2 style={{textAlign:'center'}}>Home page</h2>
            <TownList />
        </div>
    );
}
 
export default Home;