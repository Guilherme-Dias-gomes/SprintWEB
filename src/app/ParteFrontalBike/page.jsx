import Link from 'next/link'

export default function ParteFrontalBike(){

    return(
        <main>
            <h1>Parte Frontal Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link href="/Final">
                <button>Enviar</button>
            </Link> 
        </main>
    )
}