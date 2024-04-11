import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Players = () => {
  const playersData = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      position: "Forward",
      team: "Manchester United",
    },
    {
      id: 2,
      name: "Lionel Messi",
      position: "Forward",
      team: "Paris Saint-Germain",
    },
    {
      id: 3,
      name: "Neymar Jr",
      position: "Forward",
      team: "Paris Saint-Germain",
    },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-4">List of Players</h2>
        <ul className="list-group">
          {playersData.map((player) => (
            <li key={player.id} className="list-group-item">
              <h5>{player.name}</h5>
              <p>{player.position}</p>
              <Link to={`/players/${player.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <br/>
      <br/>
      <Footer />
    </>
  );
};

export default Players;
