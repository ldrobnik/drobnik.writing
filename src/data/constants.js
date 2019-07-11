import React from 'react';

//constants containing the content of individual pieces
import { NOCTURINE_EN } from './texts/nocturine-en';
import { NOCTURINE_PL } from './texts/nocturine-pl';
import { CETACEAN_EN } from './texts/cetacean-en';
import { CETACEAN_PL } from './texts/cetacean-pl';
import { MOTHS_EN } from './texts/moths-en';
import { MOTHS_PL } from './texts/moths-pl';
import { CELLULOSE_EN } from './texts/cellulose-en';
import { CELLULOSE_PL } from './texts/cellulose-pl';
import { TREASURES_EN } from './texts/treasures-en';
import { TREASURES_PL } from './texts/treasures-pl';
import { LANDMINES_EN } from './texts/landmines-en';
import { LANDMINES_PL } from './texts/landmines-pl';

//Names of available texts
export const TEXT_NAMES = ['nocturine', 'cetacean', 'moths', 'cellulose', 'treasures', 'landmines'];

//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'fragment',
            description: <div></div>,
            content: NOCTURINE_EN,
            footer: '',
            theme: 'nocturine',
            url: 'nocturine'
        },

        cetacean: {
            title: 'Cetacean',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: CETACEAN_EN,
            footer: '',
            theme: 'devonian',
            url: 'cetacean'
        },

        moths: {
            title: 'Moths',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: MOTHS_EN,
            footer: '',
            theme: 'entropia',
            url: 'moths'
        },

        cellulose: {
            title: 'Cellulose',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: CELLULOSE_EN,
            footer: '',
            theme: 'cunninghamella',
            url: 'cellulose'
        },

        treasures: {
            title: 'Treasures',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: TREASURES_EN,
            footer: '',
            theme: 'vostok',
            url: 'treasures'
        },

        landmines: {
            title: 'Landmines',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: LANDMINES_EN,
            footer: '',
            theme: 'obrovsky',
            url: 'landmines'
        }
    },
    pl: {
        nocturine: {
            title: 'Nocturine',
            subtitle: 'fragment',
            description: <div></div>,
            content: NOCTURINE_PL,
            footer:'',
            theme: 'nocturine',
            url: 'nocturine-pl'
        },

        cetacean: {
            title: 'Waleń',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: CETACEAN_PL,
            footer: '',
            theme: 'devonian',
            url: 'walen'
        },

        moths: {
            title: 'Ćmy',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: MOTHS_PL,
            footer: '',
            theme: 'entropia',
            url: 'cmy'
        },

        cellulose: {
            title: 'Celuloza',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: CELLULOSE_PL,
            footer: '',
            theme: 'cunninghamella',
            url: 'celuloza'
        },

        treasures: {
            title: 'Skarby',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: TREASURES_PL,
            footer: '',
            theme: 'vostok',
            url: 'skarby'
        },

        landmines: {
            title: 'Miny',
            subtitle: 'flash fiction',
            description: <div></div>,
            content: LANDMINES_PL,
            footer: '',
            theme: 'obrovsky',
            url: 'miny'
        }
    }
};


//List of publications used in the Bio section

