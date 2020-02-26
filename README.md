# CRUD JSON PlaceHolder ReactJs Redux #

**Note:**

Project ini hanya project coba-coba sebagai latihan menggunakan redux pada React Js.

Ini adalah cotoh kode crud Json PlaceHolder yang dibuat menggunakan React Js dan React Redux.

Sebenernya untuk melakukan curd update dan delete pada json PlaceHolder sangat sulit, dan dalam project ini hanya melakukan manipulasi data array yang ada di store redux ketika setelah mengirim action ke rest API json. Misalnya kita melakukan action delete ke rest API json PlaceHolder, ketika responya ok maka maka melakukan manipulasi delete array store.

Contoh CRUD PlaceHolder masih jauh dari sempurna, dan juga belum ditambah handle error ketika JSON PlaceHolder lagi lemot atau error pada respon update dan delete. Dan juga untuk create belum saya buat. Ketika terjadi error dapat ditangani dengan merefresh browser yang akan mereset seluruh store redux dan state react.

Untuk menggunakan contoh project ini silakan clone dan jalankan perintah `npm install` setelah semua pakage selesai diinstall selanjutnya jalankan `npm start`