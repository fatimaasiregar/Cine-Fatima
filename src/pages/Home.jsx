import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "The Marvels",
    description:
      "Carol Danvers joins forces with Kamala Khan and Monica Rambeau to save the universe.",
    image: "/The Marvels.jpeg",
  },
  {
    id: 2,
    title: "Killers of the Flower Moon",
    description:
      "A gripping crime drama about the Osage murders in the 1920s, directed by Martin Scorsese.",
    image: "/Killers of the Flower Moon.jpeg",
  },
  {
    id: 3,
    title: "Oppenheimer",
    description:
      "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    image: "/Oppenheimer.jpeg",
  },
  {
    id: 4,
    title: "Barbie",
    description:
      "A vibrant and satirical journey as Barbie discovers the complexities of the real world.",
    image: "/Barbie.jpeg",
  },
  {
    id: 5,
    title: "Dune: Part Two",
    description:
      "Paul Atreides allies with the Fremen to wage war against the Harkonnen.",
    image: "/Dune Part Two.jpeg",
  },
  {
    id: 6,
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales ventures into the multiverse alongside Gwen Stacy.",
    image: "/Spider-Man Across the Spider-Verse.jpeg",
  },
  {
    id: 7,
    title: "The Super Mario Bros. Movie",
    description:
      "Mario and Luigi embark on a quest to save the Mushroom Kingdom.",
    image: "/The Super Mario Bros. Movie.jpeg",
  },
  {
    id: 8,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    description:
      "A prequel exploring the early years of President Snow during the 10th Hunger Games.",
    image: "/The Hunger Games The Ballad of Songbirds & Snakes.jpeg",
  },
  {
    id: 9,
    title: "Five Nights at Freddy's",
    description:
      "A chilling adaptation of the horror video game about haunted animatronics.",
    image: "/Five Nights at Freddy's.jpeg",
  },
  {
    id: 10,
    title: "Loki: Season 2",
    description:
      "Loki continues his time-bending adventures in the TVA with Mobius.",
    image: "/Loki Season 2.jpeg",
  },
  {
    id: 11,
    title: "Blue Beetle",
    description:
      "A young hero discovers an alien scarab that gives him extraordinary powers.",
    image: "/Blue Beetle.jpeg",
  },
  {
    id: 12,
    title: "The Nun II",
    description:
      "Sister Irene confronts the demonic entity Valak in another terrifying chapter.",
    image: "/The Nun II.jpeg",
  },
  {
    id: 13,
    title: "Saw X",
    description:
      "John Kramer returns in a story set between the events of Saw I and II.",
    image: "/Saw X.jpeg",
  },
  {
    id: 14,
    title: "One Piece (Netflix Series)",
    description:
      "Live-action adaptation of the popular manga, following Luffy's journey to find the One Piece.",
    image: "/One Piece (Netflix Series.jpeg",
  },
  {
    id: 15,
    title: "The Witcher: Season 3",
    description:
      "Geralt, Yennefer, and Ciri navigate betrayal and battle to secure their destiny.",
    image: "/The Witcher  Season 3.jpeg",
  },
];

const Home = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToEvents = () => {
    navigate("/event");
  };
  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          className="w-full h-96 object-cover"
          src="public/12345.jpg"
          alt="Movie Background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 font-cinzel">
            MovieVerse
          </h1>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400 border-b-2 border-yellow-500 pb-2 inline-block">
          Trending Movies
        </h2>

        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No movies found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">
                    {movie.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {movie.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button
            onClick={goToEvents}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-full transition-colors duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            View Upcoming Events
          </button>
          <button
            onClick={goToAboutPage}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full transition-colors duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            About MovieVerse
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;