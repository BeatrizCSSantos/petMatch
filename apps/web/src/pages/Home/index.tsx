import { useEffect, useState } from "react";
import { getPets } from "../../services/pets.services";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets().then(setPets);
  }, []);

  return (
    <div>
      <h1>Pets</h1>

      {pets.map((pet: any) => (
        <div key={pet.id}>{pet.name}</div>
      ))}
    </div>
  );
}