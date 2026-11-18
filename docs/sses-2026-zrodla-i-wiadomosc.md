# SSES 2026 - notatka źródłowa i wiadomość do dziennika (listopad 2026)

Notatka do niepodlinkowanej strony `/sses-2026/` (`src/pages/sses-2026.astro`) oraz tekst wiadomości
do rodziców wylosowanych uczniów. Stan na 18 listopada 2026 r.

## Źródło

Jeden plik PDF od Instytutu Badań Edukacyjnych - PIB (4 strony), kopia:
`public/documents/sses-2026/list-i-deklaracja-zgody-rodzic.pdf`.

1. Strona 1: list do rodziców (podpisała kierownik badania SSES w Polsce).
2. Strona 2: Deklaracja zgody na udział dziecka w badaniu SSES 2026 (do wydruku).
3. Strony 3-4: klauzula informacyjna RODO.

Tekst strony jest przepisem treści listu i klauzuli, bez dodatków merytorycznych.

## Jak ustawiona jest strona

- Adres: `/sses-2026/`. Nie ma jej w menu, w stopce, w wyszukiwarce serwisu ani na liście Aktualności.
- `noindex, nofollow, noarchive, noimageindex` w nagłówku oraz wyłączenie z mapy strony
  (`astro.config.mjs`), tak samo jak strona HBSC.
- To nie jest zabezpieczenie hasłem: każdy, kto zna link, ją otworzy. Na stronie nie ma danych osobowych uczniów.

## Do uzupełnienia w pliku strony (na górze `sses-2026.astro`)

| Stała | Co wpisać | Gdy puste |
| --- | --- | --- |
| `surveyDate` | np. `środę 25 listopada 2026 r.` (zdanie „w …”) | „w listopadzie i grudniu 2026 r., w terminie uzgodnionym z dyrekcją. Dokładną datę podamy w wiadomości w dzienniku” |
| `returnDeadline` | np. `poniedziałku 23 listopada 2026 r.` (zdanie „do …”) | „jak najszybciej” |
| `schoolContact` | opcjonalnie: osoba do kontaktu w szkole | wiersz nie jest pokazywany (sekretariat jest podany zawsze) |

## Czego strona świadomie nie twierdzi

- **Daty badania.** List mówi tylko: listopad i grudzień bieżącego roku, w terminie uzgodnionym z dyrekcją.
- **Procedury zwrotu deklaracji.** List mówi: „zwrócić do szkoły”. Oddanie deklaracji w sekretariacie dyrektora
  jest decyzją szkoły (18 listopada 2026 r.). Dane sekretariatu (adres, telefon, e-mail) są takie jak w stopce serwisu
  i na stronie „Pomoc i kontakt”; jeśli sekretariat dyrektora ma inny numer, trzeba je poprawić w `sses-2026.astro`.
- **Liczby godzin lekcyjnych i czasu trwania badania.** Listu o tym nie ma.

## Wiadomość do rodziców (dziennik elektroniczny)

Tylko do rodziców wylosowanych uczniów. Najlepiej dołączyć też plik PDF, żeby rodzic mógł od razu
wydrukować deklarację (strona 2).

**Temat:** Badanie SSES 2026 - prośba o zgodę na udział dziecka

Szanowni Państwo,

nasza szkoła została wylosowana do udziału w Międzynarodowym Badaniu Kompetencji Społeczno-Emocjonalnych SSES 2026, które prowadzi Instytut Badań Edukacyjnych na zlecenie MEN we współpracy z OECD. Państwa dziecko znalazło się w wylosowanej grupie uczniów.

Badanie odbędzie się w szkole [DATA] w czasie lekcji. Uczniowie rozwiążą na komputerze zadania i ankietę dotyczącą m.in. współpracy, empatii, wytrwałości i doświadczeń szkolnych. Odpowiedzi są poufne: nie zobaczą ich ani nauczyciele, ani dyrekcja.

Udział dziecka jest dobrowolny i wymaga zgody rodzica. Prosimy o podpisanie deklaracji zgody i oddanie jej w sekretariacie dyrektora szkoły do [TERMIN].

Szczegóły badania, informacja o danych osobowych i deklaracja do pobrania:
[LINK DO STRONY: https://informator.szkolamistrzow.info/sses-2026/]

W razie pytań prosimy o kontakt: [OSOBA / KONTAKT].

Z wyrazami szacunku
[PODPIS]
