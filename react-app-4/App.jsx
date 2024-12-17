// Props = read-only properti yang bisa dibagikan antar komponen
//        komponen parent dapat mengirim data ke komponen child
//        <Component key=value>

// default-props = default values for props in case they are not 
//                 passsed from the parent component
//                 name = "guest"

import Mahasiswa from "./mahasiswa.jsx"

function App(){
  return(
    <>
      <Mahasiswa name="Syaiful" age={22} apakahMahasiswa={true}></Mahasiswa>
      <Mahasiswa name="Lestari" age={20} apakahMahasiswa={false}></Mahasiswa>
      <Mahasiswa name="Aldi" age={21} apakahMahasiswa={true}></Mahasiswa>
      <Mahasiswa></Mahasiswa>
    </>
  )
}


export default App