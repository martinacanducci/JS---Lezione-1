//Commento su una linea

/*Commento
su
più
righe
*/


//VARIABILI --> Spazi di memoria in cui andiamo ad inserire dati

  //Dichiarazione di una variabile con visibilità GLOBALE (tutto il programma)
  var x = 42; 
  //oppure assegnazione successiva
  var x;
  x=42; 

  // Dichiarazione di una variabile locale --> Vale soltanto nel blocco in cui la sto utilizzando
  let y=50;

  //Dichiarazione di una variabile di SOLA LETTURA (non verrà più modificata, non varia nel tempo)
  const PIGRECO = 3.1459873459876

  //Notazione camelCase (convenzione= le maiuscole separano le parole)
  var nomeCognome = "marcoRossi"


/* TIPI DI DATI PRIMITIVI (possono essere inseriti direttamente all'interno delle variabili)*/

  //Boolean --> o vero o falso
  var booleanoVero = true;
  var booleanoFalso = false;

  //Valore nullo o non definito
  var valoreNullo = null; //non ha nessun valore
  var valoreNonDefinito = undefined; //ha un valore non definito

  //Number (non differenziati tra interi o decimali) 
  var intero=1;
  var decimale=1.34;

  //Stringhe (si indicano con virgolette o apostrofo)
  var stringa1="L'albero ha fatto i frutti";
  var stringa2='L\'albero ha fatto i frutti';
  var stringa3='Il libro si chiama "Sulla strada"';
  var stringa4="Il libro si chiama \"Sulla strada\"";

  //Simbolo --> valore univoco
  var sym=Symbol();

  //Object --> oggetto contenitore composito con più tipologie di informazioni
  var obj= {
    forma:"quadrato",
    colore:"rosso"
    }
  var persona= {
    nome:"Marco",
    cognome: "Rossi",
    eta:42,
    maggiorenne: true
  }

  //Array --> anche Array contiene altri elementi, ma di solito sono lo stesso tipo di dato. L'elemento si richiama mettendo tra [] il numero di posizione dell'elemento, contando da 0
  var cifre =[1,2,3,4,5,6,7,8,9,10];
  var misto=["alfa","beta","gamma",4,5,6,7,8];

/*END - TIPI DI DATO PRIMITIVI*/


//Convertire stringa in numero
var stringaNumerica = "14.65";

var numeroIntero = parseInt(stringaNumerica);
var numeroDecimale = parseFloat(stringaNumerica);


/*LITERALS - insieme dei valori che posso assegnare ad una variabile*/ 
  
  //Literals di Numbers

  var numeroBase10=42; //Base 10
  var numeroBase8=0o111; //Base 8 - inizia con 0o
  var numeroBase16= 0xFF; //Base 16 - inizia con 0x - si usa solo nei codici colore (16 cifre, numeri e lettere, max 0xFFF; min 000000)
  var numeroBase2=0b011011011; //Base 2 - inizia con 0b - accetta solo i valori 0 e 1
  var numeroDecimale= 10.41;
  var numeroEsponenziale=10.41E+6 //(10.41 per 10 alla decima) - E+esponente

  //Literals di String --> vedi elenco completo su Documentazione JS (Literals di string) --> caratteri speciali

  var stringaApostrofo = 'Lorem ipsum'; //vedi sezione stringhe
  var stringaVirgoletta = "Lorem ipsum";
  var stringaConApostrofo = 'L\'albero ha fatto i frutti';
  var stringaConVirgolette = "Il titolo del libro è \"Sulla Strada\"";
  var stringaConTabulazione = "Tabulazione: \t 0";
  var stringaConAndataACapo = "Nuoa \n linea";

  //Literals di Array 
  var esempioDiArray = ["Hello", "World", "!"];

/*END - LITERALS*/ 

