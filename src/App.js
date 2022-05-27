import { useRef } from 'react';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const contactUsRef = useRef(null);

  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => homeRef.current.scrollIntoView({ block: "center" })}>
                <span className="nav-link active" aria-current="page">Home</span>
              </li>
              <li className="nav-item" onClick={() => featuresRef.current.scrollIntoView({ block: "center" })}>
                <span className="nav-link">Features</span>
              </li>
              <li className="nav-item" onClick={() => pricingRef.current.scrollIntoView({ block: "center" })}>
                <span className="nav-link" >Pricing</span>
              </li>
              <li className="nav-item" onClick={() => contactUsRef.current.scrollIntoView({ block: "center" })}>
                <span className="nav-link" >Contact us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      <main style={{ marginTop: "80px" }} className="h-100">
        <div className='container h-100 pb-3'>
          <div className='row my-3' style={{ minHeight: "80%" }} ref={homeRef}>
            <div className='col-lg-12 shadow p-4'>
              <h4>Home</h4>
            </div>
          </div>
          <div className='row my-3' style={{ minHeight: "80%" }} ref={featuresRef}>
            <div className='col-lg-12 shadow p-4'>
              <h4>Features</h4>
            </div>
          </div>
          <div className='row my-3' style={{ minHeight: "80%" }} ref={pricingRef}>
            <div className='col-lg-12 shadow p-4'>
              <h4>Pricing</h4>
            </div>
          </div>
          <div className='row my-3 pb-3' style={{ minHeight: "80%" }} ref={contactUsRef}>
            <div className='col-lg-12 shadow p-4'>
              <h4>Contact us</h4>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default App;
