import Sidebar from "./components/Sidebar"
import './index.css';
import Content from "./components/Content";
import MainContext from "./MainContext";
import BrandsData from "./brandc.json"

function App() {
  const brandsArray= []

  Object.keys(BrandsData).map(key=>{
    brandsArray.push(BrandsData[key])
  })
  const [brands,setBrands] = useState(brandsArray)

  const [selectedBrands, setSelectedBrands] = useState([])


  const data ={
    brands,
    setSelectedBrands
  }
  return (
    <>
        <MainContext.Provider value={data}>
          <Sidebar/>
          <Content/>
         </MainContext.Provider>
    </>
  );
}

export default App;
