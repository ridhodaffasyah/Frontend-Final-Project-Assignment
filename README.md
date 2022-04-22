# Spotify Web App

## Deskripsi Aplikasi

Aplikasi ini bernama Spotify Web App dimana aplikasi ini mempunyai beberapa fitur terutama dalam hal pencarian lagu dan pembuatan playlist sesuai lagu yang dipilih. Aplikasi memanfaatkan API dari Developer Spotify terutama API Search, User, Playlist, dan Track. Scope user yang digunakan yaitu private-modify-playlist

## Fitur Aplikasi

1. Fitur Login dengan menggunakan Implicit Grant Flow dari Spotify.

- User dapat login dengan akun spotifynya masing-masing. Tapi dalam hal ini harus ditambahkan terlebih dahulu kedalam whitelist.

2. Fitur Search dengan menggunakan API Search dari Spotify Developers.

- Pada fitur ini user bisa memasukkan query pencarian lagu sesuai yang diinginkan dan hasil pencarian tersebut akan mengeluarkan daftar lagu sebanyak 20 lagu. Dari masing-masing lagu tersebut akan ditampilkan foto album, judul lagu, nama penyanyi, dan durasi lagu.
- Lagu yang sudah dipilih ketika kembali user mencari dengan kata kunci lain dan menemukan lagu tersebut maka lagu tersebut tetap dalam status sudah terpilih.

3. Fitur Create Playlist dengan menggunakan API Playlist dari Spotify Developers.

- Pembuatan playlist bisa dilakukan jika user telah mengisikan judul playlist (minimal 10 karakter), deskripsi playlist dan memilih beberapa lagu dari hasil pencarian.
- Pembuatan playlist akan diberitahukan pesannya jika berhasil melakukannya.

4. Fitur User Profile

- User dapat melihat foto profil, nama dan jumlah follower-nya serta user bisa membuka spotify-nya melalu tombol yang mendirect ke URI masing-masing user.

## Installation

Clone atau download versi zip dari Repository ini :

```bash
git clone https://github.com/ridhodaffasyah/Frontend-Final-Project-Assignment.git
```

Lalu lakukan npm install untuk node modules :

```bash
npm install
```

Jika sudah lakukan npm start untuk menjalankan aplikasi ini secara development melalui localhost :

```bash
npm start
```

## Deployment on Vercel

[https://frontend-final-project-assignment.vercel.app/](https://frontend-final-project-assignment.vercel.app/)
