import React from 'react';

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
            subtitle: 'novella (fragment)',
            notes: <div></div>,
            description: <div></div>,
            content: NOCTURINE_EN,
            theme: 'nocturine'
        },

        cellulose: {
            title: 'Cellulose',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: CELLULOSE_EN,
            theme: 'cellulose'
        },

        cetacean: {
            title: 'Cetacean',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: CETACEAN_EN,
            theme: 'cetacean'
        },


        moths: {
            title: 'Moths',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: MOTHS_EN,
            theme: 'moths'
        },

        drones: {
            title: 'Drones',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: DRONES_EN,
            theme: 'drones'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: LANDMINES_EN,
            theme: 'landmines'
        },

        treasures: {
            title: 'Treasures',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: TREASURES_EN,
            theme: 'treasures'
        }

    },
    pl: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'minipowieść (fragment)',
            notes: <div></div>,
            description: <div></div>,
            content: NOCTURINE_PL,
            theme: 'nocturine'
        },

        cetacean: {
            title: 'Waleń',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: CETACEAN_PL,
            theme: 'cetacean'
        },


        cellulose: {
            title: 'Celuloza',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: CELLULOSE_PL,
            theme: 'cellulose'
        },

        moths: {
            title: 'Ćmy',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: MOTHS_PL,
            theme: 'moths'
        },

        drones: {
            title: 'Drony',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: DRONES_PL,
            theme: 'drones'
        },


        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
            content: LANDMINES_PL,
            theme: 'landmines'
        },

        treasures: {
            title: 'Skarby',
            subtitle: 'flash fiction',
            notes: <div></div>,
            description: <div></div>,
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
            language: 'en'
        },
        {
            title: 'Nocturine. Cunninghamella',
            year: '2011',
            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',
            descriptionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',
            descriptionEn: 'A volume of two novellas published by Forma publishing house',
            language: 'pl'
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
            language: 'en'
        },
        {
            title: 'Atticus Review',
            issue: 'May 2019',
            year: '2019',
            url: 'https://atticusreview.org/',
            descriptionPl: 'Flash fiction „Treasures”',
            descriptionEn: 'Flash fiction “Treasures”',
            language: 'en'
        },
        {
            title: 'Foglifter',
            issue: 'Volume 4 Issue 1',
            year: '2019',
            url: 'https://foglifterjournal.com/',
            descriptionPl: 'Flash fiction „Landmines”',
            descriptionEn: 'Flash fiction “Landmines”',
            language: 'en'
        },
        {
            title: 'X-R-A-Y Literary Magazine',
            issue: 'Issue 17',
            year: '2019',
            url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/',
            descriptionPl: 'Flash fiction „Spores”',
            descriptionEn: 'Flash fiction “Spores”',
            language: 'en'
        },
        {
            title: 'SHARKPACK Annual',
            issue: '#1/(#5)',
            year: '2018',
            url: 'http://fathombooks.org/html/issueone.html',
            descriptionPl: '„8-bit Dreams” (fragment minipowieści „Nocturine”)',
            descriptionEn: '“8-bit Dreams” (Fragment of the novella “Nocturine”)',
            language: 'en'
        },
        {
            title: 'Stoner Polski',
            issue: '#1',
            year: '2018',
            url: 'http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html',
            descriptionPl: 'Flash fiction „Celuloza” (przekład tekstu „Cellulose”)',
            descriptionEn: 'Flash fiction “Celuloza” (translation of “Cellulose”)',
            language: 'pl'
        },
        {
            title: 'Underwood',
            issue: 'September 2018',
            year: '2018',
            url: 'https://underwoodpress.com/inaugural-issue/september-2018/photosensitivity-by-lukasz-drobnik/',
            descriptionPl: 'Opowiadanie „Photosensitivity” (przekład tekstu „Światłoczułość”)',
            descriptionEn: 'Short story “Photosensitivity” (translation of “Światłoczułość”',
            language: 'en'
        },
        {
            title: 'Mojave Heart Review',
            issue: 'September 2018',
            year: '2018',
            url: 'https://mojaveheart.com/cellulose/',
            descriptionPl: 'Flash fiction „Cellulose”',
            descriptionEn: 'Flash fiction “Cellulose”',
            language: 'en'
        },
        {
            title: 'Afront',
            issue: '2(5)/2018',
            year: '2018',
            url: 'https://afront.org.pl/',
            descriptionPl: 'Opowiadanie „Skomplikowane przeczucie” i flash fiction „Waleń” (przekład tekstu „Cetacean”)',
            descriptionEn: 'Short story “Skomplikowane przeczucie” and flash fiction “Waleń” (translation of “Cetacean”)',
            language: 'pl'
        },
        {
            title: 'wydawnictwo j',
            issue: '',
            year: '2018',
            url: 'http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/',
            descriptionPl: 'Fragment powieści „Vostok”',
            descriptionEn: 'Fragment of the novel “Vostok”',
            language: 'pl'
        },
        {
            title: 'Magazyn Wizje',
            issue: '2/2018',
            year: '2018',
            url: 'http://magazynwizje.pl/lukasz-drobnik-swiatloczulosc/',
            descriptionPl: 'Opowiadanie „Światłoczułość”',
            descriptionEn: 'Short story “Światłoczułość”',
            language: 'pl'

        },
        {
            title: 'Quarterly West',
            issue: '#94',
            year: '2018',
            url: 'https://www.quarterlywest.com/issue-94/cetacean',
            descriptionPl: 'Flash fiction „Cetacean”',
            descriptionEn: 'Flash fiction “Cetacean”',
            language: 'en'
        },
        {
            title: 'Obszary Przepisane',
            issue: '#5',
            year: '2018',
            url: 'http://obszaryprzepisane.com/wp-content/uploads/2018/04/05op-1.pdf',
            descriptionPl: 'Flash fiction „Żywioły” (przekład tekstu „Elements”)',
            descriptionEn: 'Flash fiction “Żywioły” (translation of “Elements”)',
            language: 'pl'
        },
        {
            title: 'The Chaffin Journal',
            issue: 'The 2018 Issue',
            year: '2018',
            url: 'https://english.eku.edu/chaffin-journal',
            descriptionPl: 'Flash fiction „Elements”',
            descriptionEn: 'Flash fiction “Elements”',
            language: 'en'
        },
        {
            title: 'Inter-',
            issue: '2(16)/2018',
            year: '2018',
            url: 'https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/',
            descriptionPl: 'Flash fiction „Dewon” (przekład tekstu „Devonian”)',
            descriptionEn: 'Flash fiction “Dewon” (translation of “Devonian”)',
            language: 'pl'
        },
        {
            title: 'Helikopter',
            issue: '3/2018',
            year: '2018',
            url: 'https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/',
            descriptionPl: 'Flash fiction „Drony” (przekład tekstu „Drones”)',
            descriptionEn: 'Flash fiction “Drony” (translation of “Drones”)',
            language: 'pl'
        },
        {
            title: 'Cartridge Lit',
            issue: 'The Foul Play Temple Issue',
            year: '2018',
            url: 'https://cartridgelit.com/2018/02/14/montezumas-revenge/',
            descriptionPl: 'Opowiadanie „montezuma’s revenge”',
            descriptionEn: 'Short story “montezuma’s revenge”',
            language: 'en'
        },
        {
            title: 'The Write Launch',
            issue: 'February 2018',
            year: '2018',
            url: 'https://thewritelaunch.com/2018/01/heart-mighty-power/',
            descriptionPl: '„Heart Mighty Power”, fragment minipowieści „Nocturine”',
            descriptionEn: '“Heart Mighty Power”, Fragment of the novella “Nocturine”',
            language: 'en'
        },
        {
            title: 'The Gravity of the Thing',
            issue: 'Winter 2018',
            year: '2018',
            url: 'http://thegravityofthething.com/devonian-lukasz-drobnik/',
            descriptionPl: 'Flash fiction „Devonian”',
            descriptionEn: 'Flash fiction “Devonian”',
            language: 'en'
        },
        {
            title: 'Bare Fiction',
            issue: '#10',
            year: '2017',
            url: 'http://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/',
            descriptionPl: 'Flash fiction „Drones”',
            descriptionEn: 'Flash fiction “Drones”',
            language: 'en'
        },

        {
            title: 'Fabularie',
            issue: '10',
            year: '2016',
            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',
            descriptionPl: 'Flash fiction „Ćmy” (przekład tekstu „Moths”)',
            descriptionEn: 'Flash fiction “Ćmy” (translation of “Moths”)',
            language: 'pl'
        },
        {
            title: 'Wyspa',
            issue: '4 - Suplement',
            year: '2015',
            url: 'http://kwartalnikwyspa.pl/category/numer-2015suplement/',
            descriptionPl: 'Opowiadanie „Wszystkożerność”',
            descriptionEn: 'Short story “Wszystkożerność”',
            language: 'pl'
        },
        {
            title: 'Lighthouse',
            issue: '#10',
            year: '2015',
            url: 'http://www.gatehousepress.com/lighthouse/',
            descriptionPl: 'Flash fiction „Moths”',
            descriptionEn: 'Flash fiction “Moths”',
            language: 'en'
        },
        {
            title: 'Lampa',
            issue: '3/2012',
            year: '2012',
            url: 'http://lampa.art.pl/',
            descriptionPl: 'Początkowe rozdziały powieści „Vostok”',
            descriptionEn: 'Initial chapters of the novel “Vostok”',
            language: 'pl'
        },
        {
            title: 'Dodatek Literacki',
            issue: '#9',
            year: '2011',
            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Dwutygodnik.com',
            issue: '#57',
            year: '2011',
            url: 'http://www.dwutygodnik.com/wydanie/2011/57',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Latarnia Morska',
            issue: '1–2 (11–12) 2009/1 (13) 2010',
            year: '2009/2010',
            url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Pro Arte online 3',
            issue: '61/2006',
            year: '2006',
            url: 'http://proarte.net.pl',
            descriptionPl: 'Opowiadanie „ośmiobitowe sny”',
            descriptionEn: 'Short story “ośmiobitowe sny”',
            language: 'pl'
        },
        {
            title: 'Rita Baum',
            issue: '#10',
            year: '2006',
            url: 'https://issuu.com/ritabaumwroclaw/docs/10',
            descriptionPl: 'Opowiadanie „Rozbieranie do snu”',
            descriptionEn: 'Short story “Rozbieranie do snu”',
            language: 'pl'
        },
        {
            title: 'Lampa',
            issue: '6/2005',
            year: '2005',
            url: 'http://lampa.art.pl/',
            descriptionPl: 'Opowiadanie „Astroskopia”',
            descriptionEn: 'Short story “Astroskopia”',
            language: 'pl'
        }
    ],

    collections: [
        {
            title: 'Transformation Anthology',
            year: '2019',
            url: 'http://theselkie.co.uk/anthology/',
            descriptionPl: 'Flash fiction „Airborne” w antologii opublikowanej przez magazyn The Selkie',
            descriptionEn: 'Flash fiction “Airborne” in an anthology published by The Selkie',
            language: 'en'
        },
        {
            title: '2017. Antologia współczesnych polskich opowiadań',
            year: '2017',
            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',
            descriptionEn: 'A collection featuring my piece “Jeśli zapłonę” (Forma)',
            language: 'pl'
        },
        {
            title: '2014. Antologia współczesnych polskich opowiadań',
            year: '2014',
            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',
            descriptionEn: 'A collection featuring my piece “Biegnący człowiek” (Forma)',
            language: 'pl'
        }
    ]

};


