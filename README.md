![Logo](./src/images/logos/logo-pink.png)
## O projektu Mosaic - shoes
Web site sa internet prodavnicom gde se korisnik može informisati o domaćem brendu MOSAIC shoes,
kupiti proizvode ili poslati poruku preko kontakt forme. Sadršaj je responzivan. Namenjeno ženskoj populaciji.

## Tehnologije korišćene pri razvoju
Za strukturu i izgled sajta korišćeni su <b>Html</b> i <b>Css</b>, a za dinamičnost i interakciju sa korisnikom <b>JavaScript/EcmaScript</b>.
Za lakšu manipulaciju korišćen je <b>Jquery</b>, a za animiranje sadržaja korišćene su biblioteke <b>Scroll Magic</b>, <b>AOS</b>, <b>Count Up</b> i <b>Sweet Alert</b>.

Javascript kod je organizovan po modulima i korišćen je <b>Node Package Manager (npm)</b> i <b>Webpack</b> kao module bundler uz dodatne funkcionalnosti <b>webpack loader-a</b> i <b>webpack plugin-a</b>.
U projekat je implementiran <b>Bubel</b> transpiler, a da bi kod bio standardizovanog izgleda implementiran je <b>Eslint</b>.

## Struktura projekta
![Structure](./src/images/structure.png)

## Pokretanje projekta
npm i 
npm start
npm server
Otvoriti http://localhost:8080/ za prikaz u pretraživaču.

- svi projekti moraju biti na GitHub nalozima
- svi projekti moraju na GitHub-u imati tok razvoja  i čistu istoriju razvoja (završene celine po commit-ovima)
- README fajl koji sadrzi specifikaciju programa:
    • sta je tema,
    • sta program radi, 
    • koje tehnologije su koriscene pri razvoju, 
    • koja je struktura projekta, 
    • kako se projekat pokreće
- svi projekti se moraju sastojati iz .html, .css i .js fajlova
- aplikacija treba da bude responzivna (za makar tri različite veličine ekrana)
- JS programski kod mora biti modularan, organizovan po modulima, i napisan u skladu sa pređenim principima Clean Code-a
- sve primenjene tehnologije moraju prolaziti validaciju (html validator, bez JS gresaka u konzoli)
- kod mora raditi na identičan našin u pretraživačima Chrome i Firefox
- treba demonstrirati predjeno gradivo i znanje iz HTML,CSS i JS-a
- svi projekti moraju da sadrze interakciju sa korisnikom
- svi projekti moraju imati dinamicko dodavanje nekih elemenata na stranicu i reagovanje na dogadjaje
- svi projekti moraju da sadrze neki unos, cuvanje unosa (kroz localStorage) i dohvatanje tih unosa i ispis na stranici
- dodati u projekte linkove, video i/ili neku drugu vrstu hipermedije

<b>Dodatni poeni</b>
- koristiti npm za podešavanje projekta i organizaciju zavisnosti
- umesto cuvanja unosa samo u localStorage-u, koristiti mock server sa bazom podataka (json-server)
- podatke dohvatati asinhronim http pozivima sa serverske strane
- izabrati određeni deo logike koji je pokriven Unit testovima (dovoljan broj je par testova) 
