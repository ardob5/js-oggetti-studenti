// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
  Nome : 'Riccardo',
  Cognome : 'Belli',
  Eta : 23
};

// -Stampare a schermo attraverso il for in tutte le proprietà;
for (var key in student) {
  console.log(key + " " + student[key]);
}

// - Creare un array di oggetti di studenti.
var students = [
  {
    Nome: 'Alfredo',
    Cognome: 'Sbirula',
    Eta: 35
  },
  {
    Nome: 'Elisa',
    Cognome: 'Piscitelli',
    Eta: 30
  },
  {
    Nome: 'Francesco',
    Cognome: 'Nonso',
    Eta: 26
  }
];
console.log(students);
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < students.length; i++) {
  var objectId = students[i];
  var nameStudent = objectId.Nome;
  var surnameStudent = objectId.Cognome;
  var ageStudent = objectId.Eta;
  console.log(nameStudent + " " + surnameStudent + " " + ageStudent);
}
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newName = prompt("Inserisci il nome del nuovo studente");
var newSurname = prompt("Inserisci il cognome del nuovo studente");
var newAge = parseInt(prompt("Inserisci l'età del nuovo studente"));
var newStudent = {
  Nome: newName,
  Cognome: newSurname,
  Eta: newAge
};
students.push(newStudent);
console.log(students);
