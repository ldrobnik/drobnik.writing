import React from 'react';
import {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram,
    faPatreon
} from '@fortawesome/free-brands-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';

//constants containing the content of individual pieces
import {NOCTURINE_EN} from './texts/nocturine-en';
import {NOCTURINE_PL} from './texts/nocturine-pl';
import {CETACEAN_EN} from './texts/cetacean-en';
import {CETACEAN_PL} from './texts/cetacean-pl';
import {MOTHS_EN} from './texts/moths-en';
import {MOTHS_PL} from './texts/moths-pl';
import {CELLULOSE_EN} from './texts/cellulose-en';
import {CELLULOSE_PL} from './texts/cellulose-pl';
import {LANDMINES_EN} from './texts/landmines-en';
import {LANDMINES_PL} from './texts/landmines-pl';
import {DRONES_EN} from './texts/drones-en';
import {DRONES_PL} from './texts/drones-pl';
import {TREASURES_EN} from './texts/treasures-en';
import {TREASURES_PL} from './texts/treasures-pl';

//Names of available texts
export const TEXT_NAMES = ['nocturine', 'cetacean', 'cellulose', 'moths', 'drones', 'landmines', 'treasures'];

//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'novella fragment',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick & Joseph Spece.',
            description: <p><a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer">“Nocturine” is a novella/short fiction collection forthcoming from <i>Fathom Books</i></a>. It was originally written in Polish and published in <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank" rel="noopener noreferrer">one volume with another novella, “Cunninghamella” (<i>Forma</i> 2011)</a>. Excerpts from “Nocturine” have been featured in a number of journals — both in Polish (<a href="https://www.dwutygodnik.com/wydanie/2011/57" target="_blank" rel="noopener noreferrer"><i>Dwutygodnik</i></a>, <a href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank" rel="noopener noreferrer"><i>Dodatek Literacki</i></a>) and in English (<a href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><i>Sharkpack Annual</i></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank" rel="noopener noreferrer"><i>The Write Launch</i></a>).</p>,
            content: NOCTURINE_EN,
            theme: 'nocturine',
            firstLetter: 'B'
        },

        cetacean: {
            title: 'Cetacean',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece was originally published in <a href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer"><i>Quarterly West</i> Issue 94</a>. Its Polish translation was featured in <a href="https://afront.org.pl/" target="_blank" rel="noopener noreferrer"><i>Afront</i> Issue 2(5)/2018</a>.</p>,
            content: CETACEAN_EN,
            theme: 'cetacean',
            firstLetter: 'T'
        },

        cellulose: {
            title: 'Cellulose',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description:   <p>The piece was originally published in <a href="https://mojaveheart.com/cellulose/" target="_blank" rel="noopener noreferrer">September 2018 Issue of <i>Mojave Heart Review</i></a>. Its Polish translation was featured in the <a href="http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html" target="_blank" rel="noopener noreferrer">inaugural issue of <i>Stoner Polski</i></a>.</p>,
            content: CELLULOSE_EN,
            theme: 'cellulose',
            firstLetter: 'D'
        },

        moths: {
            title: 'Moths',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Anna De Vaul.',
            description: <p>The piece was originally published in <a href="http://www.gatehousepress.com/lighthouse/" target="_blank" rel="noopener noreferrer"><i>Lighthouse</i> Issue 10</a>. Its Polish translation was featured in <a href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank" rel="noopener noreferrer"><i>Fabularie</i> (incidentally, also Issue 10)</a>.</p>,
            content: MOTHS_EN,
            theme: 'moths',
            firstLetter: 'T'
        },

        drones: {
            title: 'Drones',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Robert Harper.',
            description: <p>The piece was originally published in <a href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/" target="_blank" rel="noopener noreferrer"><i>Bare Fiction</i> Issue 10</a>. Its Polish translation was featured in  <a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank" rel="noopener noreferrer"><i>Helikopter</i> Issue 3/2018</a>.</p>,
            content: DRONES_EN,
            theme: 'drones',
            firstLetter: 'H'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece published in <a href="https://foglifterjournal.com/" target="_blank" rel="noopener noreferrer"><i>Foglifter</i> Volume 4 Issue 1</a>.</p>,
            content: LANDMINES_EN,
            theme: 'landmines',
            firstLetter: 'I'
        },

        treasures: {
            title: 'Treasures',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Michelle Ross.',
            description: <p>The piece was published in <a href="https://atticusreview.org/treasures/" target="_blank" rel="noopener noreferrer">May 2019 in <i>Atticus Review</i></a>.</p>,
            content: TREASURES_EN,
            theme: 'treasures',
            firstLetter: 'S'
        }

    },
    pl: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'fragment minipowieści',
            credits: 'Tekst: Łukasz Drobnik. Redakcja: Paweł Nowakowski, Adrian Sikora.',
            description: <p><a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer">„Nocturine” to minipowieść/zbiór krótkich próz, który niedługo zostanie wydany nakładem wydawnictwa <i>Fathom Books</i></a>. Książka pierwotnie ukazała się po polsku <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank" rel="noopener noreferrer">w jednym tomie z inną minipowieścią pt. „Cunninghamella” (<i>Forma</i> 2011)</a>. Fragmenty „Nocturine” opublikowano w kilku czasopismach — zarówno po polsku (<a href="https://www.dwutygodnik.com/wydanie/2011/57" target="_blank" rel="noopener noreferrer"><i>Dwutygodnik</i></a>, <a href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank" rel="noopener noreferrer"><i>Dodatek Literacki</i></a>), jak i po angielsku (<a href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><i>Sharkpack Annual</i></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank" rel="noopener noreferrer"><i>The Write Launch</i></a>).</p>,
            content: NOCTURINE_PL,
            theme: 'nocturine',
            firstLetter: 'N'
        },

        cetacean: {
            title: 'Waleń',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description:<p>Tekst ukazał się pierwotnie po angielsku w <a href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer">94. numerze <i>Quarterly West</i></a>. Polski przekład zamieszczono w <a href="https://afront.org.pl/" target="_blank" rel="noopener noreferrer"><i>Afroncie</i> (numer 2(5)/2018)</a>.</p>,
            content: CETACEAN_PL,
            theme: 'cetacean',
            firstLetter: 'P'
        },


        cellulose: {
            title: 'Celuloza',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <div>Tekst ukazał się pierwotnie po angielsku <a href="https://mojaveheart.com/cellulose/" target="_blank" rel="noopener noreferrer">w 2018 r. we wrześniowym numerze <i>Mojave Heart Review</i></a>. Polski przekład zamieszczono w  <a href="http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html" target="_blank" rel="noopener noreferrer">pierwszym numerze <i>Stonera Polskiego</i></a>.</div>,
            content: CELLULOSE_PL,
            theme: 'cellulose',
            firstLetter: 'D'
        },

        moths: {
            title: 'Ćmy',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w <a href="http://www.gatehousepress.com/lighthouse/" target="_blank" rel="noopener noreferrer">10. numerze <i>Lighthouse</i></a>. Polski przekład zamieszczono w <a href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank" rel="noopener noreferrer"><i>Fabulariach</i> (także w numerze 10.)</a>.</p>,
            content: MOTHS_PL,
            theme: 'moths',
            firstLetter: 'P'
        },

        drones: {
            title: 'Drony',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w <a href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/" target="_blank" rel="noopener noreferrer">10. numerze <i>Bare Fiction</i></a>. Polski przekład zamieszczono w  <a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank" rel="noopener noreferrer"><i>Helikopterze</i> (numer 3/2018)</a>.</p>,
            content: DRONES_PL,
            theme: 'drones',
            firstLetter: 'J'
        },

        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w piśmie <a href="https://foglifterjournal.com/" target="_blank" rel="noopener noreferrer"><i>Foglifter</i> (Volume 4 Issue 1)</a>.</p>,
            content: LANDMINES_PL,
            theme: 'landmines',
            firstLetter: 'T'
        },

        treasures: {
            title: 'Skarby',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w <a href="https://atticusreview.org/treasures/" target="_blank" rel="noopener noreferrer">maju 2019 r. w <i>Atticus Review</i></a>.</p>,
            content: TREASURES_PL,
            theme: 'treasures',
            firstLetter: 'M'
        }
    }
};


