import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faBook,
    faYinYang,
    faStickyNote
} from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router-dom';

//source urls for book covers
import nocturineCover from '../assets/images/nocturineCover.jpg';
import nocCunCover from '../assets/images/nocCunCover.jpg';
import vostokCover from '../assets/images/vostokCover.jpg';
import {Note} from '../styled';
// import tbaCover from '../assets/images/tbaCover.jpg';

//Frequently used URLs

export const NOCTURINE_URL = 'http://fathombooks.org/html/drobnik.html'; //Nocturine pre-order
export const FATHOM_BOOKS_URL = 'http://fathombooks.org/'; //Fathom Books website
export const VOSTOK_URL = 'https://www.vraeydamedia.ca/shop/x55ht1b0h70i3bwv9qismih2f6b5nk'; //Vostok pre-order
export const VRAEDA_URL = 'https://www.vraeydamedia.ca/literary'; //Vræyda Literary website
export const TWITTER_URL = 'https://twitter.com/drobnik';
export const FACEBOOK_URL = 'https://www.facebook.com/drobnikwrites';
export const INSTAGRAM_URL = 'https://www.instagram.com/drobnikwrites/';
export const MEDIUM_URL = 'https://drobnik.medium.com';
export const KO_FI_URL = 'https://ko-fi.com/drobnik';
export const BLYSKI_URL = 'https://blyski.org'; // błyski literary magazine

//Names of available texts
export const TEXT_NAMES = ['vostok', 'nocturine', 'cetacean', 'cellulose', 'moths', 'drones', 'spores', 'devonian', 'landmines', 'treasures'];

//Texts to be displayed on the main page
export const HIGHLIGHTS = ['vostok', 'nocturine', 'cetacean', 'cellulose', 'moths', 'devonian', 'landmines', 'treasures'];

//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'excerpt from a short story collection',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick & Joseph Spece.',
            description: <p><em>Nocturine</em> is a collection of interlinked stories forthcoming from <a
                href={NOCTURINE_URL} target="_blank" rel="noopener noreferrer">Fathom Books</a>. It was
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
            filename: 'nocturine-en',
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
            filename: 'cetacean-en',
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
            filename: 'cellulose-en',
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
            filename: 'moths-en',
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
            filename: 'drones-en',
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
            filename: 'spores-en',
            theme: 'spores'
        },

        vostok: {
            title: 'Vostok',
            subtitle: 'novel fragment',
            credits: 'Written & translated from the Polish by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p><em>Vostok</em> is forthcoming later this year from <a href={VOSTOK_URL} target="_blank"
                                                                                   rel="noopener noreferrer"><em>Vræyda
                Literary</em></a>. Its fragments were published in Polish in <a href="http://lampa.art.pl/"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"><em>Lampa</em></a> Issue&nbsp;3/2012
                and on <a href="http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/"
                          target="_blank" rel="noopener noreferrer"><em>wydawnictwo&nbsp;j</em></a> website.</p>,
            filename: 'vostok-en',
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
            filename: 'devonian-en',
            theme: 'devonian'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            credits: 'Written by Łukasz Drobnik. Edits by Emily Nemchick.',
            description: <p>The piece published in <a
                href="https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1/" target="_blank"
                rel="noopener noreferrer"><em>Foglifter</em></a> Volume&nbsp;4
                Issue&nbsp;1.</p>,
            filename: 'landmines-en',
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
            filename: 'treasures-en',
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
                    href={NOCTURINE_URL} target="_blank" rel="noopener noreferrer">Fathom Books</a>. Książka
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
            filename: 'nocturine-pl',
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
            filename: 'cetacean-pl',
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
            filename: 'cellulose-pl',
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
            filename: 'moths-pl',
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
            filename: 'drones-pl',
            theme: 'drones'
        },

        spores: {
            title: 'Zarodniki',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;17. numerze pisma <a
                href="http://x-r-a-y.com/spores-lukasz-drobnik/fiction/" target="_blank"
                rel="noopener noreferrer"><em>X&#8209;R&#8209;A&#8209;Y Literary Magazine</em></a>.</p>,
            filename: 'spores-pl',
            theme: 'spores'
        },

        vostok: {
            title: 'Vostok',
            subtitle: 'fragment powieści',
            credits: 'Tekst: Łukasz Drobnik.',
            description: <p>„Vostok” ukaże się jeszcze w&nbsp;roku nakładem wydawnictwa <a href={VOSTOK_URL}
                                                                                           target="_blank"
                                                                                           rel="noopener noreferrer"><em>Vræyda
                Literary</em></a>. Fragmenty książki można było przeczytać po polsku w&nbsp;<a
                href="http://lampa.art.pl/" target="_blank"
                rel="noopener noreferrer"><em>Lampie</em></a> (numer&nbsp;3/2012)
                i&nbsp;na stronie <a
                    href="http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/"
                    target="_blank" rel="noopener noreferrer"><em>wydawnictwa&nbsp;j</em></a>.</p>,
            filename: 'vostok-pl',
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
            filename: 'devonian-pl',
            theme: 'devonian'
        },

        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            credits: 'Tekst i przekład z angielskiego: Łukasz Drobnik.',
            description: <p>Tekst ukazał się po angielsku w&nbsp;piśmie <a
                href="https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1/"
                target="_blank"
                rel="noopener noreferrer"><em>Foglifter</em></a> (Volume&nbsp;4
                Issue&nbsp;1).</p>,
            filename: 'landmines-pl',
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
            filename: 'treasures-pl',
            theme: 'treasures'
        }
    }
};

