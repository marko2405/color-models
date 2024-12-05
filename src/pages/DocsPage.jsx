import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  IconButton,
  Button,
  TablePagination,
} from "@mui/material";
import { FilePresent, Link, Download } from "@mui/icons-material"; // Importuj Download ikonu

const docs = [
  {
    id: 1,
    title: "Plan Rada",
    type: "pdf",
    link: "src/assets/pdf/plan_rada.pdf",
  },
  {
    id: 2,
    title: "Boja-Wiki",
    type: "link",
    link: "https://sh.wikipedia.org/wiki/Boja",
  },
];

const DocsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Broj dokumenata po strani

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Resetuj stranicu na prvi
  };

  return (
    <Box sx={{ textAlign: "left", marginTop: "20vh", width: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Lista Dokumenata
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: "#FAF7F0" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                Tip
              </TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                Naziv Fajla
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <IconButton>
                      {doc.type === "pdf" ? <FilePresent /> : <Link />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{doc.title}</TableCell>
                  <TableCell align="right">
                    {doc.type === "pdf" ? (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#F1D3CE", // Boja dugmeta
                          color: "black", // Boja teksta
                          "&:hover": {
                            backgroundColor: "#e2b1c1", // Boja na hover
                          },
                        }}
                        onClick={() => window.open(doc.link, "_blank")}
                      >
                        Otvori
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#F1D3CE", // Boja dugmeta
                          color: "black", // Boja teksta
                          "&:hover": {
                            backgroundColor: "#e2b1c1", // Boja na hover
                          },
                        }}
                        onClick={() => window.open(doc.link, "_blank")}
                      >
                        Posetite Link
                      </Button>
                    )}
                    {doc.type === "pdf" && (
                      <IconButton
                        sx={{
                          marginLeft: "10px",
                          color: "black",
                          "&:hover": {
                            color: "#e2b1c1",
                          },
                        }}
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = doc.link;
                          link.download = doc.title; // Preuzimanje sa originalnim imenom
                          link.click();
                        }}
                      >
                        <Download /> {/* Ikona za preuzimanje */}
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10]} // Opcije za broj redova po strani
        component="div"
        count={docs.length} // Ukupan broj dokumenata
        rowsPerPage={rowsPerPage} // Trenutni broj redova po strani
        page={page} // Trenutna stranica
        onPageChange={handleChangePage} // Funkcija za promenu stranice
        onRowsPerPageChange={handleChangeRowsPerPage} // Funkcija za promenu broja redova po strani
      />
    </Box>
  );
};

export default DocsPage;
