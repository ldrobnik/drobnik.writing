import React from 'react';
import {Link} from 'react-router-dom';
import {keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram,
    faMedium
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
import {DRONES_EN} from './texts/drones-en';
import {DRONES_PL} from './texts/drones-pl';
import {SPORES_EN} from './texts/spores-en';
import {SPORES_PL} from './texts/spores-pl';
import {VOSTOK_EN} from "./texts/vostok-en";
import {VOSTOK_PL} from "./texts/vostok-pl";
import {DEVONIAN_EN} from './texts/devonian-en';
import {DEVONIAN_PL} from './texts/devonian-pl';
import {LANDMINES_EN} from './texts/landmines-en';
import {LANDMINES_PL} from './texts/landmines-pl';
import {TREASURES_EN} from './texts/treasures-en';
import {TREASURES_PL} from './texts/treasures-pl';
import posed from "react-pose";

//source urls for book covers
import nocturineCover from '../assets/images/nocturineCover.jpg';
import nocCunCover from '../assets/images/nocCunCover.jpg';

//Names of available texts
export const TEXT_NAMES = ['nocturine', 'cetacean', 'cellulose', 'moths', 'drones', 'vostok', 'spores', 'devonian', 'landmines', 'treasures'];

//Texts to be displayed on the main page
export const HIGHLIGHTS = ['nocturine', 'cetacean', 'cellulose', 'moths', 'devonian', 'landmines', 'treasures'];
//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'excerpt from a short story collection',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick & Joseph Spece.',
            description: <p><em>Nocturine</em> is a linked short story collection forthcoming from <a
                href="http://fathombooks.org/html/drobnik.html" target="_blank" rel="noopener noreferrer">Fathom Books</a>. It was
                originally written <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank"
                                      rel="noopener noreferrer">in Polish</a> and published in one volume with a novella
                titled <em>Cunninghamella</em> (Forma 2011). Excerpts from <em>Nocturine</em> have been featured in a
                number of journals — both in Polish (<a
                    href="https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html" target="_blank"
                    rel="noopener noreferrer"><em>Dwutygodnik</em></a>, <a
                    href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank"
                    rel="noopener noreferrer"><em>Dodatek Literacki</em></a>) and in English (<a
                    href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><em>Sharkpack
                    Annual</em></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank"
                                        rel="noopener noreferrer"><em>The Write Launch</em></a>).</p>,
            content: NOCTURINE_EN,
            theme: 'nocturine'
        },

        cetacean: {
            title: 'Cetacean',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece was originally published in <a
                href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer"><em>Quarterly
                West</em></a> Issue&nbsp;94. Its Polish translation was featured in <a href="https://afront.org.pl/"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"><em>Afront</em></a> Issue
                2(5)/2018.</p>,
            content: CETACEAN_EN,
            theme: 'cetacean'
        },

        cellulose: {
            title: 'Cellulose',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece was originally published in September 2018 Issue of <em>Mojave Heart
                Review</em>. Its Polish translation was featured in the inaugural issue of <a
                href="http://stonerpolski.pl/celuloza-lukasz-drobnik" target="_blank"
                rel="noopener noreferrer"><em>Stoner Polski</em></a>.</p>,
            content: CELLULOSE_EN,
            theme: 'cellulose'
        },

        moths: {
            title: 'Moths',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Anna De Vaul.',
            description: <p>The piece was originally published in <a href="http://www.gatehousepress.com/lighthouse/"
                                                                     target="_blank"
                                                                     rel="noopener noreferrer"><em>Lighthouse</em></a> Issue&nbsp;10.
                Its Polish translation was featured in <a
                    href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank"
                    rel="noopener noreferrer"><em>Fabularie</em></a> (incidentally, also Issue&nbsp;10).</p>,
            content: MOTHS_EN,
            theme: 'moths'
        },

        drones: {
            title: 'Drones',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Robert Harper.',
            description: <p>The piece was originally published in <a
                href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/"
                target="_blank" rel="noopener noreferrer"><em>Bare Fiction</em></a> Issue&nbsp;10. Its Polish
                translation
                was featured in <a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank"
                                   rel="noopener noreferrer"><em>Helikopter</em></a> Issue&nbsp;3/2018.</p>,
            content: DRONES_EN,
            theme: 'drones'
        },

        spores: {
            title: 'Spores',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece was published in <a href="http://x-r-a-y.com/spores-lukasz-drobnik/fiction/"
                                                          target="_blank"
                                                          rel="noopener noreferrer"><em>X&#8209;R&#8209;A&#8209;Y
                Literary Magazine</em></a> Issue&nbsp;17.</p>,
            content: SPORES_EN,
            theme: 'spores'
        },

        vostok: {
            title: 'Vostok',
            subtitle: 'novel fragment',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>Fragments of <em>Vostok</em> were published in Polish in <a href="http://lampa.art.pl/"
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"><em>Lampa</em></a> Issue&nbsp;3/2012
                and on <a href="http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/"
                          target="_blank" rel="noopener noreferrer"><em>wydawnictwo&nbsp;j</em></a> website.</p>,
            content: VOSTOK_EN,
            theme: 'vostok'
        },

        devonian: {
            title: 'Devonian',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Thea Prieto.',
            description: <p>The piece was originally published in <a
                href="http://thegravityofthething.com/devonian-lukasz-drobnik/" target="_blank"
                rel="noopener noreferrer"><em>The Gravity of the Thing</em></a> (Winter 2018). Its Polish translation
                was
                featured in <a
                    href="https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/"
                    target="_blank" rel="noopener noreferrer"><em>Inter-</em></a> Issue&nbsp;2(16)/2018.</p>,
            content: DEVONIAN_EN,
            theme: 'devonian'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece published in <a href="https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1/" target="_blank"
                                                      rel="noopener noreferrer"><em>Foglifter</em></a> Volume&nbsp;4
                Issue&nbsp;1.</p>,
            content: LANDMINES_EN,
            theme: 'landmines'
        },

        treasures: {
            title: 'Treasures',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick & Michelle Ross.',
            description: <p>The piece was published in May 2019 in <a href="https://atticusreview.org/treasures/"
                                                                      target="_blank" rel="noopener noreferrer"><em>Atticus
                Review</em></a>. Its Polish translation was
                featured in <a
                    href="http://tlenliteracki.pl/lukasz-drobnik-jedno-opowiadanie/"
                    target="_blank" rel="noopener noreferrer"><em>Tlen Literacki</em></a> Issue&nbsp;4.</p>,
            content: TREASURES_EN,
            theme: 'treasures'
        }

    },
    pl: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'fragment zbioru opowiadań',
            credits: 'Tekst: Łukasz Drobnik. Redakcja: Paweł Nowakowski, Adrian Sikora.',
            description: <p>„Nocturine” to zbiór powiązanych fabularnie opowiadań w&nbsp;przygotowaniu przez
                wydawnictwo <a
                    href="http://fathombooks.org/html/drobnik.html" target="_blank" rel="noopener noreferrer">Fathom Books</a>. Książka
                pierwotnie ukazała się <a href="http://wforma.eu/12,nocturine.-cunninghamella.html" target="_blank"
                                          rel="noopener noreferrer">po polsku</a> w&nbsp;jednym tomie
                z&nbsp;minipowieścią „Cunninghamella” (Forma 2011). Fragmenty „Nocturine” opublikowano w&nbsp;kilku
                czasopismach — zarówno po polsku (<a
                    href="https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html" target="_blank"
                    rel="noopener noreferrer"><em>Dwutygodnik</em></a>, <a
                    href="http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf" target="_blank"
                    rel="noopener noreferrer"><em>Dodatek Literacki</em></a>), jak i&nbsp;po angielsku (<a
                    href="http://fathombooks.org/html/issueone.html" target="_blank" rel="noopener noreferrer"><em>Sharkpack
                    Annual</em></a>, <a href="https://thewritelaunch.com/2018/01/heart-mighty-power/" target="_blank"
                                        rel="noopener noreferrer"><em>The Write Launch</em></a>).</p>,
            content: NOCTURINE_PL,
            theme: 'nocturine'
        },

        cetacean: {
            title: 'Waleń',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;94. numerze <a
                href="https://www.quarterlywest.com/issue-94/cetacean" target="_blank" rel="noopener noreferrer"><em>Quarterly
                West</em></a>. Polski przekład zamieszczono w&nbsp;<a href="https://afront.org.pl/" target="_blank"
                                                                      rel="noopener noreferrer"><em>Afroncie</em></a> (numer
                2(5)/2018).</p>,
            content: CETACEAN_PL,
            theme: 'cetacean'
        },


        cellulose: {
            title: 'Celuloza',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <div>Tekst ukazał się pierwotnie po angielsku w&nbsp;2018&nbsp;r. we wrześniowym numerze <em>Mojave
                Heart Review</em>. Polski przekład zamieszczono w&nbsp;pierwszym numerze <a
                href="http://stonerpolski.pl/celuloza-lukasz-drobnik" target="_blank"
                rel="noopener noreferrer"><em>Stonera Polskiego</em></a>.</div>,
            content: CELLULOSE_PL,
            theme: 'cellulose'
        },

        moths: {
            title: 'Ćmy',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;10. numerze <a
                href="http://www.gatehousepress.com/lighthouse/" target="_blank"
                rel="noopener noreferrer"><em>Lighthouse</em></a>. Polski przekład zamieszczono w&nbsp;<a
                href="https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok" target="_blank"
                rel="noopener noreferrer"><em>Fabulariach</em></a> (także w&nbsp;numerze&nbsp;10.).</p>,
            content: MOTHS_PL,
            theme: 'moths',
        },

        drones: {
            title: 'Drony',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;10. numerze <a
                href="https://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/"
                target="_blank" rel="noopener noreferrer"><em>Bare Fiction</em></a>. Polski przekład zamieszczono
                w&nbsp;
                <a href="https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/" target="_blank"
                   rel="noopener noreferrer"><em>Helikopterze</em></a> (numer 3/2018).</p>,
            content: DRONES_PL,
            theme: 'drones'
        },

        spores: {
            title: 'Zarodniki',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;17. numerze pisma <a
                href="http://x-r-a-y.com/spores-lukasz-drobnik/fiction/" target="_blank"
                rel="noopener noreferrer"><em>X&#8209;R&#8209;A&#8209;Y Literary Magazine</em></a>.</p>,
            content: SPORES_PL,
            theme: 'spores'
        },

        vostok: {
            title: 'Vostok',
            subtitle: 'fragment powieści',
            credits: 'Tekst: Łukasz Drobnik.',
            description: <p>Fragmenty „Vostoku” ukazały się w&nbsp;<a href="http://lampa.art.pl/" target="_blank"
                                                                      rel="noopener noreferrer"><em>Lampie</em></a> (numer&nbsp;3/2012)
                i&nbsp;na stronie <a
                    href="http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/"
                    target="_blank" rel="noopener noreferrer"><em>wydawnictwa&nbsp;j</em></a>.</p>,
            content: VOSTOK_PL,
            theme: 'vostok'
        },

        devonian: {
            title: 'Dewon',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się pierwotnie po angielsku w&nbsp;piśmie <a
                href="http://thegravityofthething.com/devonian-lukasz-drobnik/" target="_blank"
                rel="noopener noreferrer"><em>The Gravity of the Thing</em></a> (numer Winter 2018). Polski przekład
                zamieszczono w&nbsp;czasopiśmie <a
                    href="https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/"
                    target="_blank" rel="noopener noreferrer"><em>Inter-</em></a> (numer&nbsp;2(16)/2018).</p>,
            content: DEVONIAN_PL,
            theme: 'devonian'
        },

        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;piśmie <a href="https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1/"
                                                                           target="_blank"
                                                                           rel="noopener noreferrer"><em>Foglifter</em></a> (Volume&nbsp;4
                Issue&nbsp;1).</p>,
            content: LANDMINES_PL,
            theme: 'landmines'
        },

        treasures: {
            title: 'Skarby',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;maju 2019&nbsp;r. w&nbsp;<a
                href="https://atticusreview.org/treasures/" target="_blank" rel="noopener noreferrer"><em>Atticus
                Review</em></a>. Polski przekład
                zamieszczono w&nbsp;czwartym numerze <a
                    href="http://tlenliteracki.pl/lukasz-drobnik-jedno-opowiadanie/"
                    target="_blank" rel="noopener noreferrer"><em>Tlenu Literackiego</em></a>.</p>,
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
            url: 'http://fathombooks.org/html/drobnik.html',
            cover: nocturineCover,
            altText: {
                en: 'Nocturine cover',
                pl: 'Okładka Nocturine'
            },
            descriptionPl: 'Zbiór powiązanych fabularnie opowiadań, który ukaże się w 2020 r. nakładem wydawnictwa Fathom Books',
            descriptionEn: 'Linked short story collection forthcoming in 2020 from Fathom Books',
            language: 'en',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Nocturine. Cunninghamella',
            year: '2011',
            cover: nocCunCover,
            altText: {
                en: 'Nocturine. Cunningamella cover',
                pl: 'Okładka tomu Nocturine. Cunninghamella'
            },
            altPl: "Okładka Nocturine",
            altEn: "Nocturine cover",
            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',
            descriptionPl: 'Tom prozy opublikowany przez wydawnictwo Forma',
            descriptionEn: 'Volume of fiction published by Forma',
            language: 'pl',
            pieceTitle: 'Nocturine. Cunninghamella'
        }
    ],

    press: [
        {
            title: 'HAD',
            issue: '',
            year: '2020',
            url: 'https://www.havehashad.com/hadposts/coal-and-glitter',
            descriptionPl: 'Flash fiction „Coal and Glitter”',
            descriptionEn: 'Flash fiction “Coal and Glitter”',
            language: 'en',
            pieceTitle: 'Coal and Glitter'
        },
        {
            title: 'Fractured Lit',
            issue: '',
            year: '2020',
            url: 'https://fracturedlit.com/echoes/',
            descriptionPl: 'Mikroopowiadanie „Echoes”',
            descriptionEn: 'Micro “Echoes”',
            language: 'en',
            pieceTitle: 'Echoes'
        },
        {
            title: 'FlashFlood',
            issue: 'National Flash Fiction Day 2020',
            year: '2020',
            url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html',
            descriptionPl: 'Flash fiction „Cellulose” (utwór pierwotnie opublikowany w Mojave Heart Review)',
            descriptionEn: 'Flash fiction “Cellulose” (originally published in Mojave Heart Review)',
            language: 'en',
            pieceTitle: 'Nameless'
        },
        {
            title: 'Akashic Books',
            issue: 'Fri-SciFi',
            year: '2020',
            url: 'http://www.akashicbooks.com/nameless-by-lukasz-drobnik/',
            descriptionPl: 'Flash fiction „Nameless”',
            descriptionEn: 'Flash fiction “Nameless”',
            language: 'en',
            pieceTitle: 'Nameless'
        },
        {
            title: 'BULL',
            issue: '#9: The LGBTQ Issue',
            year: '2020',
            url: 'https://www.amazon.com/dp/B0851LL5PL/ref=mp_s_a_1_2?keywords=bull+%239+lit&qid=1582738243&sr=8-2',
            descriptionPl: 'Flash fiction „Riverweed”',
            descriptionEn: 'Flash fiction “Riverweed”',
            language: 'en',
            pieceTitle: 'Riverweed'
        },
        {
            title: 'STORGY',
            issue: 'Flash Fiction Friday',
            year: '2020',
            url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/',
            descriptionPl: 'Flash fiction „Deadlines”',
            descriptionEn: 'Flash fiction “Deadlines”',
            language: 'en',
            pieceTitle: 'Deadlines'
        },
        {
            title: 'Tlen Literacki',
            issue: '4',
            year: '2019',
            url: 'http://tlenliteracki.pl/lukasz-drobnik-jedno-opowiadanie/',
            descriptionPl: 'Flash fiction „Skarby” (przekład tekstu „Treasures”)',
            descriptionEn: 'Flash fiction “Skarby” (translation of “Treasures”)',
            language: 'pl',
            pieceTitle: 'Skarby'
        },
        {
            title: 'Pithead Chapel',
            issue: 'September 2019',
            year: '2019',
            url: 'https://pitheadchapel.com/entrails/',
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
            url: 'https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1/',
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
            descriptionPl: '„8-bit Dreams” (opowiadanie ze zbioru „Nocturine”)',
            descriptionEn: '“8-bit Dreams” (a short story from the collection “Nocturine”)',
            language: 'en',
            pieceTitle: '8-bit Dreams'

        },
        {
            title: 'Stoner Polski',
            issue: '#1',
            year: '2018',
            url: 'http://stonerpolski.pl/celuloza-lukasz-drobnik',
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
            descriptionEn: 'Short story “Photosensitivity” (translation of “Światłoczułość”)',
            language: 'en',
            pieceTitle: 'Photosensitivity'
        },
        {
            title: 'Mojave Heart Review',
            issue: 'September 2018',
            year: '2018',
            url: '/texts/cellulose/',
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
            descriptionPl: '„Heart Mighty Power” (opowiadanie ze zbioru „Nocturine”)',
            descriptionEn: '“Heart Mighty Power” (a short story from the collection “Nocturine”)',
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
            descriptionPl: 'Wyjątek ze zbioru „Nocturine”',
            descriptionEn: 'Excerpt from the collection “Nocturine”',
            language: 'pl',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Dwutygodnik.com',
            issue: '#57',
            year: '2011',
            url: 'https://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html',
            descriptionPl: 'Wyjątek ze zbioru „Nocturine”',
            descriptionEn: 'Excerpt from the collection “Nocturine”',
            language: 'pl',
            pieceTitle: 'Nocturine'
        },
        {
            title: 'Latarnia Morska',
            issue: '1–2 (11–12) 2009/1 (13) 2010',
            year: '2009/2010',
            url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',
            descriptionPl: 'Wyjątek ze zbioru „Nocturine”',
            descriptionEn: 'Excerpt from the collection “Nocturine”',
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
            descriptionPl: 'Opowiadanie „astroskopia”',
            descriptionEn: 'Short story “astroskopia”',
            language: 'pl',
            pieceTitle: 'Astroskopia'
        }
    ],

    collections: [
        {
            title: '2020. Antologia współczesnych polskich opowiadań',
            year: '2020',
            url: 'http://www.wforma.eu/2020-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Niech nastanie Wisła” (Forma)',
            descriptionEn: 'Short story collection featuring my piece “Niech nastanie Wisła” (Forma)',
            language: 'pl',
            pieceTitle: 'Niech nastanie Wisła'
        },
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
    spores: {
        color1: '#00c590',
        color2: '#04ae85'
    },
    vostok: {
        color1: '#e7b84c',
        color2: '#b88636'
    },
    devonian: {
        color1: '#ffe91c',
        color2: '#f1d20f'
    },
    landmines: {
        color1: '#f4acca',
        color2: '#f47ba1'
    },
    treasures: {
        color1: '#ff7418',
        color2: '#f05e23'
    },
    blackAndWhite: {
        color1: '#fafafa',
        color2: '#f4f4f4'
    }
};

