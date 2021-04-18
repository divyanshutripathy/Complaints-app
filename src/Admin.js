import React, { useEffect, useState } from 'react';
import './Admin.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import db from './firebase';

export default function Admin() {

    const [complaints, setComplaints] = useState([])

    useEffect(() => {
        db.collection("complaints").orderBy("timestamp").onSnapshot(snapshot => {
            setComplaints(snapshot.docs.map(doc => (
              ({id: doc.id, complaint: doc.data()})
            )))
          });
        }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));

    return (
        <div className="complaints_list">
            {complaints.map(({id, complaint}) => (
                <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={id}
                >
                <Typography className={useStyles.heading}>{complaint.name}: {complaint.no}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Complaint: {complaint.complaint}
                </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </div>
    )
}
