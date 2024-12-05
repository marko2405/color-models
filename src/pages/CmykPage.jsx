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

function CmykPage() {
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
            CMYK model je postao standard u štamparskoj industriji krajem 19.
            veka, kada je industrija štampe počela da koristi mehanizme za boje.
            Iako su osnovne ideje o subtraktivnoj sintezi boja postojale još u
            18. veku, u praksi je CMYK model razvijen kako bi se optimizovao
            proces štampe. Jedan od pionira u razvoju subtraktivne sinteze bio
            je Jacob Christoph Le Blon, francuski umetnik i štampar, koji je
            1710. godine razvio sistem za mešanje boja zasnovan na cijan,
            magenti i žutom, što je postavilo temelje za kasniji razvoj CMYK
            sistema. Međutim, pravi napredak u industriji štampe došao je u 20.
            veku sa razvojem ofset štampe u 1900-im godinama, kada su se boje
            poput magente, cijan i žuta počele koristiti za postizanje širokog
            spektra boja. Zbog svoje efikasnosti u štamparskim procesima, CMYK
            je postao standard za sve vrste štampe, od novina i časopisa do
            marketinških materijala i umetničkih reprodukcija.
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
            CMYK (Cyan, Magenta, Yellow, Key/Black) je model boja zasnovan na
            subtraktivnoj sintezi svetlosti, koja se koristi u štampi. Ovaj
            model se oslanja na mešanje pigmenata ili boja u štampi. U ovom
            modelu, boje nastaju oduzimanjem svetlosti, tj. upotrebom boja koje
            apsorbuju određene talasne dužine svetlosti. U subtraktivnoj
            sintezi, svetlost se upija (apsorbuje) različitim stopama. Kada se
            cijan, magenta i žuta boja kombinuju, one oduzimaju svetlost u
            različitim delovima spektra i omogućavaju nastanak drugih boja. Na
            primer: Cijan (Cyan) – svetloplava boja koja apsorbuje crvenu
            svetlost. Magenta (M) – ljubičasta-boja koja apsorbuje zelenu
            svetlost. Žuta (Yellow, Y) – svetložuta boja koja apsorbuje plavu
            svetlost. Kombinacija cijana, magente i žute može proizvesti širok
            spektar boja, ali neće proizvesti pravu crnu, već tamno smeđu. Crna
            (K) boja se dodaje da bi se postigla potpuna crna boja i bolja
            dubina u finalnoj štampi, jer je korišćenje samo kombinacije
            osnovnih boja za stvaranje crne manje efikasno i rezultira sivkastom
            bojom. Vrednosti u CMYK modelu se izražavaju u procentima, gde 0%
            označava da boja nije prisutna, a 100% označava maksimalnu količinu
            te boje.
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
                <ListItemText primary="Omogućava preciznu reprodukciju boja na fizičkim materijalima kao što su novine, časopisi, brošure i posteri" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Koristi četiri boje za stvaranje svih drugih boja, što je posebno važno u industriji štampe" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Može se prilagoditi različitim tehnikama štampe, uključujući ofset štampanje, fleksografiju i digitalnu štampu" />
              </ListItem>
            </List>

            <Typography variant="body1" gutterBottom>
              <strong>Mane:</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Ne može se precizno prikazati sve boje koje su vidljive ljudskom oku" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Često je potrebna kalibracija opreme i podešavanje vrednosti boja kako bi se dobio željeni rezultat" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nije efikasan za prikazivanje boja na uređajima, jer se temelji na pigmentima" />
              </ListItem>
            </List>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CmykPage;
