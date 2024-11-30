import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Tentang Aplikasi Movie</h1>
      
      <div className="about-grid">
        {/* Kotak 1 */}
        <div className="about-card">
          <h3>Fungsi Utama Aplikasi Movie</h3>
          <p>
            Aplikasi movie berfungsi sebagai platform untuk mencari film dari berbagai genre dan kategori. 
            Pengguna dapat menemukan film yang diinginkan berdasarkan genre (aksi, drama, horor, dll.), tahun rilis, rating, atau title dari film nya.
          </p>
        </div>

        {/* Kotak 2 */}
        <div className="about-card">
          <h3>Desain dan Pengalaman Pengguna</h3>
          <p>
            aplikasi movie yang baik harus bersih, intuitif, dan mudah dinavigasi. 
            Desain minimalis dengan berbagai tampilan film akan lebih menarik perhatian pengguna.
          </p>
        </div>

        {/* Kotak 3 */}
        <div className="about-card">
          <h3>Pencarian dan Filter yang Canggih</h3>
          <p>
            Aplikasi movie yang baik harus memiliki sistem pencarian yang canggih. Pengguna dapat mencari film berdasarkan berbagai kriteria, seperti genre, rating, tahun rilis, dan title.
          </p>
        </div>

        {/* Kotak 4 */}
        <div className="about-card">
          <h3>Trending Movies</h3>
          <p>
            Aplikasi movie dapat menyarankan film yang sedang trending dengan menggunakan algoritma berbasis data, memberikan rating sesuai dengan minat pengguna.
          </p>
        </div>

        {/* Kotak 5 */}
        <div className="about-card">
          <h3>Event</h3>
          <p>
          Menemukan acara film yang akan datang dan menambah,menghapus,  dan mengedit event yang ingin di adakan 
          </p>
        </div>
      </div>
      
      <div className="about-footer">
        <p>© 2024 Aplikasi Movie. Semua hak cipta dilindungi.</p>
      </div>
    </div>
  );
};

export default AboutPage;
