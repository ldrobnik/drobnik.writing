import React from 'react';
import {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram,
    faPatreon
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faBook,
    faYinYang
} from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
import posed from "react-pose";

//Names of available texts
export const TEXT_NAMES = ['nocturine', 'cetacean', 'cellulose', 'moths', 'drones', 'landmines', 'treasures'];

//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'novella fragment',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick & Joseph Spece.',
            description: <p>“Nocturine” is a novella/short fiction collection forthcoming from <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><i>Fathom Books</i></a>. It was originally written <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank" rel="noopener noreferrer">in Polish</a> and published in one volume with another novella, “Cunninghamella” (<i>Forma</i> 2011). Excerpts from “Nocturine” have been featured in a number of journals — both in Polish (<a href="https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html" target="_blank" rel="noopener noreferrer"><i>Dwutygodnik</i></a>, <a href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank" rel="noopener noreferrer"><i>Dodatek Literacki</i></a>) and in English (<a href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><i>Sharkpack Annual</i></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank" rel="noopener noreferrer"><i>The Write Launch</i></a>).</p>,
            content: NOCTURINE_EN,
            theme: 'nocturine'
        },

        cetacean: {
            title: 'Cetacean',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece was originally published in <a href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer"><i>Quarterly West</i></a> Issue&nbsp;94. Its Polish translation was featured in <a href="https://afront.org.pl/" target="_blank" rel="noopener noreferrer"><i>Afront</i></a> Issue 2(5)/2018.</p>,
            content: CETACEAN_EN,
            theme: 'cetacean'
        },

        cellulose: {
            title: 'Cellulose',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description:   <p>The piece was originally published in September 2018 Issue of <a href="https://mojaveheart.com/cellulose/" target="_blank" rel="noopener noreferrer"><i>Mojave Heart Review</i></a>. Its Polish translation was featured in the inaugural issue of <a href="http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html" target="_blank" rel="noopener noreferrer"><i>Stoner Polski</i></a>.</p>,
            content: CELLULOSE_EN,
            theme: 'cellulose'
        },

        moths: {
            title: 'Moths',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Anna De Vaul.',
            description: <p>The piece was originally published in <a href="http://www.gatehousepress.com/lighthouse/" target="_blank" rel="noopener noreferrer"><i>Lighthouse</i></a> Issue&nbsp;10. Its Polish translation was featured in <a href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank" rel="noopener noreferrer"><i>Fabularie</i></a> (incidentally, also Issue&nbsp;10).</p>,
            content: MOTHS_EN,
            theme: 'moths'
        },

        drones: {
            title: 'Drones',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Robert Harper.',
            description: <p>The piece was originally published in <a href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/" target="_blank" rel="noopener noreferrer"><i>Bare Fiction</i></a> Issue&nbsp;10. Its Polish translation was featured in  <a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank" rel="noopener noreferrer"><i>Helikopter</i></a> Issue&nbsp;3/2018.</p>,
            content: DRONES_EN,
            theme: 'drones'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece published in <a href="https://foglifterjournal.com/" target="_blank" rel="noopener noreferrer"><i>Foglifter</i></a> Volume&nbsp;4 Issue&nbsp;1.</p>,
            content: LANDMINES_EN,
            theme: 'landmines'
        },

        treasures: {
            title: 'Treasures',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Michelle Ross.',
            description: <p>The piece was published in May 2019 in <a href="https://atticusreview.org/treasures/" target="_blank" rel="noopener noreferrer"><i>Atticus Review</i></a>.</p>,
            content: TREASURES_EN,
            theme: 'treasures'
        }

    },
    pl: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'fragment minipowieści',
            credits: 'Tekst: Łukasz Drobnik. Redakcja: Paweł Nowakowski, Adrian Sikora.',
            description: <p>„Nocturine” to minipowieść/zbiór krótkich próz w&nbsp;przygotowaniu przez wydawnictwo <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><i>Fathom Books</i></a>. Książka pierwotnie ukazała się <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank" rel="noopener noreferrer">po polsku</a> w&nbsp;jednym tomie z&nbsp;inną minipowieścią pt. „Cunninghamella” (<i>Forma</i> 2011). Fragmenty „Nocturine” opublikowano w&nbsp;kilku czasopismach — zarówno po polsku (<a href="https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html" target="_blank" rel="noopener noreferrer"><i>Dwutygodnik</i></a>, <a href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank" rel="noopener noreferrer"><i>Dodatek Literacki</i></a>), jak i&nbsp;po angielsku (<a href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><i>Sharkpack Annual</i></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank" rel="noopener noreferrer"><i>The Write Launch</i></a>).</p>,
            content: NOCTURINE_PL,
            theme: 'nocturine'
        },

        cetacean: {
            title: 'Waleń',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description:<p>Tekst ukazał się pierwotnie po angielsku w&nbsp;94. numerze <a href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer"><i>Quarterly West</i></a>. Polski przekład zamieszczono w&nbsp;<a href="https://afront.org.pl/" target="_blank" rel="noopener noreferrer"><i>Afroncie</i></a> (numer 2(5)/2018).</p>,
            content: CETACEAN_PL,
            theme: 'cetacean'
        },


        cellulose: {
            title: 'Celuloza',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <div>Tekst ukazał się pierwotnie po angielsku w&nbsp;2018&nbsp;r. we wrześniowym numerze <a href="https://mojaveheart.com/cellulose/" target="_blank" rel="noopener noreferrer"><i>Mojave Heart Review</i></a>. Polski przekład zamieszczono w&nbsp;pierwszym numerze <a href="http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html" target="_blank" rel="noopener noreferrer"><i>Stonera Polskiego</i></a>.</div>,
            content: CELLULOSE_PL,
            theme: 'cellulose'
        },

        moths: {
            title: 'Ćmy',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;10. numerze <a href="http://www.gatehousepress.com/lighthouse/" target="_blank" rel="noopener noreferrer"><i>Lighthouse</i></a>. Polski przekład zamieszczono w&nbsp;<a href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank" rel="noopener noreferrer"><i>Fabulariach</i></a> (także w&nbsp;numerze&nbsp;10.).</p>,
            content: MOTHS_PL,
            theme: 'moths',
        },

        drones: {
            title: 'Drony',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;10. numerze <a href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/" target="_blank" rel="noopener noreferrer"><i>Bare Fiction</i></a>. Polski przekład zamieszczono w&nbsp;<a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank" rel="noopener noreferrer"><i>Helikopterze</i></a> (numer 3/2018).</p>,
            content: DRONES_PL,
            theme: 'drones'
        },

        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;piśmie <a href="https://foglifterjournal.com/" target="_blank" rel="noopener noreferrer"><i>Foglifter</i></a> (Volume&nbsp;4 Issue&nbsp;1).</p>,
            content: LANDMINES_PL,
            theme: 'landmines'
        },

        treasures: {
            title: 'Skarby',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;maju 2019&nbsp;r. w&nbsp;<a href="https://atticusreview.org/treasures/" target="_blank" rel="noopener noreferrer"><i>Atticus Review</i></a>.</p>,
            content: TREASURES_PL,
            theme: 'treasures'
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
            descriptionEn: 'Volume of two novellas published by Forma publishing house',
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
            descriptionEn: '“8-bit Dreams” (a fragment of the novella “Nocturine”)',
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
            descriptionPl: '„Heart Mighty Power” (fragment minipowieści „Nocturine”)',
            descriptionEn: '“Heart Mighty Power” (a fragment of the novella “Nocturine”)',
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
            url: 'https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html',
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
            descriptionEn: 'Short story collection featuring my piece “Jeśli zapłonę” (Forma)',
            language: 'pl',
            pieceTitle: 'Jeśli zapłonę'
        },
        {
            title: '2014. Antologia współczesnych polskich opowiadań',
            year: '2014',
            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',
            descriptionEn: 'Short story collection featuring my piece “Biegnący człowiek” (Forma)',
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
        home: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        language: {
            en: 'pl',
            pl: 'en'
        },
        colourMode: <FontAwesomeIcon icon={faYinYang}></FontAwesomeIcon>,
        read: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
    },
    intro: {
        title: 'Łukasz Drobnik',
        subtitle: {
            en: 'fiction writer',
            pl: 'prozaik'
        },
        body: {
            en: <div>
                <p>I’m a bilingual writer creating fiction in my native Polish but recently mostly in English. My favourite pastime is taking literary fiction and mixing it with other genres, and I’m an enormous flash fiction fan. (Though I don’t shy away from longer forms.)</p>
                <p><AnchorLink href='#nocturine' offset="60px"><b>NOCTURINE</b></AnchorLink>, my novella/short fiction collection is now forthcoming from <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a>, and my other work has been featured in <i>Atticus Review</i>, <i>Quarterly West</i>, <i>Lighthouse</i>, <i>Bare Fiction</i>, <i>SHARKPACK Annual</i>, <i>Foglifter</i>, <i>X-R-A-Y Literary Magazine</i> and elsewhere. Below you can find a <AnchorLink href='#pubs' offset="60px"><b>FULL LIST OF PUBLICATIONS</b></AnchorLink> and also <AnchorLink href='#read' offset="60px"><b>READ</b></AnchorLink> some of my pieces.</p>
            </div>,
            pl: <div>
                <p>Jestem dwujęzycznym pisarzem, który tworzy prozę po polsku (w&nbsp;moim ojczystym języku), ale ostatnio głównie po angielsku. Najlepiej się bawię, gdy biorę tzw. prozę wysokoartystyczną i&nbsp;wplatam w&nbsp;nią elementy innych gatunków, a&nbsp;do tego jestem ogromnym fanem <i>flash fiction</i> (czyli bardzo krótkich opowiadań). Nie stronię jednak od dłuższych form.</p>
                <p>Niedługo nakładem wydawnictwa <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a> ukaże się napisana przeze mnie minipowieść/zbiór krótkich próz <AnchorLink href='#nocturine' offset="60px"><b>NOCTURINE</b></AnchorLink>, a&nbsp;moje utwory były publikowane m.in. w&nbsp;<i>Atticus Review</i>, <i>Quarterly West</i>, <i>Lighthouse</i>, <i>Bare Fiction</i>, <i>SHARKPACK Annual</i>, <i>Foglifter</i> oraz <i>X-R-A-Y Literary Magazine</i>. Poniżej można znaleźć <AnchorLink href='#pubs' offset="60px"><b>PEŁNĄ LISTĘ PUBLIKACJI</b></AnchorLink>, a&nbsp;także <AnchorLink href='#read' offset="60px"><b>POCZYTAĆ</b></AnchorLink> kilka moich tekstów.</p>
            </div>
        },
        patreon: {
            en: {
                message: <div>Please consider supporting me on&nbsp;&nbsp;<FontAwesomeIcon icon={faPatreon}></FontAwesomeIcon></div>,
                path: 'https://www.patreon.com/drobnik'
            },
            pl: {
                message: <div>Pomyśl, proszę, o&nbsp;wsparciu mnie na&nbsp;&nbsp;<FontAwesomeIcon icon={faPatreon}></FontAwesomeIcon></div>,
                path: 'https://www.patreon.com/drobnik'
            }
        },
        social: [
            {
                name: <div><FontAwesomeIcon icon={faTwitterSquare} />&nbsp;@drobnik</div>,
                url: 'https://twitter.com/drobnik'
            },
            {
                name: <div><FontAwesomeIcon icon={faInstagram} />&nbsp;@drobnikwrites</div>,
                url: 'https://www.instagram.com/drobnikwrites/'
            },
            {
                name: <div><FontAwesomeIcon icon={faFacebookSquare} />&nbsp;@drobnikwrites</div>,
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
            en: <div>
                <p>The end of the world starts like an ad campaign. When black cubes appear above the city of Poznań, some think it’s just another mobile network operator entering the market. These include Mietek, an unemployed gay man in his twenties, suddenly abandoned by his boyfriend. Soon his best friend also disappears while the black cubes in the sky start to multiply, taking up more and more of the urban space.</p>
                <p><span className='bookTitle'>NOCTURINE</span> is a novella/short fiction collection that takes you on a genre-bending journey from contemporary Poznań devoured by an 8-bit amoeba to a house comprised of countless floors, to a homestead haunted by dummies, to the inside of a human body. Each of six chapters/stories is told by a different narrator in a frantic yet melancholic style.</p>
                <p>The book was originally published in Polish, in one volume with another novella, “Cunninghamella” (Forma 2011). Now, my authorial translation into English is forthcoming from <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a>.</p>
            </div>,
            pl: <div>
                <p>Koniec świata zaczyna się jak kampania reklamowa. Gdy nad Poznaniem zawisają czarne sześciany, niektórzy sądzą, że to po prostu kolejny operator sieci komórkowej wchodzi na rynek. Do tej grupy należy Mietek, bezrobotny, dwudziestoparoletni gej, którego nagle opuszcza chłopak. Niedługa jego najlepsza przyjaciółka także znika, podczas gdy czarne sześciany na niebie zaczynają się mnożyć, zabierając coraz więcej miejskiej przestrzeni.</p>
                <p><span className='bookTitle'>NOCTURINE</span> to minipowieść/zbiór krótkich próz, a&nbsp;tom ten zabiera czytelnika na niejednoznaczną gatunkowo podróż z&nbsp;Poznania pożeranego przez ośmiobiotową amebę przez dom złożony z&nbsp;niezliczonych pięter i&nbsp;nawiedzane przez manekiny domostwo aż po wnętrze ludzkiego ciała. Każdy z&nbsp;sześciu rozdziałów/opowiadań ma innego narratora, który snuje opowieść w&nbsp;gorączkowym, lecz melancholijnym stylu.</p>
                <p>Książka została pierwotnie wydana po polsku w&nbsp;jednym tomie z&nbsp;inną minipowieścią pt. „Cunninghamella”. Niedługo nakładem wydawnictwa <a href="http://fathombooks.org/" target="_blank" rel="noopener noreferrer"><b>FATHOM BOOKS</b></a> ukaże się jej autorski przekład na angielski.</p>
            </div>
        },
        button: {
            en: {
                message: 'Read an excerpt',
                path: '/texts/nocturine'
            },
            pl: {
                message: 'Przeczytaj fragment',
                path: '/texts/nocturine'
            }
        },
        quotes: {
            en: [
                {
                  quote: <div>Drobnik wowed us with his free-wheeling sentence structure + utterly unique vision.</div>,
                  source: 'FATHOM BOOKS, the publisher'
                },
                {
                    quote: <div>To say Nocturine is oneiric isn’t enough — it’s a psychedelic. It kicks in slowly, swaying you from the very first sentences. Hypnotic phrase. Beautiful!</div>,
                    source: 'Patrycja Janowska, LAMPA 1–2/2012'
                },
                {
                    quote: <div>Drobnik creates an evocative, oppressive mood through the dangerous unknown; subtly, with a single shift outside the boundaries of what we are used to.</div>,
                    source: 'Ilona Witkowska, ODRA 5/2012'
                },
                {
                    quote: <div>Drobnik’s strategy is to combine a fast-paced plot typical of popular literature with the highly metaphorical language of literary fiction.</div>,
                    source: 'Rafał Derda, ELEWATOR 2/2012'
                },
                {
                    quote: <div>I’m not going to build suspense. Let me say it right away: this book will drag you in with its thousand tentacles (everyone gets their own, according to their liking).</div>,
                    source: 'Marta Sawicka-Danielak, BLUSZCZ 2/2012'
                }
            ],
            pl: [
                {
                    quote: <div>Drobnik zachwycił nas swoją beztroską składnią i&nbsp;absolutnie wyjątkową wizją.</div>,
                    source: 'FATHOM BOOKS, wydawca'
                },
                {
                    quote: <div>Powiedzieć, że Nocturine jest oniryczne, to za mało — to psychodelik jest. Wchodzi miękko, od pierwszych zdań już kołysze. Fraza hipnotyczna. Coś pięknego!</div>,
                    source: 'Patrycja Janowska, LAMPA 1–2/2012'
                },
                {
                    quote: <div>Drobnik tworzy sugestywnie nastrój osaczenia przez groźne nieznane; subtelnie, jednym przesunięciem poza ramy naszych przyzwyczajeń.</div>,
                    source: 'Ilona Witkowska, ODRA 5/2012'
                },
                {
                    quote: <div>Przyjęta przez Drobnika strategia polega na połączeniu przynależnej literaturze popularnej wartkości fabuły z&nbsp;gęstym, mocno zmetaforyzowanym językiem literatury pięknej.</div>,
                    source: 'Rafał Derda, ELEWATOR 2/2012'
                },
                {
                    quote: <div>Nie będę budowała suspensu. Zdradzę już na wstępie: ta książka wciągnie was tysiącem swoim macek (każdemu inna, wedle gustu).</div>,
                    source: 'Marta Sawicka-Danielak, BLUSZCZ 2/2012'
                }
            ]
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
            en: <div>Here are a handful of my pieces.<br />Maybe you’d like to read them:</div>,
            pl: <div>Oto garstka moich tekstów.<br />Może zechcesz je przeczytać:</div>
        }
    },
    sectionLinks: [
        {
          id: 'top',
          text: {
              en: 'top',
              pl: 'góra'
          }
        },
        {
            id: 'nocturine',
            text: {
                en: 'nocturine',
                pl: 'nocturine'
            }
        },
        {
            id: 'pubs',
            text: {
                en: 'publications',
                pl: 'publikacje'
            }
        },
        {
            id: 'read',
            text: {
                en: 'reading room',
                pl: 'czytelnia'
            }
        }
    ],
    text: {
        nextText: {
            en: 'up next: ',
            pl: 'następny tekst: '
        },
        top: {
            en: 'top',
            pl: 'góra'
        },
        home: {
            en: 'home',
            pl: 'strona główna'
        }
    },
    dataNotice: {
        en: {
            message: <div>This website collects basic information about user preferences (language and black-and-white mode selection).</div>,
            button: 'I understand'
        },
        pl: {
            message: <div>Strona przechowuje podstawowe informacje na temat preferencji użytkownika (wybór dotyczący języka i&nbsp;trybu czarno-białego).</div>,
            button: 'Rozumiem'
        }
    }
};

//Content of quick links (to be used on Instagram)

export const LINKS = [
    {
        title: 'Łukasz Drobnik’s website',
        subtitle: 'www.drobnik.co',
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
        url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/'
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

/* Keyframes used for styled-components animations */

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


//Keyframes for 'popping' animation
export const POP_KEYFRAMES = keyframes`
  0% {
    transform: scale(1, 1);
  }
  
  30% {
    transform: scale(1.05, 1.05);
   
  }
  
  100% {
    transform: scale(1, 1);
  }
`;

//Duration of the fade-in animation used when loading new page
export const FADE_DURATION = 200;

//Reusable posed component specifying the basic fade-in animation
export const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});
