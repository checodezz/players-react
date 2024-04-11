import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PlayerDetails = () => {
  const { playerId } = useParams();
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

  const selectedPlayer = playersData.find((player) => player.id == playerId);

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-4">{selectedPlayer.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>
            {selectedPlayer.name}{" "}
          </li>
          <li className="list-group-item">
            <strong>Position: </strong>
            {selectedPlayer.position}{" "}
          </li>
          <li className="list-group-item">
            <strong>Team: </strong>
            {selectedPlayer.team}{" "}
          </li>
        </ul>
      </main>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default PlayerDetails;
