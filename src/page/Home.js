import React from 'react'
import Nav from '../components/Nav'

const Home = ()=>{
    return(
        <div>
            <Nav/>
            <div className="container">
                <h1>CRUD JSON PlaceHolder</h1>
                <div className="cardInfo">
                    <p>Ini adalah cotoh kode crud Json PlaceHolder yang dibuat menggunakan React Js dan React Redux.</p>
                    <p>
                        Sebenernya untuk melakukan curd update dan delete pada json PlaceHolder sangat sulit,
                        dan dalam project ini hanya melakukan manipulasi data array yang ada di store redux ketika setelah mengirim 
                        action ke rest API json. Misalnya kita melakukan action delete ke rest API json PlaceHolder, ketika responya ok maka 
                        maka melakukan manipulasi delete array store.
                    </p>
                    <p>
                        Contoh CRUD PlaceHolder masih jauh dari sempurna, dan juga belum ditambah handle error ketika JSON PlaceHolder lagi lemot atau error
                        pada respon update dan delete. Dan juga untuk create belum saya buat. Ketika terjadi error dapat ditangani dengan merefresh browser yang akan
                        mereset seluruh store redux dan state react.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home