//List of publications used in the Pubs section

export const PUBLICATIONS = {
    books: [
        {
            title: 'Nocturine',
            year: '',
            url: '#nocturine',
            descriptionPl: 'Angielska wersja minipowieści „Nocturine”, która ukaże się w 2019 r. nakładem wydawnictwa Fathom Books',
            descriptionEn: 'English version of the novella “Nocturine” forthcoming in 2019 from Fathom Books',
            language: 'en',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Nocturine. Cunninghamella',
            year: '2011',
            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',
            descriptionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',
            descriptionEn: 'A volume of two novellas published by Forma publishing house',
            language: 'pl',
            pieceTitle: 'Nocturine. Cunninghamella'
        }
    ],

    press: [
        {
            title: 'Pithead Chapel',
            issue: 'September 2019',
            year: '',
            url: 'https://pitheadchapel.com/',
            descriptionPl: 'Flash fiction „Entrails”',
            descriptionEn: 'Flash fiction “Entrails”',
            language: 'en',
            pieceTitle: 'Entrails'
        },
        {
            title: 'Atticus Review',
            issue: 'May 2019',
            year: '2019',
            url: 'https://atticusreview.org/treasures/',
            descriptionPl: 'Flash fiction „Treasures”',
            descriptionEn: 'Flash fiction “Treasures”',
            language: 'en',
            pieceTitle: 'Treasures'
        },
        {
            title: 'Foglifter',
            issue: 'Volume 4 Issue 1',
            year: '2019',
            url: 'https://foglifterjournal.com/',
            descriptionPl: 'Flash fiction „Landmines”',
            descriptionEn: 'Flash fiction “Landmines”',
            language: 'en',
            pieceTitle: 'Landmines'

        },
        {
            title: 'X-R-A-Y Literary Magazine',
            issue: 'Issue 17',
            year: '2019',
            url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/',
            descriptionPl: 'Flash fiction „Spores”',
            descriptionEn: 'Flash fiction “Spores”',
            language: 'en',
            pieceTitle: 'Spores'
        },
        {
            title: 'SHARKPACK Annual',
            issue: '#1/(#5)',
            year: '2018',
            url: 'http://fathombooks.org/html/issueone.html',
            descriptionPl: '„8-bit Dreams” (fragment minipowieści „Nocturine”)',
            descriptionEn: '“8-bit Dreams” (Fragment of the novella “Nocturine”)',
            language: 'en',
            pieceTitle: '8-bit Dreams'

        },
        {
            title: 'Stoner Polski',
            issue: '#1',
            year: '2018',
            url: 'http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html',
            descriptionPl: 'Flash fiction „Celuloza” (przekład tekstu „Cellulose”)',
            descriptionEn: 'Flash fiction “Celuloza” (translation of “Cellulose”)',
            language: 'pl',
            pieceTitle: 'Celuloza'
        },
        {
            title: 'Underwood',
            issue: 'September 2018',
            year: '2018',
            url: 'https://underwoodpress.com/inaugural-issue/september-2018/photosensitivity-by-lukasz-drobnik/',
            descriptionPl: 'Opowiadanie „Photosensitivity” (przekład tekstu „Światłoczułość”)',
            descriptionEn: 'Short story “Photosensitivity” (translation of “Światłoczułość”',
            language: 'en',
            pieceTitle: 'Photosensitivity'
        },
        {
            title: 'Mojave Heart Review',
            issue: 'September 2018',
            year: '2018',
            url: 'https://mojaveheart.com/cellulose/',
            descriptionPl: 'Flash fiction „Cellulose”',
            descriptionEn: 'Flash fiction “Cellulose”',
            language: 'en',
            pieceTitle: 'Cellulose'
        },
        {
            title: 'Afront',
            issue: '2(5)/2018',
            year: '2018',
            url: 'https://afront.org.pl/',
            descriptionPl: 'Opowiadanie „Skomplikowane przeczucie” i flash fiction „Waleń” (przekład tekstu „Cetacean”)',
            descriptionEn: 'Short story “Skomplikowane przeczucie” and flash fiction “Waleń” (translation of “Cetacean”)',
            language: 'pl',
            pieceTitle: 'Skomplikowane przeczucie'
        },
        {
            title: 'wydawnictwo j',
            issue: '',
            year: '2018',
            url: 'http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/',
            descriptionPl: 'Fragment powieści „Vostok”',
            descriptionEn: 'Fragment of the novel “Vostok”',
            language: 'pl',
            pieceTitle: 'Vostok'
        },
        {
            title: 'Magazyn Wizje',
            issue: '2/2018',
            year: '2018',
            url: 'http://magazynwizje.pl/lukasz-drobnik-swiatloczulosc/',
            descriptionPl: 'Opowiadanie „Światłoczułość”',
            descriptionEn: 'Short story “Światłoczułość”',
            language: 'pl',
            pieceTitle: 'Światłoczułość'

        },
        {
            title: 'Quarterly West',
            issue: '#94',
            year: '2018',
            url: 'https://www.quarterlywest.com/issue-94/cetacean',
            descriptionPl: 'Flash fiction „Cetacean”',
            descriptionEn: 'Flash fiction “Cetacean”',
            language: 'en',
            pieceTitle: 'Cetacean'
        },
        {
            title: 'Obszary Przepisane',
            issue: '#5',
            year: '2018',
            url: 'http://obszaryprzepisane.com/wp-content/uploads/2018/04/05op-1.pdf',
            descriptionPl: 'Flash fiction „Żywioły” (przekład tekstu „Elements”)',
            descriptionEn: 'Flash fiction “Żywioły” (translation of “Elements”)',
            language: 'pl',
            pieceTitle: 'Żywioły'
        },
        {
            title: 'The Chaffin Journal',
            issue: 'The 2018 Issue',
            year: '2018',
            url: 'https://english.eku.edu/chaffin-journal',
            descriptionPl: 'Flash fiction „Elements”',
            descriptionEn: 'Flash fiction “Elements”',
            language: 'en',
            pieceTitle: 'Elements'
        },
        {
            title: 'Inter-',
            issue: '2(16)/2018',
            year: '2018',
            url: 'https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/',
            descriptionPl: 'Flash fiction „Dewon” (przekład tekstu „Devonian”)',
            descriptionEn: 'Flash fiction “Dewon” (translation of “Devonian”)',
            language: 'pl',
            pieceTitle: 'Dewon'
        },
        {
            title: 'Helikopter',
            issue: '3/2018',
            year: '2018',
            url: 'https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/',
            descriptionPl: 'Flash fiction „Drony” (przekład tekstu „Drones”)',
            descriptionEn: 'Flash fiction “Drony” (translation of “Drones”)',
            language: 'pl',
            pieceTitle: 'Drony'
        },
        {
            title: 'Cartridge Lit',
            issue: 'The Foul Play Temple Issue',
            year: '2018',
            url: 'https://cartridgelit.com/2018/02/14/montezumas-revenge/',
            descriptionPl: 'Opowiadanie „montezuma’s revenge”',
            descriptionEn: 'Short story “montezuma’s revenge”',
            language: 'en',
            pieceTitle: 'montezuma’s revenge'
        },
        {
            title: 'The Write Launch',
            issue: 'February 2018',
            year: '2018',
            url: 'https://thewritelaunch.com/2018/01/heart-mighty-power/',
            descriptionPl: '„Heart Mighty Power”, fragment minipowieści „Nocturine”',
            descriptionEn: '“Heart Mighty Power”, Fragment of the novella “Nocturine”',
            language: 'en',
            pieceTitle: 'Heart Mighty Power'
        },
        {
            title: 'The Gravity of the Thing',
            issue: 'Winter 2018',
            year: '2018',
            url: 'http://thegravityofthething.com/devonian-lukasz-drobnik/',
            descriptionPl: 'Flash fiction „Devonian”',
            descriptionEn: 'Flash fiction “Devonian”',
            language: 'en',
            pieceTitle: 'Devonian'
        },
        {
            title: 'Bare Fiction',
            issue: '#10',
            year: '2017',
            url: 'http://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/',
            descriptionPl: 'Flash fiction „Drones”',
            descriptionEn: 'Flash fiction “Drones”',
            language: 'en',
            pieceTitle: 'Drones'
        },

        {
            title: 'Fabularie',
            issue: '10',
            year: '2016',
            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',
            descriptionPl: 'Flash fiction „Ćmy” (przekład tekstu „Moths”)',
            descriptionEn: 'Flash fiction “Ćmy” (translation of “Moths”)',
            language: 'pl',
            pieceTitle: 'Ćmy'
        },
        {
            title: 'Wyspa',
            issue: '4 - Suplement',
            year: '2015',
            url: 'http://kwartalnikwyspa.pl/category/numer-2015suplement/',
            descriptionPl: 'Opowiadanie „Wszystkożerność”',
            descriptionEn: 'Short story “Wszystkożerność”',
            language: 'pl',
            pieceTitle: 'Wszystkożerność'
        },
        {
            title: 'Lighthouse',
            issue: '#10',
            year: '2015',
            url: 'http://www.gatehousepress.com/lighthouse/',
            descriptionPl: 'Flash fiction „Moths”',
            descriptionEn: 'Flash fiction “Moths”',
            language: 'en',
            pieceTitle: 'Moths'
        },
        {
            title: 'Lampa',
            issue: '3/2012',
            year: '2012',
            url: 'http://lampa.art.pl/',
            descriptionPl: 'Początkowe rozdziały powieści „Vostok”',
            descriptionEn: 'Initial chapters of the novel “Vostok”',
            language: 'pl',
            pieceTitle: 'Vostok'
        },
        {
            title: 'Dodatek Literacki',
            issue: '#9',
            year: '2011',
            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Dwutygodnik.com',
            issue: '#57',
            year: '2011',
            url: 'http://www.dwutygodnik.com/wydanie/2011/57',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Latarnia Morska',
            issue: '1–2 (11–12) 2009/1 (13) 2010',
            year: '2009/2010',
            url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Pro Arte online 3',
            issue: '61/2006',
            year: '2006',
            url: 'http://proarte.net.pl',
            descriptionPl: 'Opowiadanie „ośmiobitowe sny”',
            descriptionEn: 'Short story “ośmiobitowe sny”',
            language: 'pl',
            pieceTitle: 'ośmiobitowe sny'
        },
        {
            title: 'Rita Baum',
            issue: '#10',
            year: '2006',
            url: 'https://issuu.com/ritabaumwroclaw/docs/10',
            descriptionPl: 'Opowiadanie „Rozbieranie do snu”',
            descriptionEn: 'Short story “Rozbieranie do snu”',
            language: 'pl',
            pieceTitle: 'Rozbieranie do snu'
        },
        {
            title: 'Lampa',
            issue: '6/2005',
            year: '2005',
            url: 'http://lampa.art.pl/',
            descriptionPl: 'Opowiadanie „Astroskopia”',
            descriptionEn: 'Short story “Astroskopia”',
            language: 'pl',
            pieceTitle: 'Astroskopia'
        }
    ],

    collections: [
        {
            title: 'Transformation Anthology',
            year: '2019',
            url: 'http://theselkie.co.uk/anthology/',
            descriptionPl: 'Flash fiction „Airborne” w antologii opublikowanej przez magazyn The Selkie',
            descriptionEn: 'Flash fiction “Airborne” in an anthology published by The Selkie',
            language: 'en',
            pieceTitle: 'Airborne'
        },
        {
            title: '2017. Antologia współczesnych polskich opowiadań',
            year: '2017',
            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',
            descriptionEn: 'A collection featuring my piece “Jeśli zapłonę” (Forma)',
            language: 'pl',
            pieceTitle: 'Jeśli zapłonę'
        },
        {
            title: '2014. Antologia współczesnych polskich opowiadań',
            year: '2014',
            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',
            descriptionEn: 'A collection featuring my piece “Biegnący człowiek” (Forma)',
            language: 'pl',
            pieceTitle: 'Biegnący człowiek'
        }
    ]

};


