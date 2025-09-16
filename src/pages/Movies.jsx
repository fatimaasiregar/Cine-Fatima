import React, { useState } from "react";
import { Info, ThumbsUp } from "lucide-react";

// Move the movies array outside the component
const moviesData = [
      {
        id: 1,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        poster: "/Inception.jpeg",
        rating: 8.8,
        description: "Seorang pencuri yang dapat masuk ke dalam mimpi orang lain diberi tugas terakhir yang berbahaya untuk menanamkan ide pada bawah sadar targetnya."
      },
      {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genre: "Petualangan",
        poster: "/Interstellar.jpeg",
        rating: 8.6,
        description: "Sekelompok penjelajah angkasa mencari planet baru untuk menyelamatkan umat manusia dari kehancuran bumi."
      },
      {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Aksi",
        poster: "/the dark knight.jpeg",
        rating: 9.0,
        description: "Batman berhadapan dengan Joker yang licik, seorang kriminal yang ingin mengacaukan Gotham City."
      },
      {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        poster: "/the matrix.jpeg",
        rating: 8.7,
        description: "Seorang hacker menemukan kebenaran mengejutkan tentang dunia tempat ia tinggal dan bergabung dalam pemberontakan melawan penguasa tiran."
      },
      {
        id: 5,
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        poster: "/Parasite.jpeg",
        rating: 8.6,
        description: "Keluarga miskin menyusup ke kehidupan keluarga kaya, namun rencana mereka membawa konsekuensi yang tak terduga."
      },
      {
        id: 6,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Aksi",
        poster: "/Avengers.jpeg",
        rating: 8.4,
        description: "Para Avengers bersatu untuk mengalahkan Thanos dan memulihkan keseimbangan alam semesta."
      },
      {
        id: 7,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        poster: "/the shaw.jpg",
        rating: 9.3,
        description: "Seorang pria dipenjara atas tuduhan pembunuhan berjuang untuk kebebasan dan harapan di penjara Shawshank."
      },
      {
        id: 8,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        poster: "/Forrest Gump.jpeg",
        rating: 8.8,
        description: "Perjalanan hidup luar biasa seorang pria sederhana dengan hati yang tulus dan pengaruh besar."
      },
      {
        id: 9,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        poster: "/joker.jpeg",
        rating: 8.4,
        description: "Kisah tragis seorang pria yang terpinggirkan oleh masyarakat, berubah menjadi musuh terbesar Gotham."
      },
      {
        id: 10,
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        poster: "/Fight Club.jpg",
        rating: 8.8,
        description: "Seorang pria terjebak dalam hidup monoton menemukan pelarian melalui klub pertarungan bawah tanah."
      },
      {
        id: 11,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Kriminal",
        poster: "/Pulp Fiction.jpeg",
        rating: 8.9,
        description: "Beberapa cerita terjalin tentang dunia kriminal yang penuh aksi dan kejutan di Los Angeles."
      },
      {
        id: 12,
        title: "The Godfather",
        year: 1972,
        genre: "Kriminal",
        poster: "/The Godfather.jpeg",
        rating: 9.2,
        description: "Kisah epik tentang keluarga mafia Corleone yang berjuang mempertahankan kekuasaannya di dunia bawah tanah."
      },
      {
        id: 13,
        title: "The Lord of the Rings",
        year: 2001,
        genre: "Fantasi",
        poster: "/The Lord of the Rings.jpeg",
        rating: 8.8,
        description: "Sekelompok pahlawan bersatu untuk membawa cincin kuat ke Mordor dan menghancurkannya demi menyelamatkan dunia."
      },
      {
        id: 14,
        title: "The Return of the King",
        year: 2003,
        genre: "Fantasi",
        poster: "/The Return of the King.jpeg",
        rating: 9.0,
        description: "Pertempuran epik terakhir melawan kejahatan besar untuk menyelamatkan Middle-earth."
      },
      {
        id: 15,
        title: "Star Wars",
        year: 1977,
        genre: "Sci-Fi",
        poster: "/Star Wars.jpeg",
        rating: 8.6,
        description: "Seorang petani muda memulai perjalanan heroik untuk melawan Kekaisaran dan menyelamatkan galaksi."
      },
      {
        id: 16,
        title: "The Lion King",
        year: 1994,
        genre: "Animasi",
        poster: "/The Lion King.jpg",
        rating: 8.5,
        description: "Kisah epik seekor singa muda yang mencari tempatnya sebagai raja di hutan belantara."
      },
      {
        id: 17,
        title: "Toy Story",
        year: 1995,
        genre: "Animasi",
        poster: "/Toy Story.jpg",
        rating: 8.3,
        description: "Mainan hidup mengungkap persahabatan dan petualangan dalam kehidupan sehari-hari mereka."
      },
      {
        id: 18,
        title: "Finding Nemo",
        year: 2003,
        genre: "Animasi",
        poster: "/Finding Nemo.jpg",
        rating: 8.1,
        description: "Seekor ikan badut melakukan perjalanan menakjubkan untuk menemukan anaknya yang hilang."
      },
      {
        id: 19,
        title: "The Avengers",
        year: 2012,
        genre: "Aksi",
        poster: "/Avengers.jpeg",
        rating: 8.0,
        description: "Tim superhero berkumpul untuk melindungi bumi dari invasi alien yang menghancurkan."
      },
      {
        id: 20,
        title: "Black Panther",
        year: 2018,
        genre: "Aksi",
        poster: "/black panther.jpeg",
        rating: 7.3,
        description: "Raja Wakanda harus melindungi negerinya dari ancaman yang datang dari dalam dan luar negeri."
      },
      {
        id: 21,
        title: "Gladiator",
        year: 2000,
        genre: "Drama",
        poster: "/Gladiator.jpeg",
        rating: 8.5,
        description: "Seorang jenderal Roma yang dikhianati mencari pembalasan sebagai gladiator di arena Colosseum."
      },
      {
        id: 22,
        title: "Braveheart",
        year: 1995,
        genre: "Sejarah",
        poster: "/Braveheart.jpeg",
        rating: 8.3,
        description: "William Wallace memimpin pemberontakan rakyat Skotlandia melawan tirani Inggris."
      },
      {
        id: 23,
        title: "The Silence of theLambs",
        year: 1991,
        genre: "Thriller",
        poster: "/The Silence of theLambs.jpeg",
        rating: 8.6,
        description: "Seorang agen FBI bekerja sama dengan seorang pembunuh berantai yang jenius untuk menangkap seorang pembunuh lain."
      },
      {
        id: 24,
        title: "The Green Mile",
        year: 1999,
        genre: "Drama",
        poster: "/The Green Mile.jpeg",
        rating: 8.6,
        description: "Seorang penjaga penjara menjalin hubungan dengan narapidana yang memiliki kekuatan penyembuhan luar biasa."
      },
      {
        id: 25,
        title: "Schindler's List",
        year: 1993,
        genre: "Drama",
        poster: "/Schindler's List.jpeg",
        rating: 9.0,
        description: "Kisah nyata tentang seorang pengusaha Jerman yang menyelamatkan lebih dari seribu orang Yahudi dari holocaust."
      },
      {
        id: 26,
        title: "Avatar",
        year: 2009,
        genre: "Sci-Fi",
        poster: "/avatar.jpeg",
        rating: 7.8,
        description: "Seorang mantan marinir yang lumpuh menjelajahi dunia Pandora menggunakan tubuh avatar untuk berinteraksi dengan penduduk asli."
      },
      {
        id: 27,
        title: "The Prestige",
        year: 2006,
        genre: "Drama",
        poster: "/The Prestige.jpg",
        rating: 8.5,
        description: "Dua pesulap saling bersaing untuk menciptakan trik sulap terbaik, yang berujung pada obsesi dan pengkhianatan."
      },
      {
        id: 29,
        title: "The Revenant",
        year: 2015,
        genre: "Petualangan",
        poster: "/The Revenant.jpeg",
        rating: 8.0,
        description: "Seorang pemburu bertahan hidup di alam liar dan mencari balas dendam setelah dikhianati oleh rekan-rekannya."
      },
      {
        id: 30,
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        poster: "/Whiplash.jpeg",
        rating: 8.5,
        description: "Seorang drummer muda berjuang untuk mendapatkan pengakuan di dunia musik jazz, di bawah bimbingan seorang guru yang keras."
      },
      {
        id: 31,
        title: "The Social Network",
        year: 2010,
        genre: "Drama",
        poster: "/The Social Network.jpeg",
        rating: 8.0,
        description: "Kisah nyata tentang penciptaan Facebook dan perjalanan kontroversial Mark Zuckerberg dalam membangun kerajaan teknologi."
      },
      {
        id: 32,
        title: "No Country for Old Men",
        year: 2007,
        genre: "Kriminal",
        poster: "/No Country for Old Men.jpeg",
        rating: 8.1,
        description: "Seorang pria menemukan uang hasil kejahatan dan menjadi buronan dari seorang pembunuh profesional dan seorang sheriff."
      },
      {
        id: 33,
        title: "The Wolf of Wall Street",
        year: 2013,
        genre: "Drama",
        poster: "/The Wolf of Wall Street.jpeg",
        rating: 8.2,
        description: "Kisah nyata seorang pialang saham yang ambisius yang menjatuhkan dirinya ke dalam dunia penipuan dan penyalahgunaan."
      },
      {
        id: 34,
        title: "La La Land",
        year: 2016,
        genre: "Drama",
        poster: "/La La Land.jpeg",
        rating: 8.0,
        description: "Seorang musisi jazz dan seorang aktris yang bercita-cita tinggi menjalin hubungan di tengah perjuangan karier mereka."
      },
      {
        id: 35,
        title: "The Truman Show",
        year: 1998,
        genre: "Drama",
        poster: "/The Truman Show.jpeg",
        rating: 8.1,
        description: "Seorang pria menemukan bahwa seluruh hidupnya adalah sebuah pertunjukan realitas yang disiarkan kepada dunia tanpa sepengetahuannya."
      },
      {
        id: 36,
        title: "Shutter Island",
        year: 2010,
        genre: "Thriller",
        poster: "/Shutter Island.jpeg",
        rating: 8.1,
        description: "Seorang detektif penyelidik sebuah rumah sakit jiwa yang misterius di pulau terpencil dan mulai mempertanyakan realitas."
      },
      {
        id: 37,
        title: "The Big Lebowski",
        year: 1998,
        genre: "Komedi",
        poster: "/The Big Lebowski.jpeg",
        rating: 8.1,
        description: "Seorang pria santai yang dikenal sebagai 'The Dude' terjebak dalam situasi penuh kekacauan setelah kesalahan identitas."
      },
      {
        id: 39,
        title: "The Departed",
        year: 2006,
        genre: "Kriminal",
        poster: "/The Departed.jpeg",
        rating: 8.5,
        description: "Dua orang, satu sebagai polisi dan satu sebagai mafia, berusaha saling mengungkap identitas masing-masing di tengah-tengah dunia kriminal Boston."
      },
      {
        id: 40,
        title: "The Dark Knight Rises",
        year: 2012,
        genre: "Aksi",
        poster: "/The Dark Knight Rises.jpeg",
        rating: 8.4,
        description: "Batman kembali untuk melawan ancaman baru yang lebih besar, Bane, yang berencana menghancurkan Gotham City."
      },
      {
        id: 41,
        title: "The Martian",
        year: 2015,
        genre: "Sci-Fi",
        poster: "/The Martian.jpeg",
        rating: 8.0,
        description: "Seorang astronot yang terdampar di Mars berusaha bertahan hidup dengan keterbatasan sumber daya sambil mencoba menghubungi Bumi."
      },
      {
        id: 42,
        title: "12 Angry Men",
        year: 1957,
        genre: "Drama",
        poster: "/12 Angry Men.jpeg",
        rating: 9.0,
        description: "Sebelas juri lainnya berusaha memutuskan nasib seorang pemuda yang dituduh membunuh ayahnya dalam sebuah persidangan yang penuh ketegangan."
      },
      {
        id: 43,
        title: "The Goodfellas",
        year: 1990,
        genre: "Kriminal",
        poster: "/The Goodfellas.jpeg",
        rating: 8.7,
        description: "Kisah nyata tentang kehidupan seorang gangster dan hubungannya dengan dunia kriminal yang berbahaya."
      },
      {
        id: 44,
        title: "The Godfather: Part II",
        year: 1974,
        genre: "Kriminal",
        poster: "/The Godfather.jpeg",
        rating: 9.0,
        description: "Melanjutkan kisah keluarga mafia Corleone, menyoroti perjuangan Michael Corleone untuk mempertahankan kekuasaannya."
      },
      {
        id: 45,
        title: "Citizen Kane",
        year: 1941,
        genre: "Drama",
        poster: "/Citizen Kane.jpeg",
        rating: 8.3,
        description: "Kisah hidup seorang magnat media yang misterius, ditelusuri oleh seorang jurnalis untuk memahami arti dari kata terakhirnya."
      },
      {
        id: 46,
        title: "Inglourious Basterds",
        year: 2009,
        genre: "Perang",
        poster: "/Inglourious Basterds.jpg",
        rating: 8.3,
        description: "Sekelompok tentara Amerika yang berperang melawan Nazi di Prancis selama Perang Dunia II, dipimpin oleh seorang komandan yang kejam."
      },
      {
        id: 47,
        title: "Django Unchained",
        year: 2012,
        genre: "Western",
        poster: "/Django Unchained.jpeg",
        rating: 8.4,
        description: "Seorang mantan budak bekerja sama dengan seorang pemburu hadiah untuk menyelamatkan istrinya dari seorang pemilik perkebunan yang kejam."
      },
      {
        id: 48,
        title: "Blade Runner 2049",
        year: 2017,
        genre: "Sci-Fi",
        poster: "/Blade Runner 2049.jpeg",
        rating: 8.0,
        description: "Seorang polisi yang juga seorang replikant menyelidiki misteri yang dapat mengubah masa depan umat manusia."
      },
      {
        id: 49,
        title: "The Shining",
        year: 1980,
        genre: "Horror",
        poster: "/The Shining.jpeg",
        rating: 8.4,
        description: "Seorang pria yang bekerja sebagai penjaga musim dingin di sebuah hotel terpencil mulai kehilangan kewarasannya akibat pengaruh supranatural."
      },
      {
        id: 50,
        title: "A Clockwork Orange",
        year: 1971,
        genre: "Drama",
        poster: "/A Clockwork Orange.jpeg",
        rating: 8.3,
        description: "Seorang pemuda yang terlibat dalam kekerasan ekstrem mencoba untuk keluar dari dunia kejahatan setelah menjalani eksperimen sosial yang brutal."
  }
];
const Movies = () => {
  const [sortType, setSortType] = useState("title");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterRating, setFilterRating] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  // Get all unique genres for filter dropdown
  const genres = [...new Set(moviesData.map(movie => movie.genre))].sort();

  const sortedMovies = [...moviesData].sort((a, b) => {
    if (sortType === "title") return a.title.localeCompare(b.title);
    if (sortType === "year") return b.year - a.year;
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  const filteredMovies = sortedMovies.filter((movie) => {
    const ratingMatch = filterRating ? movie.rating >= parseFloat(filterRating) : true;
    const genreMatch = filterGenre ? movie.genre === filterGenre : true;
    return ratingMatch && genreMatch;
  });

  const openPopup = (movie) => setSelectedMovie(movie);
  const closePopup = () => setSelectedMovie(null);

  return (
<div className="min-h-screen bg-gray-900 text-white pt-32 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <header className="max-w-3xl mx-auto text-center mb-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 font-cinzel leading-tight">
      Movie Collection
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-300">
      Discover and explore our curated selection of films from all genres, including the latest releases and timeless classics.
    </p>
  </header>
{/* Filters and Sorting - Improved Version */}
<div className="max-w-7xl mx-auto mb-8">
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
    <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      Filter & Sort Movies
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sort By */}
      <div className="space-y-2">
        <label htmlFor="sort" className="block text-sm font-medium text-gray-300">
          Sort By
        </label>
        <div className="relative">
          <select
            id="sort"
            className="block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="title">Title (A-Z)</option>
            <option value="year">Newest First</option>
            <option value="rating">Highest Rated</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter by Rating */}
      <div className="space-y-2">
        <label htmlFor="filterRating" className="block text-sm font-medium text-gray-300">
          Minimum Rating
        </label>
        <div className="relative">
          <select
            id="filterRating"
            className="block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="9">★★★★★ (9+)</option>
            <option value="8.5">★★★★☆ (8.5+)</option>
            <option value="8">★★★★ (8+)</option>
            <option value="7">★★★☆ (7+)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-yellow-400">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter by Genre */}
      <div className="space-y-2">
        <label htmlFor="filterGenre" className="block text-sm font-medium text-gray-300">
          Genre
        </label>
        <div className="relative">
          <select
            id="filterGenre"
            className="block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Active Filters */}
    {(filterRating || filterGenre) && (
      <div className="mt-4 flex flex-wrap gap-2">
        {filterRating && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-gray-900">
            Rating: {filterRating}+
            <button 
              onClick={() => setFilterRating('')}
              className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-yellow-600"
            >
              ×
            </button>
          </span>
        )}
        {filterGenre && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
            Genre: {filterGenre}
            <button 
              onClick={() => setFilterGenre('')}
              className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-600"
            >
              ×
            </button>
          </span>
        )}
      </div>
    )}
  </div>
</div>
      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No movies found matching your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-yellow-400 mb-1 line-clamp-1">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">
                      {movie.year} | {movie.genre}
                    </span>
                    <span className="flex items-center text-yellow-400 font-bold">
                      ⭐ {movie.rating}
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => openPopup(movie)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
                      aria-label="More info"
                    >
                      <Info className="mr-1" size={18} />
                      <span className="text-sm">Details</span>
                    </button>
                    <button
                      className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center"
                      aria-label="Like"
                    >
                      <ThumbsUp className="mr-1" size={18} />
                      <span className="text-sm">Like</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Movie Popup */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors duration-300"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
                    }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                    {selectedMovie.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedMovie.year}
                    </span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {selectedMovie.genre}
                    </span>
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      ⭐ {selectedMovie.rating}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{selectedMovie.description}</p>
                  
                  <div className="flex space-x-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center">
                      <ThumbsUp className="mr-2" size={18} />
                      Like
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;