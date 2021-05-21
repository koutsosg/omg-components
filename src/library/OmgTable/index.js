
import React from "react";
import {Image} from 'semantic-ui-react'
import "./style.css";
import imag1 from "../../assets/0.jpg"
import imag2 from "../../assets/01.jpg"
import imag3 from "../../assets/02.jpg"
import imag4 from "../../assets/03.jpg"

const OmgTable = ({info = {},color, classes={}}) => {
    return (
        <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
            <div className={`${classes.container}`} >
                <h3 className={`${classes.title}`} >Titlos </h3>
                <div className={`${classes.row}`}>
                    <div className={`${classes.col}`}>
                    <div className="border">
                        <Image src={imag1} />
                        <hr></hr>
                        <h3>Υγεία</h3>
                        <hr></hr>
                        <p>Ισόβια ασφάλιση υγείας με εγγύηση των ορων για όλη την οικογένεια</p>
                        <hr></hr>
                        <p>Ισόβια ασφάλιση υγείας με εγγύηση των ορων για όλη την οικογένεια</p>
                        <hr></hr>
                        <p>Κάλυψη 100% στην Ελλάδα και παντού στον κόσμο.</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        </div>
                    </div>
                    <div className={`${classes.col}`}>
                    <div className="border">
                        <Image src={imag4} />
                        <hr></hr>
                        <h3>Προστασία Ζωής</h3>
                        <hr></hr>
                        <p>Ένα δώρο αγάπης και προστασία στην οικογένεια με επιστροφή χρημάτων (cash back)</p>
                       
                        <hr></hr>
                        </div>
                    </div>
                    <div className={`${classes.col}`}>
                    <div className="border">
                        <Image src={imag2} />
                        <hr></hr>
                        <h3>Γιά το παιδί</h3>
                        <hr></hr>
                        <p>Αποταμιεύστε με προγραμματισμό από σήμερα και δώστε την ευκαιρία στο παιδί σας να επιλέξει το πανεπιστήμιο και τις σπουδές που θα απογειώσουν τα όνειρα του .</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        </div>
                    </div>
                    <div className={`${classes.col}`}>
                    <div className="border">
                        <Image src={imag3} />
                        <hr></hr>
                        <h3>Σύνταξη</h3>
                        <hr></hr>
                        <p>Για τη ζωή που ονειρεύεστε να απολαύσετε τελειώνοντας με τις εργασιακές υποχρεώσεις σας σίγουρα θέλετε ενίσχυση στο εισόδημα σας. Μη χάνετε χρόνο . Κάντε από σήμερα προγραμματισμένα τα βήματα μαζί μου για να έχετε αυτό που ικανοποιεί τις επιθυμίες σας.</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        <p>t</p>
                        <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OmgTable;