//Colours used in themes
export const THEME_COLORS = {
    nocturine: {
        color1: '#daafb5',
        color2: '#da849a'
    },
    cetacean: {
        color1: '#52e1f6',
        color2: '#3eb3d7'
    },
    cellulose: {
        color1: '#82e672',
        color2: '#6ad540'
    },
    moths: {
        color1: '#4db3ff',
        color2: '#4289ed'
    },
    drones: {
        color1: '#ff6a7d',
        color2: '#ee5b7b'
    },
    landmines: {
        color1: '#f4acca',
        color2: '#f47ba1'
    },
    treasures: {
        color1: '#e7b84c',
        color2: '#b88636'
    },
    blackAndWhite: {
        color1: '#fafafa',
        color2: '#f4f4f4'
    }
};

//constant containing text used on the website:

export const WEBSITE_TEXT = {
    navbar: {
        title: 'Łukasz Drobnik',
        subtitle: {
            en: 'fiction writer',
            pl: 'prozaik'
        },
        language: {
            en: 'pl',
            pl: 'en'
        },
        colourMode: 'b&w'
    },
    intro: {
        title: 'Łukasz Drobnik',
        subtitle: {
            en: 'fiction writer',
            pl: 'prozaik'
        },
        body: {
            en: <div>
                <p>I’m a bilingual writer who creates prose in his native Polish but recently mostly in English, his second language. My favourite pastime is taking literary fiction and mixing it with other genres, and I’m an enormous flash fiction fan. (Though I don’t shy away from longer forms.)</p>
                <p><AnchorLink href='#nocturine' offset="60px"><b>NOCTURINE</b></AnchorLink>, my novella/short fiction collection is now forthcoming from <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a>, and my work has been featured in <i>Atticus Review</i>, <i>Quarterly West</i>, <i>Lighthouse</i>, <i>Bare Fiction</i>, <i>SHARKPACK Annual</i>, <i>Foglifter</i>, <i>X-R-A-Y Literary Magazine</i> and elsewhere. Below you can find a <AnchorLink href='#pubs' offset="60px"><b>FULL LIST OF PUBLICATIONS</b></AnchorLink> and also <AnchorLink href='#read' offset="60px"><b>READ</b></AnchorLink> some of my pieces.</p>
            </div>,
            pl: <div>
                <p>Jestem dwujęzycznym pisarzem, który tworzy prozę po polsku (w&nbsp;moim ojczystym języku), ale ostatnio głównie po angielsku. Najlepiej się bawię, gdy biorę tzw. prozę wysokoartystyczną i&nbsp;wplatam w&nbsp;nią elementy innych gatunków, a&nbsp;do tego jestem ogromnym fanem <i>flash fiction</i> (czyli bardzo krótkich opowiadań). Nie stronię jednak od dłuższych form.</p>
                <p>Niedługo nakładem wydawnictwa <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a> ukaże się napisana przeze mnie minipowieść/zbiór krótkich próz <AnchorLink href='#nocturine' offset="60px"><b>NOCTURINE</b></AnchorLink>, a&nbsp;moje utwory były publikowane m.in. w&nbsp;<i>Atticus Review</i>, <i>Quarterly West</i>, <i>Lighthouse</i>, <i>Bare Fiction</i>, <i>SHARKPACK Annual</i>, <i>Foglifter</i> oraz <i>X-R-A-Y Literary Magazine</i>. Poniżej można znaleźć <AnchorLink href='#pubs' offset="60px"><b>PEŁNĄ LISTĘ PUBLIKACJI</b></AnchorLink>, a&nbsp;także <AnchorLink href='#read' offset="60px"><b>POCZYTAĆ</b></AnchorLink> kilka moich tekstów.</p>
            </div>
        },
        patreon: {
            en: <a href="https://www.patreon.com/drobnik" target="_blank" rel="noopener noreferrer">Please consider becoming my&nbsp;<FontAwesomeIcon icon={faPatreon}></FontAwesomeIcon>atron!</a>,
            pl: <a href="https://www.patreon.com/drobnik" target="_blank" rel="noopener noreferrer">Rozważ, proszę, zostanie moim&nbsp;<FontAwesomeIcon icon={faPatreon}></FontAwesomeIcon>atronem!</a>
        },
        social: [
            {
                name: <div><FontAwesomeIcon icon={faTwitterSquare} /> @drobnik |</div>,
                url: 'https://twitter.com/drobnik'
            },
            {
                name: <div><FontAwesomeIcon icon={faInstagram} /> @drobnikwrites |</div>,
                url: 'https://www.instagram.com/drobnikwrites/'
            },
            {
                name: <div><FontAwesomeIcon icon={faFacebookSquare} /> @drobnikwrites</div>,
                url: 'https://www.facebook.com/drobnikwrites'
            }
        ]
    },
    nocturine: {
        title: {
            en: 'Nocturine',
            pl: 'Nocturine'
        },
        body: {
            en: [
                'english1',
                'english2'
            ],
            pl: [
                'polish1',
                'polish2'
            ],
        }

    },
    publications: {
        title: {
            en: 'Publications',
            pl: 'Publikacje'
        },
        headlines: {
            en: {
                books: 'Books',
                press: 'Press',
                collections: 'Collections'
            },
            pl: {
                books: 'Książki',
                press: 'Prasa',
                collections: 'Zbiory'
            }
        },
        chooseLanguage: {
            en: {
                label: 'Display pieces written in:',
                english: 'English',
                polish: 'Polish'
            },
            pl: {
                label: 'Wyświetl teksty napisane po:',
                english: 'angielsku',
                polish: 'polsku'
            }
        }
    },
    read: {
        title: {
            en: 'Reading Room',
            pl: 'Czytelnia'
        },
        introduction: {
            en: 'Here’s a handful of my pieces. Maybe you’d like to read them:',
            pl: 'Oto kilka moich tekstów. Może zechcesz je przeczytać:'
        },
        backToTop: {
            en: 'Back to Top',
            pl: 'Wróć do początku'
        }
    },
    text: {
        nextText: {
            en: 'Up next: ',
            pl: 'Następny tekst: '
        },
        backToTop: {
            en: 'Back to Top',
            pl: 'Wróć do początku'
        },
        home: {
            en: 'Home',
            pl: 'Strona główna'
        }
    }

};

