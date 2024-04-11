import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Link} from "react-router-dom"

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <img
          src="https://placehold.co/600x300?text=Players+Playing"
          className="img-fluid my-5"
          alt="players-playing"
        />
        <div className="">
          <h2 className="">Our Players</h2>
          <p>
            Meet our talented team of players who work hard to achieve success
            on field.
          </p>
          <a className="btn btn-primary">View Players</a>
        </div>
        <div className="my-5">
          <h2 className="">Team Performance</h2>
          <p>
            Explore our team's performance statistics to gain insights into our
            success on the field.
          </p>
          <a className="btn btn-primary">View Performance</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
