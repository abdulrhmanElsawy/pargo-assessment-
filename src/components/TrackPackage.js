import React from 'react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import './css/TrackPackage.css';
import TrackTraceImg1 from './images/TrackParcel.svg';
import TrackTraceImg2 from './images/TrackingPin.svg';
import TrackTraceImg3 from './images/TrackLocation.svg';
import { useState } from 'react';


function TrackPackage(){

    const [waybillNumber, setWaybillNumber] = useState('');
    const [showPackageInfo, setShowPackageInfo] = useState(false);

    // Event handler for input changes
    const handleInputChange = (e) => {
        setWaybillNumber(e.target.value);
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action
        if (waybillNumber.trim()) {
            setShowPackageInfo(true);
        }
    };


    const downloadPDF = () => {
        const doc = new jsPDF();
        
        // Title
        doc.setFontSize(16);
        doc.text("Package Information", 105, 20, null, null, 'center');
    
        // Waybill Number
        doc.setFontSize(12);
        doc.text("WAYBILL NUMBER: 123456", 20, 30);
    
        // Shipper Information
        doc.text("Shipper Information", 20, 40);
        doc.text("Name: John", 20, 50);
        doc.text("Address: 354 Beach Ave. Riverside, CA 92509, California.", 20, 60);
        doc.text("Phone: +658 359746", 20, 70);
        doc.text("Email: john@hotmail.com", 20, 80);
    
        // Receiver Information
        doc.text("Receiver Information", 20, 90);
        doc.text("Name: Cena", 20, 100);
        doc.text("Address: Level 20, 28 Freshwater Place, Southbank VIC Australia 3006.", 20, 110);
        doc.text("Phone: +348 2546981", 20, 120);
        doc.text("Email: cena@hotmail.com", 20, 130);
    
        // Add more content as needed
    
        doc.save('package-info.pdf');
    };


    const downloadExcel = () => {
        // Example data structure
        const data = [
            { header: "WAYBILL NUMBER", content: "123456" },
            { header: "Shipper Information", content: "" },
            { header: "Name", content: "John" },
            { header: "Address", content: "354 Beach Ave. Riverside, CA 92509, California." },
            { header: "Phone", content: "+658 359746" },
            { header: "Email", content: "john@hotmail.com" },
            { header: "Receiver Information", content: "" },
            // ... More data following the same structure
        ];
    
        const ws = XLSX.utils.json_to_sheet(data, {
            header: ["header", "content"],
            skipHeader: true
        });
    
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Package Information");
        XLSX.writeFile(wb, 'package-info.xlsx');
    };

    const printContent = () => {
        window.print();
    };


    return(
        <>
            <section className='track-package'>
                <div className='container-fluid'>
                    <div className='track-package-content'>
                        <h3 data-aos="fade-up">TRACK YOUR ORDER BY ENTERING YOUR <span> WAYBILL NUMBER </span></h3>

                        <div data-aos="fade-up" className='track-inputs'>
                            <input 
                            type='text' 
                            placeholder='WAYBILL NUMBER' 
                            required 
                            onChange={handleInputChange}
                            value={waybillNumber}
                        />
                        <button data-aos="fade-up" aria-label='start track button' onClick={handleSubmit}> TRACKING </button>
                        </div>
                        <h5 data-aos="fade-up">  Example : 123456 </h5>
                    </div>


                    {showPackageInfo && (
                    <div className='package-information'>
                        <div className='btns'>
                            <button  aria-label='download info as pdf button' className='download-as-pdf' onClick={downloadPDF}> <i className="las la-file-pdf"></i> </button>
                            <button aria-label='download info as excel button' className='download-as-excel' onClick={downloadExcel}> <i className="las la-file-csv"></i> </button>
                            <button aria-label='print info button' className='print' onClick={printContent}> <i className="las la-print"></i> </button>
                        </div>

                        <h1> <span> WAYBILL NUMBER </span> 123456 </h1>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='ship-rec-info'>
                                    <h2> Shipper Information </h2>

                                    <ul>
                                        <li>
                                            <span> Name :  </span>
                                            John
                                        </li>

                                        <li>
                                            <span> Address :  </span>
                                            354 Beach Ave. Riverside, CA 92509, California.
                                        </li>

                                        <li>
                                            <span> Phonenumber :  </span>
                                            +658 359746
                                        </li>
                                        
                                        <li>
                                            <span> Email :  </span>
                                            john@hotmail.com
                                        </li>

                                    </ul>
                                </div>
                            </div>


                            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='ship-rec-info'>
                                    <h2> Receiver Information </h2>

                                    <ul>
                                        <li>
                                            <span> Name :  </span>
                                            Cena
                                        </li>

                                        <li>
                                            <span> Address :  </span>
                                            Level 20, 28 Freshwater Place, Southbank VIC Australia 3006.
                                        </li>

                                        <li>
                                            <span> Phonenumber :  </span>
                                            +348 2546981
                                        </li>
                                        
                                        <li>
                                            <span> Email :  </span>
                                            cena@hotmail.com
                                        </li>

                                    </ul>
                                </div>
                            </div>


                            <h3><span> Shipment Status : </span> SHIPMENT STATUS 3 </h3>

                            <h4>Shipment Information</h4>

                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className='shipment-info'>
                                        <ul>
                                            <li>
                                                <span>Origin: </span>
                                                Australia
                                            </li>

                                            <li>
                                                <span>Destination: </span>
                                                France
                                            </li>

                                            <li>
                                                <span>Weight: </span>
                                                6000
                                            </li>

                                            <li>
                                                <span>Product: </span>
                                                Electranic Device's
                                            </li>


                                            <li>
                                                <span>Total Freight: </span>
                                                6
                                            </li>

                                            <li>
                                                <span>Pick-up Date: </span>
                                                03-31-2017
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className='shipment-info'>
                                        <ul>
                                            <li>
                                                <span>Package: </span>
                                                10
                                            </li>

                                            <li>
                                                <span>Carrier: </span>
                                                Shipment Carrier 4
                                            </li>

                                            <li>
                                                <span>Shipment Mode: </span>
                                                Shipment Mode 3
                                            </li>

                                            <li>
                                                <span>Qty: </span>
                                                500
                                            </li>


                                            <li>
                                                <span>Expected Delivery Date: </span>
                                                03-31-2017
                                            </li>

                                            <li>
                                                <span>Pick-up Time: </span>
                                                6:00am
                                            </li>
                                        </ul>
                                    </div>
                                </div>






                                <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className='shipment-info'>
                                        <ul>
                                            <li>
                                                <span>Status: </span>
                                                Shipment Status 3
                                            </li>

                                            <li>
                                                <span>Type of Shipment:: </span>
                                                Shipment 3
                                            </li>

                                            <li>
                                                <span>Carrier Reference No.: </span>
                                                9952
                                            </li>

                                            <li>
                                                <span>Payment Mode:: </span>
                                                Payment Mode 3
                                            </li>


                                            <li>
                                                <span>Departure Time: </span>
                                                2:30am
                                            </li>

                                        
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className='comments'>
                                        <p>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>






                            </div>

                        </div>
                    </div>

)}

                    <div className='track-trace-more-info'>
                        <div className='track-trace-content'>
                            <div data-aos-delay="100" data-aos="fade-in">
                                <img src={TrackTraceImg1} alt='track trace image '/>
                                <h1> TRACKING NUMBER </h1>
                                <h5> Find the waybill number on your parcel - this is your tracking number.</h5>
                            </div>

                            <div data-aos-delay="200" data-aos="fade-in">
                                <img src={TrackTraceImg2} alt='track trace image '/>
                                <h1> ENTER TRACKING NO. </h1>
                                <h5> Use your tracking number in the panel at the top of this page.</h5>
                            </div>


                            <div data-aos-delay="300" data-aos="fade-in">
                                <img src={TrackTraceImg3} alt='track trace image '/>
                                <h1> LOCATION </h1>
                                <h5> Check where your parcel is right now.</h5>
                            </div>
                        </div>
                    </div>

                    <h4 data-aos-delay="400" data-aos="fade-in"> WHAT IS TRACK & TRACE? <span> Check where your parcel is at all times. With Track & Trace you can monitor your parcel's activity 24/7. </span> </h4>


                </div>
            </section>
        </>
    )
}

export default TrackPackage;