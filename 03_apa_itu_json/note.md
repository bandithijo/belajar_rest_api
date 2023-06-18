# 03 apa itu JSON?

"JavaScript Object Notation (JSON) adalah sebuah file format standar yang menggunakan tulisan yang dapat dibaca oleh manusia untuk pertukaran data, yang di dalamnya berisi pasangan antara key dan value." \
https://en.wikipedia.org/wiki/JSON

## JSON

1. Format pertukaran data yang tekstual dan sangat ringan
1. Sintaksnya sangat sederhana dan jelas (dibanding XML)
1. Dapat digunakan pada beragam bahasa pemrograman
1. Tiap bahasa pemrograman memiliki cara tersendiri untuk berinteraksi dengan JSON
1. Dibuat berdasarkan format Object pada JavaScript
1. Digunakan juga untuk file konfigurasi (tidak disarankan, karena tidak support commenting)
1. Tipe file JSON memiliki ekstensi .json
1. Format JSON dibuat dan diusulkan oleh Douglas Crockford

## Object

"Object pada JavaScript adalah kumpulan property, dan property ditulis dalam bentuk pasangan antara key dan value." \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

### Object Literal

```javascript
const Orang = {
    nama: 'Rizqi Nur Assyaufi',
    umur: 34,
    pekerjaan: 'Software Engineer',
    sapa: function() {
        return `Hi, nama saya ${this.nama}, usia saya ${this.umur}, dan saya adalah seorang ${this.pekerjaan}.`
    }
}
```

> JSON tidak memiliki method

```json
{
    "nama": "Rizqi Nur Assyaufi",
    "umur": 34,
    "pekerjaan": "Software Engineer"
}
```

## Membuat JSON

```
{ "key": "value" }
```

key selalu dibungkus dengan tanda petik dua.

## Tipe data value pada JSON

1. Boolean => `true` / `false`
1. Array => `["value 1", "value 2", ...]`
1. String => `teks/unicode dibungkus dengan petik dua`
1. Object => `{ "key": "value" }`
1. Number => `integer` / `float`
1. Null => `null`
