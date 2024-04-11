import Footer from "../components/Footer";
import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>HR Report</h2>
        <hr />
        <div className="row ">
          <div className="col-md-4">
            <div className="card-body m-4">
              <h3>Top Scorer</h3>
              <p>Name: Lionel Messi</p>
              <p>Goals Scored: 25</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body m-4">
              <h3>Best Assister</h3>
              <p>Name: Neymer Jr</p>
              <p>Assists: 15</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body m-4">
              <h3>Most Valuable Player(MVP)</h3>
              <p>Name: Cristiano Ronado</p>
              <p>Overal Rating: 9.5</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Report;