/* OPERATORI */

  // Operatore di assegnazione --> permette di assegnare un valore ad una variabile
    var assegnazione = "="; // Assegnazione semplice
    var A=5;
    var B=A; 
    
  // Operatori di assegnazione composti= assegnano e modificano allo stesso tempo 
    // +=
    // -=
    // *=
    // /=
    // %=
    // equivalgono al valore della variabile +-*/% il valore a destra dell'uguale, sia esso un numero o un'altra variabile
    var D = 7;
    // D += A; 
    // D -= A;
    // D *= A;
    // D /= A;
    // D %= A;  


  // Operatori aritmetici 

    var num1=15;
    var num2=2;

    var num3= num1%num2; // Stampa SOLO il resto dell'operazione - in genere serve a capire se un numero è pari o dispari (resto 0 o 1)
  
    var num4= num1+num2; // somma
    var num5= num1-num2; // differenza
    var num6= num1*num2; // moltiplicazione
    var num7= num1/num2; // divisione
  
  //incremento e decremento

    num3++; //Incrementa il valore di 1 --> Prima ritorna il valore e poi incrementa
    ++num3; //Incremento di 1 --> Prima incremento e poi ritorno
    num3--; // Decrementa il valore di 1 --> Prima ritorno il valore e poi decremento
    --num3; //Decrementa il valore di 1 --> Prima decrementa e poi ritorna il valore

       // --> IL PROBLEMA SI PONE QUANDO SCRIVO DIRETTAMENTE LA FORMULA SULLA STESSA LINEA


  //Meno unario
    
    var num8=-num3; //Non viene intaccato il valore di num3, diversamente dai casi di incremento e decremento
  
  //Operatori di comparazione --> confronto tra due valori

    //Uguaglianza larga
      num3==num4 // Ritorna vero se si verifica l'uguaglianza
    
      //Disuguaglianza larga
      num3!=num4 // Ritorna true se si verifica la disuguaglianza

     // Uguaglianza stretta --> analizza sia il valore che il tipo di dato (ad esempio cifra o stringa)
      var mela = 1;
      var pera = "1";
      mela === pera;    
      // Disuguaglianza stretta
      mela !== pera;

      // --> NELLE UGUAGLIANZE, SEMPRE MEGLIO USARE LE PARENTESI PER DEFINIRE L'ORDINE DELLE OPERAZIONI CHE VOGLIAMO ESEGUIRE

      // Maggiore di
      num3>num4; // Ritorna true se la condizione si verifica

      //Maggiore o uguale a
      num3>= num4;  

      //Minore di 
      num3<num4; 

      // Minore o uguale a 
      num3<=num4
  
    // Operatori logici 

      //AND --> se le due condizioni si verificano contemporanemente (entrambe sono vere), ritorna true. In tutti gli altri casi ritorna false
        var eta=63
        var eta_lavorativa = (eta>=18) && (eta<=65); 
      
      //OR --> se almeno una delle condizioni è vera, ritorna true. Solo se entrambe sono false, ritorna false
        var eta_non_lavorativa = (eta<18) || (eta>65);

      // NOT --> inverte il valore vero o falso

        var maggiorenne = !(eta<18); // Ritorna true se il la condizione NON si verifica

      //XOR (non universalmente riconosciuto, meglio combinare gli altri operatori) --> i due valori DEVONO essere diversi da loro: devono essere uno vero e uno falso. 

        // (num3<4) XOR (num3>10); 

/* END - OPERATORI */

// Esercizio 1: dichiarare due variabili a cui diamo valore 1 e 3, e una terza variabile il cui valore è dato dalla moltiplicazione delle prime due

  var var1=1;
  var var2=3;
  var var3=var1*var2;

// Esercizio 2: date due variabili "Hello" e "World" creare una stringa "Hello World!"

  var str1="Hello";
  var str2= "World";
  var str3= str1 + " " + str2 + "!";

// Esercizio 3: dati due numeri, verificare se la moltiplicazione tra loro è superiore alla somma dei loro doppi

  var n1=3;
  var n2=2;
  var moltiplicazione = n1*n2;
  var sommaDoppi = 2* (n1+n2);

  var verifica = moltiplicazione > sommaDoppi
  //oppure
  var ver = (n1*n2)>2*(n1+n2);

// Esercizio 4: dato un numero verificare se è multiplo di 7 oppure se è pari

  var n3 = 37
  var verif = (n3 % 7 == 0)||(n3 % 2 == 0);


// Import stylesheets -->Importa elementi di stile da CSS
import './style.css';
// Seleziona un elemento da index.html. Se si usa CodePen va copiato il codice html
const appDiv = document.getElementById('app');

// Modifica l'elemento selezionato 
appDiv.innerHTML = "Il valore è:" + verif;
 


