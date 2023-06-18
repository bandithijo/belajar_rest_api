# 04 bekerja dengan JSON

## Bekerja dengan JSON di luar domain

### Same-origin Policy

1. Kebijakan browser untuk mengakses dan menampilkan data/script/document dari tempat lain di luar domain-nya
1. Membuat kita tidak bisa mengakses data (.json) dari luar domain/website kita

### CORS (Cross Origin Resource Sharing)

1. Mekanisme yang membuat kita dapat mengakses sebuah resource (data, document, script) dari domain lain
1. Caranya adalah dengan membuat server memperbolehkan adanya akses data dari luar domain
1. Modifikasi `Access-Control-Allow-Origin`
1. Biasanya file `.htaccess`