//Content of Instagram links

export const LINKS = [
    {
        title: 'Official website',
        subtitle: 'www.drobnik.com',
        url: '/'
    },
    {
        title: 'Read “Treasures”',
        subtitle: 'in Atticus Review',
        url: 'https://atticusreview.org/treasures/'
    },
    {
        title: 'Read “Spores”',
        subtitle: 'in X-R-A-Y Literary Magazine',
        url: '/'
    },
    {
        title: 'Patreon',
        subtitle: 'please consider supporting me',
        url: 'https://www.patreon.com/drobnik'
    },
    {
        title: 'Buy Foglifter Vol. 4 Issue 1',
        subtitle: 'with my piece “Landmines” inside',
        url: 'https://foglifterjournal.com/shop/'
    },
    {
        title: 'Buy Sharkpack Annual',
        subtitle: 'with my piece “8-bit Dreams” inside',
        url: 'https://shop.trycelery.com/page/5c2f6d549d2284130021165b'
    },
    {
        title: 'Twitter',
        subtitle: '@drobnik',
        url: 'https://twitter.com/drobnik'
    },
    {
        title: 'Facebook',
        subtitle: '@drobnikwrites',
        url: 'https://www.facebook.com/drobnikwrites/'
    }
];

//Keyframes of pulsating animation

export const PULSATE_KEYFRAMES = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 1;
  }
`;

//Keyframes for blur animation

export const BLUR_KEYFRAMES = keyframes`

  to {
    filter: blur(10px);
  }
  
`;