import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 font-cinzel">
          Tentang Aplikasi Movie
        </h1>
        <p className="text-xl text-gray-300">
          Platform terbaik untuk menemukan dan mengeksplorasi dunia film
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-400 mb-3">Fungsi Utama Aplikasi Movie</h3>
          <p className="text-gray-300">
            Aplikasi movie berfungsi sebagai platform untuk mencari film dari berbagai genre dan kategori. 
            Pengguna dapat menemukan film yang diinginkan berdasarkan genre (aksi, drama, horor, dll.), tahun rilis, rating, atau title dari film nya.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-400 mb-3">Desain dan Pengalaman Pengguna</h3>
          <p className="text-gray-300">
            Aplikasi movie yang baik harus bersih, intuitif, dan mudah dinavigasi. 
            Desain minimalis dengan berbagai tampilan film akan lebih menarik perhatian pengguna.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-400 mb-3">Pencarian dan Filter yang Canggih</h3>
          <p className="text-gray-300">
            Aplikasi movie yang baik harus memiliki sistem pencarian yang canggih. Pengguna dapat mencari film berdasarkan berbagai kriteria, seperti genre, rating, tahun rilis, dan title.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-400 mb-3">Trending Movies</h3>
          <p className="text-gray-300">
            Aplikasi movie dapat menyarankan film yang sedang trending dengan menggunakan algoritma berbasis data, memberikan rating sesuai dengan minat pengguna.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-400 mb-3">Event</h3>
          <p className="text-gray-300">
            Menemukan acara film yang akan datang dan menambah, menghapus, dan mengedit event yang ingin diadakan.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;