export const PUBLICATIONS = {
    books: [
        {
            title: 'Nocturine',
            type: 'book',
            year: '',
            url: 'http://fathombooks.org/',
            descriptionPl: 'Angielska wersja minipowieści „Nocturine”, która ukaże się w 2019 r. nakładem wydawnictwa Fathom Books',
            descriptionEn: 'English version of the novella “Nocturine” forthcoming in 2019 from Fathom Books',
            language: 'en'
        },
        {
            title: 'Nocturine. Cunninghamella',
            type: 'book',
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
            type: 'press',
            year: '',
            url: 'https://pitheadchapel.com/',
            descriptionPl: 'Flash fiction „Entrails”',
            descriptionEn: 'Flash fiction “Entrails”',
            language: 'en'
        },
        {
            title: 'Atticus Review',
            type: 'press',
            year: '2019',
            url: 'https://atticusreview.org/',
            descriptionPl: 'Flash fiction „Treasures”',
            descriptionEn: 'Flash fiction “Treasures”',
            language: 'en'
        },
        {
            title: 'Foglifter Volume 4 Issue 1',
            type: 'press',
            year: '2019',
            url: 'https://foglifterjournal.com/',
            descriptionPl: 'Flash fiction „Landmines”',
            descriptionEn: 'Flash fiction “Landmines”',
            language: 'en'
        },
        {
            title: 'X-R-A-Y Literary Magazine',
            type: 'press',
            year: '2019',
            url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/',
            descriptionPl: 'Flash fiction „Spores”',
            descriptionEn: 'Flash fiction “Spores”',
            language: 'en'
        },
        {
            title: 'SHARKPACK Annual (2018)',
            type: 'press',
            year: '2018',
            url: 'http://fathombooks.org/html/issueone.html',
            descriptionPl: '„8-bit Dreams” (fragment minipowieści „Nocturine”)',
            descriptionEn: '“8-bit Dreams” (Fragment of the novella “Nocturine”)',
            language: 'en'
        },
        {
            title: 'Stoner Polski (1)',
            type: 'press',
            year: '2018',
            url: 'http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html',
            descriptionPl: 'Flash fiction „Celuloza” (przekład tekstu „Cellulose”)',
            descriptionEn: 'Flash fiction “Celuloza” (translation of “Cellulose”)',
            language: 'pl'
        },
        {
            title: 'Underwood (September 2018)',
            type: 'press',
            year: '2018',
            url: 'https://underwoodpress.com/inaugural-issue/september-2018/photosensitivity-by-lukasz-drobnik/',
            descriptionPl: 'Opowiadanie „Photosensitivity” (przekład tekstu „Światłoczułość”)',
            descriptionEn: 'Short story “Photosensitivity” (translation of “Światłoczułość”',
            language: 'en'
        },
        {
            title: 'Mojave Heart Review (September 2018)',
            type: 'press',
            year: '2018',
            url: 'https://mojaveheart.com/cellulose/',
            descriptionPl: 'Flash fiction „Cellulose”',
            descriptionEn: 'Flash fiction “Cellulose”',
            language: 'en'
        },
        {
            title: 'Afront 2(5)/2018',
            type: 'press',
            year: '2018',
            url: 'https://afront.org.pl/',
            descriptionPl: 'Opowiadanie „Skomplikowane przeczucie” i flash fiction „Waleń” (przekład tekstu „Cetacean”)',
            descriptionEn: 'Short story “Skomplikowane przeczucie” and flash fiction “Waleń” (translation of “Cetacean”)',
            language: 'pl'
        },
        {
            title: 'wydawnictwo j',
            type: 'press',
            year: '2018',
            url: 'http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/',
            descriptionPl: 'Fragment powieści „Vostok”',
            descriptionEn: 'Fragment of the novel “Vostok”',
            language: 'pl'
        },
        {
            title: 'Magazyn Wizje (2/2018)',
            type: 'press',
            year: '2018',
            url: 'http://magazynwizje.pl/lukasz-drobnik-swiatloczulosc/',
            descriptionPl: 'Opowiadanie „Światłoczułość”',
            descriptionEn: 'Short story “Światłoczułość”',
            language: 'pl'

        },
        {
            title: 'Quarterly West (94)',
            type: 'press',
            year: '2018',
            url: 'https://www.quarterlywest.com/issue-94/cetacean',
            descriptionPl: 'Flash fiction „Cetacean”',
            descriptionEn: 'Flash fiction “Cetacean”',
            language: 'en'
        },
        {
            title: 'Obszary Przepisane (5)',
            type: 'press',
            year: '2018',
            url: 'http://obszaryprzepisane.com/wp-content/uploads/2018/04/05op-1.pdf',
            descriptionPl: 'Flash fiction „Żywioły” (przekład tekstu „Elements”)',
            descriptionEn: 'Flash fiction “Żywioły” (translation of “Elements”)',
            language: 'pl'
        },
        {
            title: 'The Chaffin Journal (2018)',
            type: 'press',
            year: '2018',
            url: 'https://english.eku.edu/chaffin-journal',
            descriptionPl: 'Flash fiction „Elements”',
            descriptionEn: 'Flash fiction “Elements”',
            language: 'en'
        },
        {
            title: 'Inter– (2(16)/2018)',
            type: 'press',
            year: '2018',
            url: 'https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/',
            descriptionPl: 'Flash fiction „Dewon” (przekład tekstu „Devonian”)',
            descriptionEn: 'Flash fiction “Dewon” (translation of “Devonian”)',
            language: 'pl'
        },
        {
            title: 'Helikopter (3/2018)',
            type: 'press',
            year: '2018',
            url: 'https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/',
            descriptionPl: 'Flash fiction „Drony” (przekład tekstu „Drones”)',
            descriptionEn: 'Flash fiction “Drony” (translation of “Drones”)',
            language: 'pl'
        },
        {
            title: 'Cartridge Lit (The Foul Play Temple Issue)',
            type: 'press',
            year: '2018',
            url: 'https://cartridgelit.com/2018/02/14/montezumas-revenge/',
            descriptionPl: 'Opowiadanie „montezuma’s revenge”',
            descriptionEn: 'Short story “montezuma’s revenge”',
            language: 'en'
        },

        {
            title: 'The Write Launch (February 2018)',
            type: 'press',
            year: '2018',
            url: 'https://thewritelaunch.com/2018/01/heart-mighty-power/',
            descriptionPl: '„Heart Mighty Power”, fragment minipowieści „Nocturine”',
            descriptionEn: '“Heart Mighty Power”, Fragment of the novella “Nocturine”',
            language: 'en'
        },
        {
            title: 'The Gravity of the Thing (Winter 2018)',
            type: 'press',
            year: '2018',
            url: 'http://thegravityofthething.com/devonian-lukasz-drobnik/',
            descriptionPl: 'Flash fiction „Devonian”',
            descriptionEn: 'Flash fiction “Devonian”',
            language: 'en'
        },
        {
            title: 'Bare Fiction (10)',
            type: 'press',
            year: '2017',
            url: 'http://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/',
            descriptionPl: 'Flash fiction „Drones”',
            descriptionEn: 'Flash fiction “Drones”',
            language: 'en'
        },

        {
            title: 'Fabularie (10)',
            type: 'press',
            year: '2016',
            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',
            descriptionPl: 'Flash fiction „Ćmy” (przekład tekstu „Moths”)',
            descriptionEn: 'Flash fiction “Ćmy” (translation of “Moths”)',
            language: 'pl'
        },
        {
            title: 'Wyspa (4 - Suplement)',
            type: 'press',
            year: '2015',
            url: 'http://kwartalnikwyspa.pl/category/numer-2015suplement/',
            descriptionPl: 'Opowiadanie „Wszystkożerność”',
            descriptionEn: 'Short story “Wszystkożerność”',
            language: 'pl'
        },
        {
            title: 'Lighthouse (10)',
            type: 'press',
            year: '2015',
            url: 'http://www.gatehousepress.com/lighthouse/',
            descriptionPl: 'Flash fiction „Moths”',
            descriptionEn: 'Flash fiction “Moths”',
            language: 'en'
        },
        {
            title: 'Lampa (3/2012)',
            type: 'press',
            year: '2012',
            url: 'http://lampa.art.pl/',
            descriptionPl: 'Początkowe rozdziały powieści „Vostok”',
            descriptionEn: 'Initial chapters of the novel “Vostok”',
            language: 'pl'
        },
        {
            title: 'Dodatek Literacki (9)',
            type: 'press',
            year: '2011',
            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Dwutygodnik.com (57)',
            type: 'press',
            year: '2011',
            url: 'http://www.dwutygodnik.com/wydanie/2011/57',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Latarnia Morska (1–2 (11–12) 2009 / 1 (13) 2010)',
            type: 'press',
            year: '2009/2010',
            url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',
            descriptionPl: 'Fragment minipowieści „Nocturine”',
            descriptionEn: 'Fragment of the novella “Nocturine”',
            language: 'pl'
        },
        {
            title: 'Pro Arte online 3 (61) 2006',
            type: 'press',
            year: '2006',
            url: 'http://proarte.net.pl',
            descriptionPl: 'Opowiadanie „ośmiobitowe sny”',
            descriptionEn: 'Short story “ośmiobitowe sny”',
            language: 'pl'
        },
        {
            title: 'Rita Baum (10)',
            type: 'press',
            year: '2006',
            url: 'https://issuu.com/ritabaumwroclaw/docs/10',
            descriptionPl: 'Opowiadanie „Rozbieranie do snu”',
            descriptionEn: 'Short story “Rozbieranie do snu”',
            language: 'pl'
        },
        {
            title: 'Lampa (6/2005)',
            type: 'press',
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
            type: 'collection',
            year: '2019',
            url: 'http://theselkie.co.uk/anthology/',
            descriptionPl: 'Flash fiction „Airborne” w antologii opublikowanej przez magazyn The Selkie',
            descriptionEn: 'Flash fiction “Airborne” in an anthology published by The Selkie',
            language: 'en'
        },
        {
            title: '2017. Antologia współczesnych polskich opowiadań',
            type: 'collection',
            year: '2017',
            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',
            descriptionEn: 'A collection featuring my piece “Jeśli zapłonę” (Forma)',
            language: 'pl'
        },
        {
            title: '2014. Antologia współczesnych polskich opowiadań',
            type: 'collection',
            year: '2014',
            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',
            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',
            descriptionEn: 'A collection featuring my piece “Biegnący człowiek” (Forma)',
            language: 'pl'
        }
    ]

};


//content of modals describing book publications
export const BOOKS = {
  nocturineCunninghamella: {
      photo: 'noc-cun',
      title: 'Nocturine. Cunninghamella',
      en: {
          subtitle: '',
          description: <div></div>
      },
      pl: {
          subtitle: '',
          description: <div></div>
      }
  },

    nocturine: {
        photo: 'nocturine',
        title: 'Nocturine',
        en: {
            subtitle: '',
            description: <div></div>
        },
        pl: {
            subtitle: '',
            description: <div></div>
        }
    }
};