//constant containing text used on the website:
export const WEBSITE_TEXT = {
    navbar: {
        home: {
            en: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faHome}
                    aria-hidden="true"
                    title="Home page">
                </FontAwesomeIcon>
                <span className="sr-only">Home page</span>
            </React.Fragment>),
            pl: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faHome}
                    aria-hidden="true"
                    title="Strona główna">
                </FontAwesomeIcon>
                <span className="sr-only">Strona główna</span>
            </React.Fragment>)
        },
        language: {
            en: 'pl',
            pl: 'en'
        },
        colourMode: {
            en: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faYinYang}
                    aria-hidden="true"
                    title="Toggle black-and-white mode">
                </FontAwesomeIcon>
                <span className="sr-only">Toggle black-and-white mode</span>
            </React.Fragment>),
            pl: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faYinYang}
                    aria-hidden="true"
                    title="Przełącz tryb czarno-biały">
                </FontAwesomeIcon>
                <span className="sr-only">Przełącz tryb czarno-biały</span>
            </React.Fragment>)
        },
        read: {
            en: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faBook}
                    aria-hidden="true"
                    title="Read sample stories">
                </FontAwesomeIcon>
                <span className="sr-only">Read sample stories</span>
            </React.Fragment>),
            pl: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faBook}
                    aria-hidden="true"
                    title="Czytaj przykładowe opowiadania">
                </FontAwesomeIcon>
                <span className="sr-only">Czytaj przykładowe opowiadania</span>
            </React.Fragment>)
        }
    },
    intro: {
        title: 'Łukasz Drobnik',
        subtitle: {
            en: 'fiction writer',
            pl: 'prozaik'
        },
        altText: {
            en: 'Author’s photo',
            pl: 'Fotografia autora'
        },
        body: {
            en: <div>
                <p>I’m a bilingual writer creating fiction in my native Polish but recently mostly in English. My
                    favourite pastime is taking literary fiction and mixing it with other genres, and I’m an enormous
                    flash fiction fan (though I don’t shy away from longer forms).</p>
                <p><AnchorLink href='#nocturine' offset="60px"><strong>NOCTURINE</strong></AnchorLink>, my linked short
                    story
                    collection, is now forthcoming from <a href="http://fathombooks.org/html/drobnik.html" target="_blank"
                                                           rel="noopener noreferrer"><strong>FATHOM BOOKS</strong></a>,
                    and my
                    other work has been featured in <em>Atticus Review</em>, <em>Quarterly West</em>, <em>Pithead
                        Chapel</em>, <em>Lighthouse</em>, <em>Bare Fiction</em>, <em>SHARKPACK
                        Annual</em>, <em>STORGY</em>, <em>BULL</em>, <em>Foglifter</em>, <em>X-R-A-Y Literary
                        Magazine</em> and
                    elsewhere. Below you can find
                    a <AnchorLink href='#pubs' offset="60px"><strong>FULL LIST OF PUBLICATIONS</strong></AnchorLink> and
                    also <AnchorLink href='#read' offset="60px"><strong>READ</strong></AnchorLink> some of my pieces.
                </p>
                <p className="centered">email: <em>drobniklukasz [at] gmail [dot] com</em></p>
            </div>,
            pl: <div>
                <p>Jestem dwujęzycznym pisarzem, który tworzy prozę po polsku (w&nbsp;moim ojczystym języku), ale
                    ostatnio głównie po angielsku. Najlepiej się bawię, gdy biorę tzw. prozę wysokoartystyczną
                    i&nbsp;wplatam w&nbsp;nią elementy innych gatunków, a&nbsp;do tego jestem ogromnym fanem <em>flash
                        fiction</em> (czyli bardzo krótkich opowiadań). Nie stronię jednak od dłuższych form.</p>
                <p>Niedługo nakładem wydawnictwa <a href="http://fathombooks.org/html/drobnik.html" target="_blank"
                                                    rel="noopener noreferrer"><strong>FATHOM BOOKS</strong></a> ukaże
                    się napisany
                    przeze mnie zbiór powiązanych fabularnie opowiadań <AnchorLink href='#nocturine'
                                                                                   offset="60px"><strong>NOCTURINE</strong></AnchorLink>,
                    a&nbsp;moje utwory były publikowane m.in. w&nbsp;<em>Atticus Review</em>, <em>Quarterly
                        West</em>, <em>Pithead
                        Chapel</em>, <em>Lighthouse</em>, <em>Bare Fiction</em>, <em>SHARKPACK
                        Annual</em>, <em>Foglifter</em>, <em>STORGY</em>, <em>BULL</em> oraz <em>X-R-A-Y Literary
                        Magazine</em>.
                    Poniżej można
                    znaleźć <AnchorLink href='#pubs' offset="60px"><strong>PEŁNĄ LISTĘ PUBLIKACJI</strong></AnchorLink>,
                    a&nbsp;także <AnchorLink href='#read' offset="60px"><strong>POCZYTAĆ</strong></AnchorLink> kilka
                    moich
                    tekstów.</p>
                <p className="centered">e-mail: <em>drobniklukasz [at] gmail [dot] com</em></p>
            </div>
        },
        support: {
            en: {
                message: <div>Buy me a coffee</div>,
                path: 'https://ko-fi.com/drobnik'
            },
            pl: {
                message: <div>Postaw mi kawę</div>,
                path: 'https://ko-fi.com/drobnik'
            }
        },
        social: [
            {
                name: (
                    <div>
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            aria-hidden="true"
                            title="Twitter"
                        />&nbsp;@drobnik
                        <span className="sr-only">Twitter</span>
                    </div>),
                url: 'https://twitter.com/drobnik'
            },
            {
                name: (
                    <div>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            aria-hidden="true"
                            title="Instagram">
                        </FontAwesomeIcon>&nbsp;@drobnikwrites
                        <span className="sr-only">Instagram</span>
                    </div>
                ),
                url: 'https://www.instagram.com/drobnikwrites/'
            },
            {
                name: (
                    <div>
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            aria-hidden="true"
                            title="Facebook">
                        </FontAwesomeIcon>&nbsp;@drobnikwrites
                        <span className="sr-only">Facebook</span>
                    </div>
                ),
                url: 'https://www.facebook.com/drobnikwrites'
            },
            {
                name: (
                    <div>
                        <FontAwesomeIcon
                            icon={faMedium}
                            aria-hidden="true"
                            title="Medium">
                        </FontAwesomeIcon>&nbsp;@drobnik
                        <span className="sr-only">Medium</span>
                    </div>
                ),
                url: 'https://medium.com/@drobnik'
            }
        ]
    },
    nocturine: {
        title: {
            en: 'Nocturine',
            pl: 'Nocturine'
        },
        slogan: {
            en: <div>Forthcoming early 2021 from <a href="http://fathombooks.org/html/drobnik.html" target="_blank"
                                                    rel="noopener noreferrer"><strong>FATHOM
                BOOKS</strong></a></div>,
            pl: <div>Dostępna na początku 2021&nbsp;roku<br/>w&nbsp;wydawnictwie <a
                href="http://fathombooks.org/html/drobnik.html"
                target="_blank"
                rel="noopener noreferrer"><strong>FATHOM
                BOOKS</strong></a></div>,
        },
        preorderButton: {
            en: {
                message: 'Preorder now',
                path: 'http://fathombooks.org/html/drobnik.html'
            },
            pl: {
                message: 'Zamów teraz',
                path: 'http://fathombooks.org/html/drobnik.html'
            }
        },
            body: {
                en: <div>
                    <p>The end of the world starts like an ad campaign. When black cubes appear above the city of
                        Poznań,
                        some think it’s just another mobile network operator entering the market. These include Mietek,
                        an
                        unemployed man in his twenties, suddenly abandoned by his boyfriend. Soon his best friend also
                        disappears while the black cubes in the sky start to multiply, taking up more and more of the
                        urban
                        space.</p>
                    <p><em>NOCTURINE</em> is a linked short story collection that takes you on a genre-bending journey
                        from
                        contemporary Poznań devoured by an 8-bit amoeba to a house comprised of countless floors, to a
                        homestead haunted by dummies, to the inside of a human body. Each of six pieces is told by
                        a different narrator in a frantic yet melancholic style.</p>
                </div>,
                pl: <div>
                    <p>Koniec świata zaczyna się jak kampania reklamowa. Gdy nad Poznaniem zawisają czarne sześciany,
                        niektórzy sądzą, że to po prostu kolejny operator sieci komórkowej wchodzi na rynek. Do tej
                        grupy
                        należy Mietek, bezrobotny dwudziestoparolatek, którego nagle opuszcza chłopak. Niedługa jego
                        najlepsza przyjaciółka także znika, podczas gdy czarne sześciany na niebie zaczynają się mnożyć,
                        zabierając coraz więcej miejskiej przestrzeni.</p>
                    <p><em>NOCTURINE</em> to zbiór powiązanych fabularnie opowiadań, który zabiera czytelnika na
                        niejednoznaczną gatunkowo podróż z&nbsp;Poznania pożeranego przez ośmiobitową amebę przez dom
                        złożony z&nbsp;niezliczonych pięter i&nbsp;nawiedzane przez manekiny domostwo aż po wnętrze
                        ludzkiego ciała. Każdy z&nbsp;sześciu tekstów ma innego narratora, który snuje opowieść
                        w&nbsp;gorączkowym, lecz melancholijnym stylu.</p>
                </div>
            },
            excerptButton: {
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
                        quote: <div>Drobnik wowed us with his free-wheeling sentence structure + utterly unique
                            vision.</div>,
                        source: 'FATHOM BOOKS, the publisher'
                    },
                    {
                        quote: <div>To say <em>Nocturine</em> is oneiric isn’t enough — it’s a psychedelic. It kicks in
                            slowly, swaying you from the very first sentences. Hypnotic phrase. Beautiful!</div>,
                        source: 'Patrycja Janowska, LAMPA 1–2/2012'
                    },
                    {
                        quote: <div>Drobnik creates an evocative, oppressive mood through the dangerous unknown; subtly,
                            with a single shift outside the boundaries of what we are used to.</div>,
                        source: 'Ilona Witkowska, ODRA 5/2012'
                    },
                    {
                        quote: <div>Drobnik’s strategy is to combine a fast-paced plot typical of popular literature
                            with
                            the highly metaphorical language of literary fiction.</div>,
                        source: 'Rafał Derda, ELEWATOR 2/2012'
                    },
                    {
                        quote: <div>I’m not going to build suspense. Let me say it right away: this book will drag you
                            in
                            with its thousand tentacles (everyone gets their own, according to their liking).</div>,
                        source: 'Marta Sawicka-Danielak, BLUSZCZ 2/2012'
                    }
                ],
                pl: [
                    {
                        quote: <div>Drobnik zachwycił nas swoją beztroską składnią i&nbsp;absolutnie wyjątkową
                            wizją.</div>,
                        source: 'FATHOM BOOKS, wydawca'
                    },
                    {
                        quote: <div>Powiedzieć, że „Nocturine” jest oniryczne, to za mało — to psychodelik jest. Wchodzi
                            miękko, od pierwszych zdań już kołysze. Fraza hipnotyczna. Coś pięknego!</div>,
                        source: 'Patrycja Janowska, LAMPA 1–2/2012'
                    },
                    {
                        quote: <div>Drobnik tworzy sugestywnie nastrój osaczenia przez groźne nieznane; subtelnie,
                            jednym
                            przesunięciem poza ramy naszych przyzwyczajeń.</div>,
                        source: 'Ilona Witkowska, ODRA 5/2012'
                    },
                    {
                        quote: <div>Przyjęta przez Drobnika strategia polega na połączeniu przynależnej literaturze
                            popularnej wartkości fabuły z&nbsp;gęstym, mocno zmetaforyzowanym językiem literatury
                            pięknej.</div>,
                        source: 'Rafał Derda, ELEWATOR 2/2012'
                    },
                    {
                        quote: <div>Nie będę budowała suspensu. Zdradzę już na wstępie: ta książka wciągnie was tysiącem
                            swoim macek (każdemu inna, wedle gustu).</div>,
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
                en: <div>Here are a handful of my pieces.<br/>Maybe you’d like to read some of them:</div>,
                pl: <div>Oto garstka moich tekstów.<br/>Może zechcesz niektóre z&nbsp;nich przeczytać:</div>
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
                message: <div>This website collects basic information about user preferences (language and
                    black-and-white
                    mode selection).</div>,
                button: 'I understand'
            },
            pl: {
                message: <div>Strona przechowuje podstawowe informacje na temat preferencji użytkownika (wybór dotyczący
                    języka i&nbsp;trybu czarno-białego).</div>,
                button: 'Rozumiem'
            }
        }
    };

