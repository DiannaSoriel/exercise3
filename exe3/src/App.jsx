import { useEffect, useState } from "react";
import { fetchImages } from "./api";
function Header() {
    return (
      <header className="hero is-warning is-bold has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Fluffy Fox Images</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image ">
          <figure className="image">
            <img src={props.src} alt="Mr.Fluffy Fox"/>
          </figure>
        </div>
      </div>
    );
  }
  function Loading() {
    return <p>Now Loading</p>;
  }
  
  function Gallery(props) {
    const url= props.url;
    if (url== null) {
        return <Loading/>;
      }
    return (
      <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image src={url} />
      </div>
      </div>
    );
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages().then((urls) => {
        setUrls(urls);
        });
      }, []);
        return (
      <main>
        <section className="section">
          <div className="container">
            <Gallery url={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer has-background-grey-darker has-text-white">
        <div className="content has-text-centered">
          <p>5421028 Yu Asano</p>
          <p>日本大学文理学部情報科学科 Webプログラミング 演習03</p>
          <p>Fox images are retrieved from RANDOM FOX API</p>
          <p>
            <a href="https://randomfox.ca/">Donate to RANDOM FOX API</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;