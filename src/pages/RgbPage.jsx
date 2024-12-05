import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RgbPage() {
  return (
    <div>
      {/* Accordion 1 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Istorija</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Prvi važan korak u primeni RGB modela dogodio se sa razvojem
            televizije i filma u boji. U pedesetim godinama prošlog veka, sa
            razvojem crno-belog televizijskog signala, inženjeri su shvatili da
            bi trebalo koristiti tri kanala svetlosti za stvaranje boje na
            ekranu. Gerard Kuper i drugi ključni ljudi televizijske industrije
            razvijali su tehniku upotrebe tri boje svetlosti (crvene, zelene i
            plave) za televizijske ekrane, CRT (cathode ray tube) je omogućio
            prikazivanje slika sa velikim brojem boja što je postalo standard u
            industriji. Ovaj koncept RGB-a za prenos boje na televizijskim
            ekranima ubrzo je usvojen za široku upotrebu. Danas, svaki piksel na
            ekranu koristi tri pod-piksela (crvenu, zelenu i plavu) da bi
            stvorio bilo koju boju, omogućavajući veoma preciznu kontrolu boje.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6">O modelu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            RGB (Red, Green, Blue) je model boja zasnovan na aditivnoj sintezi
            svetlosti, što znači da se boje stvaraju dodavanjem svetlosti u
            različitim intenzitetima. Ovaj model je najpoznatiji i najčešće
            korišćen u uređajima koji emituju svetlost. Svetlost se stvara
            kombinovanjem tri osnovne boje: crvene, zelene i plave.
            Kombinovanjem ovih boja u različitim intenzitetima, mogu se dobiti
            skoro sve druge boje u vidljivom spektru svetlosti. Boje formiraju
            kroz različite nivoe intenziteta svetlosti svake od tri boje. Svaka
            boja u RGB sistemu ima vrednost između 0 i 255, gde: 0 označava
            potpuni izostanak te boje, a 255 označava maksimalni intenzitet
            svetlosti te boje. RGB (255, 255, 255) daje belu, sve tri boje na
            najvecoj vrednosti, RGB (0, 0, 0) daje crnu boju, nema svetlosti
            uopšte.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6">Prednosti i mane</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography variant="body1" gutterBottom>
              <strong>Prednosti:</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="RGB model omogućava širok spektar boja" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Idealno za svetlosne izvore: Računarski ekrani, televizori, pametni telefoni, projektori" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jednostavan za implementaciju u digitalnim tehnologijama" />
              </ListItem>
            </List>

            <Typography variant="body1" gutterBottom>
              <strong>Mane:</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Nije pogodan za štampanje jer se temelji na svetlosti" />
              </ListItem>
              <ListItem>
                <ListItemText primary="I dalje ima ograničenja u pogledu u odnosu na boje koje ljudsko oko može videti." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Različiti ekrani mogu prikazivati boje na različitim nivoima što može dovesti do neslaganja u prikazu boja." />
              </ListItem>
            </List>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default RgbPage;
