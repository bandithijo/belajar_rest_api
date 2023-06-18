# 02 rest dan http

## rest

"Gaya arsitektural perangkat lunak yang di dalamnya mendefinisikan aturan-aturan untuk membuat web service." \
https://en.wikipedia.org/wiki/Representational_state_transfer

### ilustrasi

1. API adalah penghubung
1. REST API adalah aturannya
1. ada Request & Response
1. data yang dikirim/diterima berupa JSON

## REST API

1. REpresentational State Transfer
1. Gaya Perancangan/Architectural Style
1. Stateless (tidak ada state)
1. by: Roy Fielding, hasil dari disertasi PhD-nya
1. protokol komunikasinya hampir selalu menggunakan HTTP
1. memungkinkan interaksi antar mesin

## URL (Uniform Resource Locator)

1. Alamat dari sebuah resource yang dapat diakses di internet

misal,
```
GET  localhost/ci-app/mahasiswa/
GET  localhost/ci-app/mahasiswa/detail/12
POST localhost/ci-app/mahasiswa/tambah
GET  localhost/ci-app/mahasiswa/hapus/3
POST localhost/ci-app/mahasiswa/ubah/38
```

^ contoh endpoints yang **tidak RESTful**

## Kode Status

1. 200 - Success
1. 404 - Not Found
1. 500 - Server Error
1. ...

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

Kenapa butuh kode status? \
Karena yang ngobrol mesin dengan mesin.

## HTTP Method / Verbs yang RESTful

1. GET => mengambil data
2. POST => menambah data
3. PUT => mengubah data (tidak bisa dipakai di browser)
4. DELETE => menghapus data (tidak bisa dipakai di browser)

https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol

Contoh enpoints yang RESTful API,
```
GET    localhost/ci-app/mahasiswa/
GET    localhost/ci-app/mahasiswa/12
POST   localhost/ci-app/mahasiswa/
DELETE localhost/ci-app/mahasiswa/3
PUT    localhost/ci-app/mahasiswa/38
```

^ disebut dengan endpoints

## stateless

1. Setiap request HTTP dilakukan secara terisolasi
1. Server tidak boleh menyimpan state apapun mengenai sesi dari client
1. Setiap request dari client harus berisi semua informasi yang dibutuhkan server termasuk informasi otentikasi

## RESTful API

1. Menggunakan HTTP method yang benar
1. URI/endpoints-nya menggunakan kata benda, bukan kata kerja
1. Stateless
