import React, { useState } from 'react';
import { diseases } from '../../../../../assets/data';
import { Modal } from 'react-bootstrap';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define a red icon for markers
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const Diagnosis = () => {
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [recommend, setRecommend] = useState([]);
    const [pharmacy, setPharmacy] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
  
    const handleCardClick = (diseaseName, recommend, pharmacy) => {
      setSelectedDisease(diseaseName);
        setRecommend(recommend);
        setPharmacy(pharmacy);
        setModalShow(true)
    };


//     <MapContainer center={[51.52, -0.12]} zoom={12} style={{ height: '250px', width: '100%' }}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     />
//     {pharmacy1?.map((pharmacy, index) => (
//       <Marker key={index} position={pharmacy.location} icon={redIcon}>
//         <Popup>{pharmacy.name}</Popup>
//       </Marker>
//     ))}
//   </MapContainer>
  
    return (
      <div>
        <center>Choose your set symptomps</center>
        <div className="disease-cards">
          {diseases.map((disease, index) => (
            <div
              key={index}
              className={`disease-card ${selectedDisease === disease.name ? 'active' : ''}`}
              onClick={() => handleCardClick(disease.name, disease.recommendedMedicines, disease.pharmacy)}
            >
              {disease.symptoms.map((symptom, sIndex) => (
                <div key={sIndex} className="symptom">
                  {symptom}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{
            zIndex:1500
            }}
            >
           <Modal.Body>
           <TableContainer>
           <Table>
           <TableBody>
           <TableRow>
           <TableCell style={{fontWeight:'bold'}}>Disease</TableCell>
           <TableCell>{selectedDisease}</TableCell>
           </TableRow>
           <TableRow>
           <TableCell style={{fontWeight:'bold'}}>Recomendation</TableCell>
           <TableCell style={{ display: 'flex' }}>
           {recommend?.map((recommend, index) => (
            <div key={index}>
              {recommend}&nbsp;
            </div>
          ))}
           </TableCell>
           </TableRow>
           </TableBody>
           </Table>
           </TableContainer>
           <center>Pharmacy: {pharmacy.name}</center>
           <MapContainer center={[51.52, -0.12]} zoom={12} style={{ height: '250px', width: '100%' }}>
           <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           />
           {pharmacy && (
             <Marker position={pharmacy.location} icon={redIcon}>
               <Popup>{pharmacy.name}</Popup>
             </Marker>
           )}
         </MapContainer>
           </Modal.Body> 
    </Modal>
      </div>
    );
  };
  
  export default Diagnosis;