//List of publications used in the Pubs section
export const PUBLICATIONS = {
    books: [
        {
            title: 'Vostok',
            year: '',
            url: VOSTOK_URL,
            cover: vostokCover,
            altText: {
                en: 'Vostok cover',
                pl: 'Okładka Vostok'
            },
            descriptionPl: 'Powieść, która ukaże się w 2021 r. nakładem wydawnictwa Vræyda Literary',
            descriptionEn: 'Novel forthcoming in 2021 from Vræyda Literary',
            language: 'en',
            pieceTitle: 'Vostok'
        },
        {
            title: 'Nocturine',
            year: '',
            url: NOCTURINE_URL,
            cover: nocturineCover,
            altText: {
                en: 'Nocturine cover',
                pl: 'Okładka Nocturine'
            },
            descriptionPl: 'Zbiór powiązanych fabularnie opowiadań, który ukaże się w 2021 r. nakładem wydawnictwa Fathom Books',
            descriptionEn: 'Collection of interlinked stories forthcoming in 2021 from Fathom Books',
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
            altPl: 'Okładka Nocturine. Cunningamella',
            altEn: 'Nocturine. Cunningamella cover',
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

//Order button text
const ORDER_BUTTON = {
    preorder: {
        en: 'Pre-order your copy',
        pl: 'Zamów w przedsprzedaży'
    },
    order: {
        en: 'Order your copy',
        pl: 'Zamów egzemplarz'
    }
}

//Excerpt button text
export const EXCERPT_BUTTON = {
    en: 'Read an excerpt',
    pl: 'Przeczytaj fragment'
};

//List of book IDs
export const BOOK_LIST = ['nocturine', 'vostok'];

//Content about books
export const BOOKS = [
    {
        id: 'nocturine',
        title: {
            en: 'Nocturine',
            pl: 'Nocturine'
        },
        displayOnMain: true,
        cover: nocturineCover,
        url: NOCTURINE_URL,
        slogan: {
            en: <div>Forthcoming in 2021 from <a href={NOCTURINE_URL} target="_blank"
                                                 rel="noopener noreferrer"><strong>FATHOM
                BOOKS</strong></a></div>,
            pl: <div>Dostępna w&nbsp;2021&nbsp;roku<br/>w&nbsp;wydawnictwie <a
                href={NOCTURINE_URL}
                target="_blank"
                rel="noopener noreferrer"><strong>FATHOM
                BOOKS</strong></a></div>,
        },
        orderButton: {
            en: ORDER_BUTTON['preorder']['en'],
            pl: ORDER_BUTTON['preorder']['pl']
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
                <p><em>NOCTURINE</em> is a collection of interlinked stories that takes you on a genre-bending journey
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
    {
        id: 'vostok',
        title: {
            en: 'Vostok',
            pl: 'Vostok'
        },
        displayOnMain: true,
        cover: vostokCover,
        url: VOSTOK_URL,
        slogan: {
            en: <div>Forthcoming autumn 2021 from <a href={VOSTOK_URL} target="_blank"
                                                     rel="noopener noreferrer"><strong>VRÆYDA&nbsp;LITERARY</strong></a>
            </div>,
            pl: <div>Dostępna jesienią 2021&nbsp;roku<br/>w&nbsp;wydawnictwie <a
                href={VOSTOK_URL}
                target="_blank"
                rel="noopener noreferrer"><strong>VRÆYDA&nbsp;LITERARY</strong></a></div>,
        },
        orderButton: {
            en: ORDER_BUTTON['preorder']['en'],
            pl: ORDER_BUTTON['preorder']['pl']
        },
        body: {
            en: <div>
                <p>Poznań, Poland. The middle of a harsh winter. Weronika is in love with her best friend Wu, who has
                    just told her about his new boyfriend. They spend most evenings drinking away their problems with a
                    bunch of like-minded pub-goers. There’s been a terrorist attack. A girl gets murdered with a war
                    scythe. The reality reveals a whole new layer when the friends mention a place called Vostok
                    City.</p>
                <p>On the surface, <em>VOSTOK</em> is a murder story with a literary bent. Dig deeper, and it will
                    reveal itself as science
                    fiction that only pretends to play by the rules of realism.</p>
            </div>,
            pl: <div>
                <p>Poznań, środek mroźnej zimy. Weronika kocha się w&nbsp;swoim najlepszym przyjacielu Wu, który właśnie
                    przedstawił jej swojego nowego chłopaka. Większość wieczorów przyjaciele spędzają w&nbsp;ulubionych
                    knajpach, zapijając problemy z&nbsp;grupką znajomych. Niesie się wieść o&nbsp;ataku terrorystycznym.
                    Dziewczyna ginie raniona kosą bojową. Rzeczywistość odkrywa całkiem nową warstwę, gdy znajomi
                    wspominają o&nbsp;miejscu zwanym Vostok City.</p>
                <p>Na pierwszy rzut oka <em>VOSTOK</em> to kryminał z wysokoartystycznym zacięciem. Gdy jednak zajrzy
                    się głębiej, powieść okazuje się
                    science fiction, które tylko z&nbsp;pozoru gra według reguł realizmu.</p>
            </div>
        },
        quotes: {
            en: [
                {
                    quote: <div><em>Vostok</em>’s prose is of a singular beauty and purity. I cannot stop diving back
                        into it.</div>,
                    source: 'VRÆYDA LITERARY, the publisher'
                }
            ],
            pl: [
                {
                    quote: <div><em>Vostok</em> to proza o&nbsp;wyjątkowej urodzie i&nbsp;czystości. Nie mogę
                        przestać do niej wracać.</div>,
                    source: 'VRÆYDA LITERARY, wydawca'
                }
            ]
        }
    }
];

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
        },
        blog: {
            en: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faStickyNote}
                    aria-hidden="true"
                    title="Read the blog">
                </FontAwesomeIcon>
                <span className="sr-only">Read the blog</span>
            </React.Fragment>),
            pl: (<React.Fragment>
                <FontAwesomeIcon
                    icon={faStickyNote}
                    aria-hidden="true"
                    title="Czytaj blog (po angielsku)">
                </FontAwesomeIcon>
                <span className="sr-only">Czytaj blog (po angielsku)</span>
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
                <p>I’m a Polish writer writing mostly in English. My favourite pastime is taking literary fiction and
                    blending it with other genres, and I’m an enormous flash fiction fan (though I don’t shy away from
                    longer forms). I live in Kraków, Poland.</p>
                <p>I have two books coming out this year: a collection of interlinked stories <AnchorLink
                    href='#nocturine'
                    offset="60px"><strong>NOCTURINE</strong></AnchorLink> to
                    be published by <a href={NOCTURINE_URL} target="_blank"
                                       rel="noopener noreferrer"><strong>FATHOM&nbsp;BOOKS</strong></a>,
                    and a novel <AnchorLink
                        href='#vostok'
                        offset="60px"><strong>VOSTOK</strong></AnchorLink> forthcoming from <a
                        href={VOSTOK_URL} target="_blank"
                        rel="noopener noreferrer"><strong>VRÆYDA&nbsp;LITERARY</strong></a>.</p>
                <p>My other work has been featured in <em>HAD</em>, <em>Fractured Lit</em>, <em>Atticus
                    Review</em>, <em>Quarterly West</em>, <em>Pithead
                    Chapel</em>, <em>Lighthouse</em>, <em>STORGY</em>, <em>BULL</em>, <em>Foglifter</em>, <em>X-R-A-Y
                    Literary
                    Magazine</em>, and
                    elsewhere.</p>
                <p>I’m also editor-in-chief at <a
                    href={BLYSKI_URL} target="_blank"
                    rel="noopener noreferrer"><strong>BŁYSKI</strong></a>, a journal publishing flash fiction in Polish
                    translation.</p>
                <p>Below you can find
                    a <AnchorLink href='#pubs' offset="60px"><strong>FULL LIST OF
                        PUBLICATIONS</strong></AnchorLink> and <AnchorLink href='#read'
                                                                           offset="60px"><strong>READ</strong></AnchorLink> some
                    of my pieces.
                </p>
                <p className="centered">email: <em>drobniklukasz [at] gmail [dot] com</em></p>
            </div>,
            pl: <div>
                <p>Jestem polskim pisarzem piszącym głównie po angielsku. Najlepiej się bawię, gdy biorę tzw. prozę
                    wysokoartystyczną
                    i&nbsp;wplatam w&nbsp;nią elementy innych gatunków. Do tego jestem ogromnym fanem <em>flash
                        fiction</em> (nie stronię jednak od dłuższych form). Mieszkam w Krakowie.</p>
                <p>W&nbsp;tym roku ukażą się moje dwie książki: zbiór powiązanych fabularnie opowiadań <AnchorLink
                    href='#nocturine'
                    offset="60px"><strong>NOCTURINE</strong></AnchorLink> (wydawnictwo <a href={NOCTURINE_URL}
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"><strong>FATHOM&nbsp;BOOKS</strong></a>)
                    i&nbsp;powieść <AnchorLink
                        href='#vostok'
                        offset="60px"><strong>VOSTOK</strong></AnchorLink> (wydawnictwo <a
                        href={VOSTOK_URL} target="_blank"
                        rel="noopener noreferrer"><strong>VRÆYDA&nbsp;LITERARY</strong></a>).</p>
                <p>Moje utwory były publikowane m.in. w&nbsp;<em>HAD</em>, <em>Fractured Lit</em>, <em>Atticus
                    Review</em>, <em>Quarterly
                    West</em>, <em>Pithead
                    Chapel</em>, <em>Lighthouse</em>, <em>Foglifter</em>, <em>STORGY</em>, <em>BULL</em> oraz <em>X-R-A-Y
                    Literary
                    Magazine</em>.</p>
                <p>Jestem też redaktorem naczelnym <a
                    href={BLYSKI_URL} target="_blank"
                    rel="noopener noreferrer"><strong>BŁYSKÓW</strong></a>, pisma publikującego flash fiction
                    w&nbsp;polskim przekładzie.</p>
                <p>Poniżej można
                    znaleźć <AnchorLink href='#pubs' offset="60px"><strong>PEŁNĄ LISTĘ PUBLIKACJI</strong></AnchorLink>,
                    a&nbsp;także <AnchorLink href='#read' offset="60px"><strong>POCZYTAĆ</strong></AnchorLink> kilka
                    moich
                    tekstów.</p>
                <p className="centered">e-mail: <em>drobniklukasz [at] gmail [dot] com</em></p>
            </div>
        },
        cta: {
            en: [
                {
                    message: <div>Pre-order NOCTURINE</div>,
                    path: NOCTURINE_URL
                },
                {
                    message: <div>Pre-order VOSTOK</div>,
                    path: VOSTOK_URL
                },
            ],
            pl: [
                {
                    message: <div>Czytaj BŁYSKI</div>,
                    path: BLYSKI_URL
                }
            ]
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
                url: TWITTER_URL
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
                url: INSTAGRAM_URL
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
                url: FACEBOOK_URL
            }
        ]
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
            pl: <div>Oto garstka moich tekstów<br/>do niezobowiązującej lektury:</div>
        },
        blogButton: '…or check out my blog'
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
            id: 'books',
            text: {
                en: 'books',
                pl: 'książki'
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
        },
        {
            id: 'blog',
            text: {
                en: 'blog',
                pl: 'blog'
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
    blog: {
        title: 'Łukasz Drobnik’s blog',
        latestPost: 'Latest post:',
        olderPosts: 'Older posts:',
        displayedCategory: 'Displayed category:',
        showAll: 'show all',
        nextPost: 'up next: ',
        readNext: 'Read next:',
        top: 'top',
        home: 'home',
        blog: 'all notes'
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
    },
    copyright: <React.Fragment>&copy;&nbsp;2019–2021 Łukasz Drobnik</React.Fragment>
};

//Content and data of blog notes
export const BLOG_NOTES = [
    {
        id: 'markdown',
        title: 'Basic Markdown syntax',
        date: ['2021', '08', '01'],
        category: 'nocturine'
    },
    {
        id: 'github-pages',
        title: 'Publishing on GitHub Pages',
        date: ['2021', '07', '15'],
        category: 'pop'
    },
    {
        id: 'visual-studio-code',
        title: 'Visual Studio Code basics',
        date: ['2021', '07', '01'],
        category: 'vostok'
    },
    {
        id: 'github-teamwork',
        title: 'GitHub and teamwork',
        date: ['2021', '06', '01'],
        category: 'writing'
    },
    {
        id: 'github-basics',
        title: 'Getting started with GitHub',
        date: ['2021', '05', '21'],
        category: 'biology'
    },
    {
        id: 'highlightjs',
        title: 'Highlight.js',
        date: ['2021', '05', '22'],
        category: 'code'
    }
];

//Titles of blog note categories
export const BLOG_CATEGORIES = {
    writing: 'The Tech of Writing',
    nocturine: 'Notes on NOCTURINE',
    vostok: 'VOSTOK as a Book',
    code: 'Code the Pain Away',
    biology: 'Biology Porn',
    pop: 'This Is How We Pop'
}

//Content of quick links (to be used on Instagram)
export const LINKS = [
    {
        title: 'Pre-order VOSTOK',
        subtitle: 'from Vræyda Literary',
        url: VOSTOK_URL
    },
    {
        title: 'Pre-order NOCTURINE',
        subtitle: 'from Fathom Books',
        url: NOCTURINE_URL
    },
    {
        title: 'Check out “błyski”',
        subtitle: 'my journal with flash in Polish translation',
        url: 'https://blyski.org'
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
        url: KO_FI_URL
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
        url: TWITTER_URL
    },
    {
        title: 'Facebook',
        subtitle: '@drobnikwrites',
        url: FACEBOOK_URL
    }
];
