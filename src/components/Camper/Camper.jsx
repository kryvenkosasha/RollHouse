export default function Camper({ camper }) {
  const { name, price, gallery, rating, location,  } = camper;

  return (
    <>
      <img src={gallery[0]} alt="" />

      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p>rating:{rating}</p>
        <p>{location}</p>
      </div>
    </>
  );
}
