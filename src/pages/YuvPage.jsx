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

function YuvPage() {
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
            YUV model boja je nastao tokom 1940-ih godina, kada je bilo potrebno
            razviti sistem za prenos boje putem postojećih crno-belih
            televizijskih signala. Razdvajanjem luminance (Y) i chrominance (U,
            V) informacija omogućeno je efikasno prenošenje boja, što je
            omogućilo kompatibilnost sa starijim crno-belim uređajima. Prvi
            radovi na ovom modelu potiču od istraživača poput Karlheinza B.
            Klingera, koji su radili na dodavanju boje u televizijske signale. U
            1960-im godinama, YUV model je postao standard u televizijskim
            sistemima, kao što su NTSC u SAD-u i PAL u Evropi. Ovi sistemi su
            koristili YUV za prenos boje zajedno sa crno-belim signalom, što je
            omogućilo televizorima da prikazuju boje koristeći samo jedan
            signal.Danas, YUV model je ključan u digitalnom videu i kompresiji,
            posebno u standardima kao što su MPEG i JPEG. U digitalnom video
            kodiranju, kao što je u DVD, Blu-ray i streaming video formatima,
            YUV model je koristan jer omogućava efikasnu kompresiju, smanjujući
            količinu podataka potrebnih za prenos visoko kvalitetnih video
            sadržaja. Tehnologija kompresije poput H.264 i HEVC (H.265) koristi
            YUV model za efikasnu kompresiju video sadržaja, omogućavajući
            prenos visoko kvalitetnog videa preko interneta, uz minimalno
            opterećenje mreže.
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
            YUV je model boja koji se koristi u video i televizijskoj
            industriji, kao i za obrada slike u digitalnim medijima. Ovaj model
            razdvaja informacije o svetlini (luminanci) i boji (krominanci)
            slike. YUV model je dizajniran kako bi olakšao kompresiju i prenos
            video signala, kao i omogućio bolje prepoznavanje i reprodukciju
            boja u video sistemima. Y (Luminanca) – Ova komponenta predstavlja
            svetlinu ili osvetljenost slike. Y kanal sadrži informacije o sivoj
            vrednosti slike, tj. koliko je svetla u određenom pikselu. Ovaj
            kanal omogućava percepciju svetline i ključan je za prikazivanje
            detalja slike. U (Chrominance) – Ova komponenta nosi informacije o
            boji slike, preciznije o razlici između plave boje i svetline (u
            odnosu na luminancu). U kanal se koristi za određivanje nivoa plavih
            tonova u slici. V (Chrominance) – Slično kao U kanal, V komponenta
            nosi informacije o razlici između crvene boje i svetline. V kanal
            kontroliše crvene tonove slike. YUV model koristi razdvajanje
            luminance i chrominance kako bi se postigla efikasnija kompresija,
            budući da ljudsko oko manje oseti promene u boji (U i V komponente)
            nego u svetlini (Y komponenta). Ovo omogućava veće smanjenje
            količine podataka potrebnih za prenos slike ili video zapisa.
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
                <ListItemText primary="Dizajniran kako bi bio kompatibilan sa različitim televizijskim sistemima" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Omogućava smanjenje količine podataka za U i V kanale, čime se postiže manja veličina fajlova bez značajnog gubitka kvaliteta slike" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Omogućava lakše procesiranje i prenos boja, dok istovremeno štedi prostor za luminancu, što je od suštinskog značaja za video prenos, uživo prenos i arhiviranje video materijala" />
              </ListItem>
            </List>

            <Typography variant="body1" gutterBottom>
              <strong>Mane:</strong>
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Razdvajanje boje od svetline može dovesti do manjih gubitaka u preciznosti boja u određenim situacijama, posebno u nižim rezolucijama" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ekrani koji koriste RGB tehnologiju ne koriste YUV direktno, pa je potrebno izvršiti konverziju između YUV i RGB " />
              </ListItem>
            </List>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default YuvPage;
