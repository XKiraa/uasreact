# Review OpenAPI 3 Responses Object

#### Nama : Hendro Dwi Prasetyo
#### NIM : 205150709111008

# Responses Object

Sebuah wadah untuk respons yang diharapkan dari suatu operasi. Penampung memetakan kode respons HTTP ke respons yang diharapkan.

Dokumentasi tidak selalu diharapkan mencakup semua kemungkinan kode respons HTTP karena mungkin tidak diketahui sebelumnya. Namun, dokumentasi diharapkan mencakup respons operasi yang berhasil dan kesalahan yang diketahui.

Default MUNGKIN digunakan sebagai objek respons default untuk semua kode HTTP yang tidak dicakup secara individual oleh Objek Responses.

Objek Responses HARUS berisi setidaknya satu kode respons, dan jika hanya satu kode respons yang disediakan, itu HARUS menjadi respons untuk panggilan operasi yang berhasil.

<br>

##### Fixed Fields
Field Name | Type | Description
---|:---:|---
default | Response Object ¦ Reference Object | Dokumentasi tanggapan selain yang dideklarasikan untuk kode tanggapan HTTP tertentu. Gunakan bidang ini untuk menutupi tanggapan yang tidak dideklarasikan. Objek Referensi dapat menautkan ke respons yang didefinisikan oleh bagian komponen / respons Objek OpenAPI.

##### Patterned Fields
Field Pattern | Type | Description
---|:---:|---
HTTP Status Code | Response Object ¦ Reference Object | Kode status HTTP apa pun dapat digunakan sebagai nama properti, tetapi hanya satu properti per kode, untuk mendeskripsikan respons yang diharapkan untuk kode status HTTP tersebut. Referensi Objek dapat menautkan ke respons yang ditentukan di bagian komponen / respons komponen OpenAPI Objek OpenAPI. Bidang ini HARUS diapit oleh tanda kutip (misalnya, "200") untuk kompatibilitas antara JSON dan YAML. Untuk menentukan rentang kode respons, bidang ini MUNGKIN berisi karakter wildcard `X`. Misalnya, `2XX` mewakili semua kode respons antara` [200-299] `. Hanya definisi rentang berikut yang diperbolehkan: `1XX`,` 2XX`, `3XX`,` 4XX`, dan `5XX`. Jika respons ditentukan menggunakan kode eksplisit, definisi kode eksplisit lebih diutamakan daripada definisi rentang untuk kode itu.


This object MAY be extended with Specification Extensions.

##### Responses Object Example

A 200 response for a successful operation and a default response for others (implying an error):

```json
{
  "200": {
    "description": "a pet to be returned",
    "content": {
      "application/json": {
        "schema": {
          "$ref": "#/components/schemas/Pet"
        }
      }
    }
  },
  "default": {
    "description": "Unexpected error",
    "content": {
      "application/json": {
        "schema": {
          "$ref": "#/components/schemas/ErrorModel"
        }
      }
    }
  }
}
```

```yaml
'200':
  description: a pet to be returned
  content: 
    application/json:
      schema:
        $ref: '#/components/schemas/Pet'
default:
  description: Unexpected error
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/ErrorModel'
```
