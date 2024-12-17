
import PropTypes from 'prop-types'

function Mahasiswa(props){
    return(
        <div className="Mahasiswa">
            <p>Name : {props.name}</p>
            <p>age: {props.age}</p>
            <p>Mahasiswa : {props.apakahMahasiswa ? "Betul" : "Tidak"}</p>
        </div>
    );
}

Mahasiswa.propsTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    apakahMahasiswa : PropTypes.bool,
}

Mahasiswa.defaultProps= {
    name : "pendaftar",
    age : 0,
    apakahMahasiswa : false,
}
export default Mahasiswa