import React from "react";

import CharactersList from "../components/CharactersList";

import "./styles/HomePage.css";

// function getFavoriteCharactersUrl(charactersID) {
//   var cad = "";
//   console.log();
//   charactersID.forEach((element) => {
//     cad = cad + element.toString() + ",";
//   });
//   return (
//     "https://rickandmortyapi.com/api/character/" +
//     cad.substring(0, cad.length - 1)
//   );
// }

// function useGetDatabase(firebase) {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     function get() {
//       firebase.getFavoriteCharacters().then(function (snapshot) {
//         setCharacters(snapshot.val());
//         setLoading(false);
//       });
//     }
//     get();
//   }, [firebase]);
//   return { characters, loading };
// }

function FavoriteCharactersPage(props) {
  const data = [];
  // const { characters, loading } = useGetDatabase(props.firebase);
  // const {
  //   loading: loadingApi,
  //   data,
  //   error,
  // } = useCallApi(getFavoriteCharactersUrl(characters));

  // if (loadingApi || loading) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <Loader />
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <h1>Error: {error.message}</h1>;
  // }

  return (
    <React.Fragment>
      <div className="homePage__Hero" />
      <div className="homePage__Title">
        <h1>
          Rick And Morty:
          <br />
          Your favorite characters
        </h1>
      </div>
      <div className="homePage__List">
        <CharactersList data={data} />
      </div>
    </React.Fragment>
  );
}

export default FavoriteCharactersPage;
