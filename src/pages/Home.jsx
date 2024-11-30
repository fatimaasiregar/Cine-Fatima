import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Mengimpor useNavigate untuk navigasi

const movies = [
  {
    id: 1,
    title: "The Marvels",
    description:
      "Carol Danvers joins forces with Kamala Khan and Monica Rambeau to save the universe.",
    image: "public/The Marvels.jpeg",
  },
  {
    id: 2,
    title: "Killers of the Flower Moon",
    description:
      "A gripping crime drama about the Osage murders in the 1920s, directed by Martin Scorsese.",
    image: "public/Killers of the Flower Moon.jpeg",
  },
  {
    id: 3,
    title: "Oppenheimer",
    description:
      "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    image: "public/Oppenheimer.jpeg",
  },
  {
    id: 4,
    title: "Barbie",
    description:
      "A vibrant and satirical journey as Barbie discovers the complexities of the real world.",
    image: "public/Barbie.jpeg",
  },
  {
    id: 5,
    title: "Dune: Part Two",
    description:
      "Paul Atreides allies with the Fremen to wage war against the Harkonnen.",
    image: "public/Dune Part Two.jpeg",
  },
  {
    id: 6,
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales ventures into the multiverse alongside Gwen Stacy.",
    image: "public/Spider-Man Across the Spider-Verse.jpeg",
  },
  {
    id: 7,
    title: "The Super Mario Bros. Movie",
    description:
      "Mario and Luigi embark on a quest to save the Mushroom Kingdom.",
    image: "public/The Super Mario Bros. Movie.jpeg",
  },
  {
    id: 8,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    description:
      "A prequel exploring the early years of President Snow during the 10th Hunger Games.",
    image: "public/The Hunger Games The Ballad of Songbirds & Snakes.jpeg",
  },
  {
    id: 9,
    title: "Five Nights at Freddy's",
    description:
      "A chilling adaptation of the horror video game about haunted animatronics.",
    image: "public/Five Nights at Freddy's.jpeg",
  },
  {
    id: 10,
    title: "Loki: Season 2",
    description:
      "Loki continues his time-bending adventures in the TVA with Mobius.",
    image: "public/Loki Season 2.jpeg",
  },
  {
    id: 11,
    title: "Blue Beetle",
    description:
      "A young hero discovers an alien scarab that gives him extraordinary powers.",
    image: "public/Blue Beetle.jpeg",
  },
  {
    id: 12,
    title: "The Nun II",
    description:
      "Sister Irene confronts the demonic entity Valak in another terrifying chapter.",
    image: "public/The Nun II.jpeg",
  },
  {
    id: 13,
    title: "Saw X",
    description:
      "John Kramer returns in a story set between the events of Saw I and II.",
    image: "public/Saw X.jpeg",
  },
  {
    id: 14,
    title: "One Piece (Netflix Series)",
    description:
      "Live-action adaptation of the popular manga, following Luffy's journey to find the One Piece.",
    image: "public/One Piece (Netflix Series.jpeg",
  },
  {
    id: 15,
    title: "The Witcher: Season 3",
    description:
      "Geralt, Yennefer, and Ciri navigate betrayal and battle to secure their destiny.",
    image: "public/The Witcher  Season 3.jpeg",
  },
];

const Home = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();  // Inisialisasi useNavigate untuk navigasi

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToEvents = () => {
    navigate("/event");  // Fungsi untuk navigasi ke halaman Event
  };
  const goToAboutPage = () => {
    navigate("/about");  // Fungsi untuk navigasi ke halaman Event
  };

  return (
    <div className="home">

      {/* Pencarian */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Cari film..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Background Image */}
      <div className="top-section">
        <img
          className="background-image"
          src="public/12345.jpg"
          alt="Background Movies"
        />
      </div>

      <h1 className="home-title">Trending Movies</h1>

      {/* Menampilkan Daftar Film */}
      <div className="movies-grid">
        {filteredMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Button untuk menuju halaman Event */}
      <button onClick={goToEvents} className="go-to-events-btn">
        View Upcoming Events
      </button>
        {/* Tombol ke halaman About */}
        <div className="go-to-about">
        <button onClick={goToAboutPage}>View Upcoming About</button>

      </div>
    </div>
  );
};

export default Home;