//Colours used in themes
export const THEME_COLORS = {
    default: {
        color1: '#ff6a7d',
        color2: '#ee5b7b'
    },
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
            en: [
                'english1',
                'english2'
            ],
            pl: [
                'polish1',
                'polish2'
            ]
        },
        patreon: {
            en: <p>Please consider supporting me on <a href="https://www.patreon.com/drobnik" target="_blank"
                                                       rel="noopener noreferrer">Patreon</a>!</p>,
            pl: <p>Pomyśl, proszę, o wsparciu mnie na <a href="https://www.patreon.com/drobnik" target="_blank"
                                                         rel="noopener noreferrer">Patreonie</a>!</p>
        },
        social: [
            {
                name: 'twitter: @drobnik',
                url: 'https://twitter.com/drobnik'
            },
            {
                name: 'instagram: @drobnikwrites',
                url: 'https://www.instagram.com/drobnikwrites/'
            },
            {
                name: 'facebook: @drobnikwrites',
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
            en: 'Read',
            pl: 'Czytaj'
        },
        introduction: {
            en: 'Here is a handful of my texts in case you wished to read them:',
            pl: 'Oto kilka moich tekstów. Może zechcesz je przeczytać:'
        }
    },
    text: {
        nextText: {
            en: 'Up next: ',
            pl: 'Następny tekst: '
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

