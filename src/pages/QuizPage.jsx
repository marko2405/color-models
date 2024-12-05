import React, { useState, useEffect } from "react";
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import "../PieChart.css";

const DEBUG_RANDOM = false; // ubacuje kviz u rezim gde od 25 totalnih pitanja uzima se 10 nasumicnih

const QuizPage = () => {
  //pitanja
	const questionPool = [
		{
      "question": "Koji su osnovni kanali u RGB modelu boja?",
      "options": [
        "Crvena (R), Zelena (G), Crna (B)", 
        "Cijan (R), Magenta (G), Žuta (B)", 
        "Crvena (R), Zelena (G), Plava (B)"
      ],
      "answer": 2
    },
    {
      "question": "Šta znači skraćenica CMYK?",
      "options": [
        "Cijan (C), Magenta (M), Žuta (Y), Crna (K)", 
        "Crvena (C), Marun (M), Jačina (Y), Alfa (K)", 
        "Crvena (C), Plava (M), Zelena (Y), Crna (K)"
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
        "Aditivni modeli (RGB) kreiraju boje uklanjanjem svetlosti, dok subtraktivni (CMYK) kreiraju boje dodavanjem svetlosti.",
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
        "Da bi se izbegla konfuzija sa 'B' za plavu boju.", 
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
        "Nijansa (H), Zasićenje (S), Svetlost (L)", 
        "Zasićenje (H), Nijansa (S), Svetlost (L)", 
        "Nijansa (H), Svetlost (S), Lambda (L)"
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
        "Alfa kanal", 
        "Azurna", 
        "Ambijentalna svetlost"
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

	
  const [questions, setQuestions] = useState([]); 
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [showResults, setShowResults] = useState(false);
  const [buttonColors, setButtonColors] = useState([]);
  const [storedScore, setStoredScore] = useState(null);

  // Provera localStorage za ostvarenim poenima na kvizu
	useEffect(() => {
		const savedScore = localStorage.getItem("quizScore");
		if (savedScore) {
			setStoredScore(savedScore);
		} else {
			initializeQuiz();
		}
	}, []);

  const initializeQuiz = () => {
		const shuffledQuestions = [...questionPool].sort(() => Math.random() - 0.5);
    if (DEBUG_RANDOM === true){
      setQuestions(shuffledQuestions.slice(0, 10)); // uzimanje prvih 10
      } else {
      setQuestions(shuffledQuestions.slice(0, 25)); // uzimanje svih
      }
		setCurrentQuestion(0);
		setUserAnswers([]);
		setShowResults(false);
		setStoredScore(null);
	};
  // reset kviz funkcija 
  const resetQuiz = () => {
		const shuffledQuestions = [...questionPool].sort(() => Math.random() - 0.5);
    if (DEBUG_RANDOM === true){
      setQuestions(shuffledQuestions.slice(0, 10)); // uzimanje prvih 10
      } else {
      setQuestions(shuffledQuestions.slice(0, 25)); // uzimanje svih
      }
		setCurrentQuestion(0);
		setUserAnswers([]);
		setShowResults(false);
		setStoredScore(null);
    localStorage.removeItem("quizScore");
	};

	const handleAnswerClick = (index) => {

		const isCorrect = index === questions[currentQuestion].answer;

		// boje dugmeta
		const newButtonColors = Array(questions[currentQuestion].options.length).fill("");
		newButtonColors[index] = isCorrect ? "green" : "red";
		newButtonColors[questions[currentQuestion].answer] = "green"; 
		setButtonColors(newButtonColors);

		setUserAnswers([...userAnswers, index]);

		setTimeout(() => {
			if (currentQuestion === questions.length - 1) {
        const score = calculateScore([...userAnswers, index]);
        localStorage.setItem("quizScore", score + " / " + questions.length); // cuvanje rezultata u localStorage
        setStoredScore(score);
        setShowResults(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
			setButtonColors([]); 
		}, 1000);
	};
  
	// Kalkulisanje poena
	const calculateScore = () => {
		return userAnswers.reduce(
			(score, answer, index) => score + (answer === questions[index].answer ? 1 : 0),
			0
		);
	};

  return (
		<Box sx={{ textAlign: "center", marginTop: "20vh" }}>
			{/* prikazivanje rezultata */}
			{showResults ? (
				<Box>
					<Typography variant="h5" gutterBottom>
            Vaš rezultat: {calculateScore()} / {questions.length}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={resetQuiz}
						sx={{ marginTop: "20px" }}
					>
						Ponovi Kviz
					</Button>
				</Box>
			) : storedScore !== null  ? (
				// prikazivanje skladistenog rezultata, ako postoji
				<Box>
					<Typography variant="h5">
            Vaš prošli rezultat: {storedScore}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						onClick={resetQuiz}
						sx={{ marginTop: "20px" }}
					>
						Ponovi Kviz
					</Button>
				</Box>
			) : questions.length > 0 ? (
				<Box>
					<Typography variant="h5" gutterBottom>
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

					{/* prikazivanje opcija */}
					<List>
						{questions[currentQuestion].options.map((option, index) => (
							<ListItem key={index} sx={{ justifyContent: "center" }}>
								<Button
									variant="contained"
									onClick={() => handleAnswerClick(index)}
									sx={{
                    width: "60%", color:"#000000",
										margin: "5px",
										backgroundColor: buttonColors[index] || "#fbf7f5",
										pointerEvents: buttonColors.length ? "none" : "auto", // Disable buttons during feedback
									}}
								>
									{option}
								</Button>
							</ListItem>
						))}
					</List>
				</Box>
			) : (
				<Typography variant="h5">Učitavanje pitanja...</Typography>
			)}
		</Box>
	);
};
export default QuizPage;