//Content of quick links (to be used on Instagram)

export const LINKS = [
    {
        title: 'Preorder NOCTURINE',
        subtitle: 'from Fathom Books',
        url: 'http://fathombooks.org/html/drobnik.html'
    },
    {
        title: 'Read “Coal and Glitter”',
        subtitle: 'in HAD',
        url: 'https://www.havehashad.com/hadposts/coal-and-glitter'
    },
    {
        title: 'Read “Echoes”',
        subtitle: 'in Fractured Lit',
        url: 'https://fracturedlit.com/echoes/'
    },
    {
        title: 'Watch me read my flash fiction',
        subtitle: 'at the the 16th International Short Story Festival',
        url: 'https://youtu.be/lEgFtba3WWM'
    },
    // {
    //     title: '“2020. Antologia współczesnych polskich opowiadań”',
    //     subtitle: 'featuring my short story “Niech nastatnie Wisła” (in Polish)',
    //     url: 'http://www.wforma.eu/2020-antologia-wspolczesnych-polskich-opowiadan.html'
    // },
    // {
    //     title: 'Read “Cellulose”',
    //     subtitle: 'in FlashFlood',
    //     url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html'
    // },
    {
        title: 'Buy me a coffee',
        subtitle: 'please consider supporting me on Ko-fi',
        url: 'https://ko-fi.com/drobnik'
    },
    {
        title: 'My official website',
        subtitle: 'www.drobnik.co',
        url: '/'
    },
    // {
    //     title: 'Read “Deadlines”',
    //     subtitle: 'in STORGY',
    //     url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/'
    // },
    // {
    //     title: 'Read “Entrails”',
    //     subtitle: 'in Pithead Chapel',
    //     url: 'https://pitheadchapel.com/entrails/'
    // },
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
