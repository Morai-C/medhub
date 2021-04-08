import Header from './components/Header'
import HomeComp from './components/HomeComp'
import "./styles/style.scss"
const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="overlay">
          <HomeComp />
        </div>
      </div>
    </>
  )
}

export default App;
