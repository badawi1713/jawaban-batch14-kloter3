# Jawaban untuk Soal Batch 14 Kloter 3 Arkademy Class (11/01/2020)
#### Oleh: Dzaky Badawi

### Bismillah
#### Jawaban nomor 1 dan 2:
##### Untuk jawaban nomor 1 dan 2 saya menggunakan bahasa pemrograman Javascript yang dapat deksekusi melalui https://es6console.com/

#### Jawaban nomor 3-5:
##### Untuk jawaban nomor 3-5 saya memang belum mengerjakannya karena keterbatasan kemampuan saya.

#### Jawaban nomor 6:
##### Untuk hasil jawaban nomor 6 membuat sistem POS sederhana, yang dilakukan pertama kali adalah membuat database seperti yang saya gunakan dengan nama "db_pos" kemudian import tabel-tabel yang ada pada folder "database\db_pos", lalu lakukan konfigurasi database yang ada pada folder 'utils/connection.js' sesuai dengan pengaturan yang diinginkan.

##### Nama database yang digunakan adalah "db_pos" dengan berbagai tabel seperti:
##### A. tabel "t_product", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
name | Varchar | 255
price | int | 11
id_category | int | 11
id_cashier | int | 11

##### B. tabel "t_cashier", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
name | Varchar | 255

##### C. tabel "t_category", dengan stuktur berikut:
Column | Type | Size
------------ | -------------| -------------
id | int | 11
name | Varchar | 255

## Project setup
```
1. npm install --save
```
## Compiles and run Node.js server
```
2. nodemon atau npm run start
```
```
3. Lalu bukalah browser anda dan maskkan url; localhost:3001
```

### Demo Example of basic POS App CRUD with Node.js (Express), EJS, and MYSQL:
#### 1st image, halaman utama yang menampilkan daftar produk. Dimana user dapat melihat daftar produk yang telah ditambahkan dan juga terdapat tombol untuk menambah produk pada bagian kanan atas. Pada tabel tampilan produk, terdapat 2 tombol aksi yang dilakukan yaitu mengubah data produk atau menghapus data produk.

![First image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/1.PNG)

#### 2nd image, untuk menambah produk baru, user dapat mengisikan form add produk dengan menekan tombol ADD pada navbar halaman indeks.

![Second image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/2.PNG)

#### 3rd image, tampilan modal yang muncul apabila user mengklik tombol ADD sebelumnya untuk memasukkan data produk baru.

![Third image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/3.PNG)

#### 4th image, user mencoba untuk menambah produk yang akan ditambahkan.

![Fourth image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/4.PNG)

#### 5th image, tampilan tabel dengan tambahan data produk baru yang berhasil ditambahkan.

![Fifth image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/5.PNG)

#### 6th image, apabila ingin mengubah data produk user mengklik aksi tombol EDIT, kemudian akan tampil modal form EDIT seperti berikut.

![Sixth image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/6.PNG)

#### 7th image, user mencoba untuk mengubah data produk yang dipilih untuk diubah.

![Seventh image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/7.PNG)

#### 8th image, tampilan tabel dengan perubahan data yang berhasil diubah sebelumnya.

![Eight image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/8.PNG)

#### 9th image, apabila user ingin menghapus data produk maka dapat mengklik tombol aksi DELETE kemudian akan muncuk konfirmasi seperti pada gambar berikut.

![Ninth.a image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/9.PNG)
![Ninth.b image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/10.PNG)

#### 10th image, tampilan tabel dengan perubahan data yang berhasil dihapus sebelumnya.

![Tenth image](https://raw.githubusercontent.com/badawi1713/jawaban-batch14-kloter3/master/jawaban-06/public/assets/readme-images/10.PNG)

### Thank you!
