import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import "../PieChart.css";


const QuizPage = () => {
  //pitanja
	const questions = [
		{
      "question": "Koji su osnovni kanali u RGB modelu boja?",
      "options": [
        "Crvena (R), Zelena (G), Crna (B)", 
        "Cijan (C), Magenta (M), Žuta (Y)", 
        "Crvena (R), Zelena (G), Plava (B)"
      ],
      "answer": 2
    },
    {
      "question": "Šta znači skraćenica CMYK?",
      "options": [
        "Cijan (C), Magenta (M), Žuta (Y), Crna (K)", 
        "Cijan (C), Plavi (B), Crni (K), Crveni (R)", 
        "Cijan (C), Magenta (M), Zeleni (G), Crni (K)"
      ],
      "answer": 0
    },
    {
      "question": "Koji model boja se koristi na digitalnim ekranima?",
      "options": [
        "YUV", 
        "RGB", 
        "CMYK"
      ],
      "answer": 1
    },
    {
      "question": "Koji model boja se koristi u štamparstvu?",
      "options": [
        "RGB", 
        "LAB", 
        "CMYK"
      ],
      "answer": 2
    },
    {
      "question": "Šta označava 'Y' u YUV modelu?",
      "options": [
        "Osvetljenje (Luminance)", 
        "Zasićenje (Saturation)", 
        "Plava (Blue)"
      ],
      "answer": 0
    },
    {
      "question": "Koja je glavna razlika između aditivnih i subtraktivnih modela boja?",
      "options": [
        "Aditivni modeli (RGB) kreiraju boje dodavanjem svetlosti, dok subtraktivni (CMYK) kreiraju boje uklanjanjem svetlosti.", 
        "Subtraktivni modeli (RGB) kreiraju boje dodavanjem svetlosti.",
        "Aditivni modeli (CMYK) kreiraju boje uklanjanjem svetlosti."
      ],
      "answer": 0
    },
    {
      "question": "Koje boje nastaju kombinacijom crvene i zelene u RGB modelu?",
      "options": [
        "Žuta", 
        "Ljubičasta", 
        "Naranžasta"
      ],
      "answer": 0
    },
    {
      "question": "Zašto se crna boja označava kao 'K' u CMYK modelu?",
      "options": [
        "Zato što je crna boja najvažnija u štamparstvu.", 
        "Da bi se izbegla konfuzija sa 'B', koja označava plavu boju u RGB modelu.", 
        "Zato što je crna boja uvek korišćena kao osnovna u modelima boja."
      ],
      "answer": 1
    },
    {
      "question": "U kom modelu boja se koristi termin 'hue' (nijansa)?",
      "options": [
        "YUV", 
        "HSL i HSV", 
        "CMYK"
      ],
      "answer": 1
    },
    {
      "question": "Šta označava 'S' u HSV modelu?",
      "options": [
        "Osvetljenje", 
        "Zasićenje", 
        "Luminance"
      ],
      "answer": 1
    },
    {
      "question": "Koji model boja je osnova za prenos video signala u televiziji?",
      "options": [
        "RGB", 
        "YUV", 
        "HSL"
      ],
      "answer": 1
    },
    {
      "question": "Koji je glavni cilj LAB modela boja?",
      "options": [
        "Da predstavi boje u skladu sa RGB modelom.", 
        "Da predstavi boje na način kako ih ljudsko oko percipira.", 
        "Da se koriste samo u digitalnim ekranima."
      ],
      "answer": 1
    },
    {
      "question": "Koji je opseg vrednosti kanala u RGB modelu u digitalnom formatu?",
      "options": [
        "Od 0 do 255", 
        "Od 0 do 1", 
        "Od 0 do 1023"
      ],
      "answer": 0
    },
    {
      "question": "U CMYK modelu, šta se dešava kada su svi kanali na maksimalnim vrednostima?",
      "options": [
        "Rezultat je cijan boja.", 
        "Rezultat je crna boja.", 
        "Rezultat je bela boja."
      ],
      "answer": 1
    },
    {
      "question": "Koje su tri komponente u HSL modelu boja?",
      "options": [
        "Nijansa (Hue), Zasićenje (Saturation), Svetlost (Lightness)", 
        "Nijansa (Hue), Zasićenje (Saturation), Osvetljenje (Brightness)", 
        "Crvena (Red), Zelena (Green), Plava (Blue)"
      ],
      "answer": 0
    },
    {
      "question": "Koji model boja se koristi u CSS-u za definisanje transparentnosti boje?",
      "options": [
        "HSL", 
        "RGBA", 
        "CMYK"
      ],
      "answer": 1
    },
    {
      "question": "Šta označava 'A' u RGBA modelu?",
      "options": [
        "Alfa kanal, koji predstavlja prozirnost.", 
        "Saturaciju (Saturation)", 
        "Ambijentalnu svetlost (Ambient light)"
      ],
      "answer": 0
    },
    {
      "question": "Koji model boja se često koristi za medicinske slike?",
      "options": [
        "RGB", 
        "YUV", 
        "CMYK"
      ],
      "answer": 1
    },
    {
      "question": "U kom modelu boja se često koriste cilindrične koordinate?",
      "options": [
        "YUV", 
        "HSV i HSL", 
        "RGB"
      ],
      "answer": 1
    },
    {
      "question": "Koji model boja najbolje opisuje razliku između ljudske percepcije osvetljenja i boje?",
      "options": [
        "RGB", 
        "LAB", 
        "CMYK"
      ],
      "answer": 1
    },
    {
      "question": "Ako u RGB modelu postavimo sve kanale na maksimalnu vrednost, koju boju dobijamo?",
      "options": [
        "Belu", 
        "Žutu", 
        "Crnu"
      ],
      "answer": 0
    },
    {
      "question": "Ako u CMYK modelu postavimo sve kanale na 0, koju boju dobijamo?",
      "options": [
        "Plavu", 
        "Crnu", 
        "Belu"
      ],
      "answer": 2
    },
    {
      "question": "Kako bi izgledala ljubičasta boja u RGB modelu (približne vrednosti)?",
      "options": [
        "R=255, G=0, B=255", 
        "R=128, G=0, B=128", 
        "R=128, G=128, B=0"
      ],
      "answer": 1
    },
    {
      "question": "Koji model boja je najbolji za odabir boja u programima za uređivanje slika, poput Photoshopa?",
      "options": [
        "HSL ili HSV", 
        "RGB", 
        "CMYK"
      ],
      "answer": 0
    },
    {
      "question": "Koji model boja omogućava definisanje boje na osnovu temperature svetla?",
      "options": [
        "RGB", 
        "CIE XYZ", 
        "HSL"
      ],
      "answer": 1
    }
	];

	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);

	
	const handleAnswerClick = (index) => {
		setUserAnswers([...userAnswers, index]);

		if (currentQuestion === questions.length - 1) {
			setShowResults(true);
		} else {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	// Kalkulisanje poena
	const calculateScore = () => {
		return userAnswers.reduce(
			(score, answer, index) =>
				score + (answer === questions[index].answer ? 1 : 0),
			0
		);
	};

	return (
		<Box sx={{ textAlign: "center", marginTop: "20vh" }}>
			<Typography variant="h4">Kviz</Typography>
      <br />
      <br />
			{showResults ? (
				<Box>
					<Typography variant="h5">
						Your Score: {calculateScore()} / {questions.length}
					</Typography>
				</Box>
			) : (
				<Box>
					<Typography variant="h5">
						{questions[currentQuestion].question}
					</Typography>
          {/* prikazivanje slike ako postoji */}
					{questions[currentQuestion].image && (
						<Box>
							<img
								src={questions[currentQuestion].image}
								alt={`Question ${currentQuestion + 1}`}
								style={{
									width: "300px",
									height: "auto",
									marginBottom: "20px",
									borderRadius: "8px",
								}}
							/>
						</Box>
					)}
					<List>
            {questions[currentQuestion].options.map((option, index) => (
		          <ListItem key={index} button sx={{ justifyContent: "center" }}>
			          <Button
				          variant="contained"
				          onClick={() => handleAnswerClick(index)}
				          sx={{ margin: "5px" }}
			          >
				          {option}
			          </Button>
		          </ListItem>
						))}
					</List>
				</Box>
			)}
		</Box>
	);
};

export default QuizPage;
