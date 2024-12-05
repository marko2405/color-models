import React from "react";
import { Paper, Typography, Box } from "@mui/material";

function HistoryPage() {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          padding: 3,
          width: "100%",
          height: "100%",
          textAlign: "center",
          boxShadow: 3, // Add shadow to the Paper component
        }}
      >
        <Typography variant="h5" gutterBottom>
          Istorija Boja
        </Typography>
        <Typography variant="body1" paragraph>
          Boje su kroz istoriju prošle kroz značajan razvoj, od filozofskih
          pokušaja da se objasni njihova priroda, do naučnih otkrića koja su im
          dala dublje značenje. Aristotel je smatrao da boje potiču iz
          kombinacije svetlosti i tame, dok su kasniji grčki filozofi pokušavali
          da ih objasne kao rezultat mešanja osnovnih "stanja" materije:
          vazduha, vode, zemlje i vatre. U periodu renesanse, umetnici poput
          Leonarda da Vincija i Michelangela razvijali su tehnike za realističan
          prikaz boja i svetlosti, koristeći pigmentne mešavine u temperama i
          uljanim bojama. Ovaj period je bio ključan za napredak u teoriji boje
          i njenoj primeni u umetnosti. Jedan od najvažnijih trenutaka u
          istoriji boje dogodio se 1666. godine, kada je Isaac Newton sproveo
          eksperiment sa prizmom i otkrio da bela svetlost može biti rastvorena
          u spektar boja – crvenu, narandžastu, žutu, zelenu, plavu, indigo i
          ljubičastu. Ovo je predstavljalo prvi pravi uvid u prirodu svetlosti i
          boje. Početkom 20. veka, boja je postala ključni element u fotografiji
          i filmovima. Prvi sistem za snimanje boja u filmu, Cinemacolor,
          napravljen je 1906. godine, dok je autochrome proces omogućio snimanje
          u boji u fotografiji 1907. godine. Boje su postale esencijalne za
          vizuelnu umetnost, komercijalnu industriju i naučne discipline. Krajem
          20. veka, sa razvojem računara, boja je postala centralni element u
          digitalnom dizajnu, televiziji, video igrama, web dizajnu i
          multimedijalnim aplikacijama. Razvijeni su različiti modeli boja, kao
          što su RGB za ekrane i CMYK za štampanje, omogućujući preciznu
          reprodukciju boja na digitalnim uređajima i u štampi. Boje su tokom
          vremena postale mnogo više od estetskog sredstva – postale su alat za
          manipulaciju percepcijom, komunikaciju i stvaranje identiteta. Sa
          napretkom u tehnologiji, boje su danas ključni element u dizajnu
          interfejsa, umetnosti, vizualizaciji podataka i novim tehnološkim
          iskustvima kao što su virtualna i proširena stvarnost. Razvoj
          tehnologije tokom 20. veka omogućio je još veću primenu boja u
          svakodnevnom životu. Umetnici i dizajneri su počeli da koriste boje ne
          samo za reprezentaciju sveta, već i kao moćan alat za stvaranje
          emocija, izražavanje ideja i komunikaciju sa publikom. U svetu
          fotografije i filma, boje su postale sredstvo za postizanje estetskog
          efekta, dok su u komercijalnom dizajnu, brendiranju i marketingu
          postale ključne za stvaranje prepoznatljivih identiteta. Razvoj
          digitalnih tehnologija doveo je do novih mogućnosti za primenu boja.
          Danas, boje su neizbežan deo svakog digitalnog interfejsa, od mobilnih
          aplikacija do video igara, web dizajna i multimedijalnih proizvoda.
          Sposobnost preciznog reprodukovanja boja putem različitih modela (RGB,
          CMYK) omogućila je dizajnerima da stvaraju vizualne doživljaje koji su
          sofisticirani i tehnički precizni. Boje su postale ključni element u
          razumevanju percepcije i psihologije, jer se zna da različite boje
          mogu uticati na emocionalno stanje i ponašanje ljudi. Psiholozi su
          proučavali efekte boja na ljude, što je rezultiralo razvojem teorija o
          tome kako različite boje utiču na raspoloženje, produktivnost i
          društvene interakcije. Danas, boje nisu samo estetski odabrane
          nijanse, već su integrisane u mnoge oblasti, od naučnih istraživanja i
          edukacije do tehnologija koje oblikuju naš svakodnevni svet. U svetu
          umetnosti, tehnologije, dizajna i komunikacije, boje su više nego ikad
          postale alat za stvaranje i prenošenje poruka, oblikujući našu
          percepciju sveta u kojem živimo.
        </Typography>
      </Paper>
    </Box>
  );
}

export default HistoryPage;
