import React from 'react';

//constants containing the content of individual pieces
import CELLULOSE_EN from 'texts/cellulose-en';
import CELLULOSE_PL from 'texts/cellulose-pl';
import CUNNINGHAMELLA_EN from 'texts/cunninghamella-en';
import CUNNINGHAMELLA_PL from 'texts/cunninghamella-pl';
import LANDMINES_EN from 'texts/landmines-en';
import LANDMINES_PL from 'texts/landmines-pl';
import MOTHS_EN from 'texts/moths-en';
import MOTHS_PL from 'texts/moths-pl';
import NOCTURINE_EN from 'texts/nocturine-en';
import NOCTURINE_PL from 'texts/nocturine-pl';
import OBROVSKY_EN from 'texts/obrovsky-en';
import OBROVSKY_PL from 'texts/obrovsky-pl';
import PHOTOSENSITIVITY_EN from 'texts/photosensitivity-en';
import PHOTOSENSITIVITY_PL from 'texts/photosensitivity-pl';
import VOSTOK_EN from 'texts/vostok-en';
import VOSTOK_PL from 'texts/vostok-pl';

//Content of pieces displayed in the Text component
export const TEXTS = {
    en: {
        cellulose: {
            title: 'Cellulose',
            subtitle: '',
            description: <div></div>,
            content: CELLULOSE_EN,
            footer: '',
            theme: 'devonian'
        },

        cunninghamella: {
            title: 'Cunninghamella',
            subtitle: '',
            description: <div></div>,
            content: CUNNINGHAMELLA_EN,
            footer: '',
            theme: 'cunninghamella'
        },

        landmines: {
            title: 'Landmines',
            subtitle: '',
            description: <div></div>,
            content: LANDMINES_EN,
            footer: '',
            theme: 'devonian'
        },

        moths: {
            title: 'Moths',
            subtitle: '',
            description: <div></div>,
            content: MOTHS_EN,
            footer: '',
            theme: 'devonian'
        },

        nocturine: {
            title: 'Nocturine',
            subtitle: '',
            description: <div></div>,
            content: NOCTURINE_EN,
            footer: '',
            theme: 'nocturine'
        },

        obrovsky: {
            title: 'Obrovsky',
            subtitle: '',
            description: <div></div>,
            content: OBROVSKY_EN,
            footer: '',
            theme: 'obrovsky'
        },

        photosensitivity: {
            title: 'Photosensitivity',
            subtitle: '',
            description: <div></div>,
            content: PHOTOSENSITIVITY_EN,
            footer: '',
            theme: 'entropia'
        },

        vostok: {
            title: 'Vostok',
            subtitle: '',
            description: <div></div>,
            content: VOSTOK_EN,
            footer: '',
            theme: 'vostok'
        }
    },
    pl: {
        cellulose: {
            title: 'Celuloza',
            subtitle: '',
            description: <div></div>,
            content: CELLULOSE_PL,
            footer: '',
            theme: 'devonian'
        },

        cunninghamella: {
            title: 'Cunninghamella',
            subtitle: '',
            description: <div></div>,
            content: CUNNINGHAMELLA_PL,
            footer: '',
            theme: 'cunninghamella'
        },

        landmines: {
            title: 'Miny',
            subtitle: '',
            description: <div></div>,
            content: LANDMINES_PL,
            footer: '',
            theme: 'devonian'
        },

        moths: {
            title: 'Ćmy',
            subtitle: '',
            description: <div></div>,
            content: MOTHS_PL,
            footer: '',
            theme: 'devonian'
        },

        nocturine: {
            title: 'Nocturine',
            subtitle: '',
            description: <div></div>,
            content: NOCTURINE_PL,
            footer:'',
            theme: 'nocturine'
        },

        obrovsky: {
            title: 'Obrovsky',
            subtitle: '',
            description: <div></div>,
            content: OBROVSKY_PL,
            footer: '',
            theme: 'obrovsky'
        },

        photosensitivity: {
            title: 'Światłoczułość',
            subtitle: '',
            description: <div></div>,
            content: PHOTOSENSITIVITY_PL,
            footer: '',
            theme: 'entropia'
        },

        vostok: {
            title: 'Vostok',
            subtitle: '',
            description: <div></div>,
            content: VOSTOK_PL,
            footer: '',
            theme: 'vostok'
        }
    }
};


//List of publications used in the Bio section
export const PUBLICATIONS = [
    {
        title: 'Nocturine',
        type: 'book',
        year: '',
        filename: 'nocturinefb',
        url: 'http://fathombooks.org/',
        descriptionPl: 'Angielska wersja minipowieści „Nocturine”, która ukaże się w 2019 r. nakładem wydawnictwa Fathom Books',
        descriptionEn: 'English version of the novella “Nocturine” forthcoming in 2019 from Fathom Books',
        modal: true,
        language: 'en'
    },
    {
        title: 'Pithead Chapel',
        type: 'press',
        year: '',
        filename: 'pithead',
        url: 'https://pitheadchapel.com/',
        descriptionPl: 'Flash fiction „Entrails”',
        descriptionEn: 'Flash fiction “Entrails”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Atticus Review',
        type: 'press',
        year: '2019',
        filename: 'atticus',
        url: 'https://atticusreview.org/',
        descriptionPl: 'Flash fiction „Treasures”',
        descriptionEn: 'Flash fiction “Treasures”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Foglifter Volume 4 Issue 1',
        type: 'press',
        year: '2019',
        filename: 'foglifter',
        url: 'https://foglifterjournal.com/',
        descriptionPl: 'Flash fiction „Landmines”',
        descriptionEn: 'Flash fiction “Landmines”',
        modal: false,
        language: 'en'
    },
    {
        title: 'X-R-A-Y Literary Magazine',
        type: 'press',
        year: '2019',
        filename: 'xray',
        url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/',
        descriptionPl: 'Flash fiction „Spores”',
        descriptionEn: 'Flash fiction “Spores”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Transformation Anthology',
        type: 'collection',
        year: '2019',
        filename: 'theselkie',
        url: 'http://theselkie.co.uk/anthology/',
        descriptionPl: 'Flash fiction „Airborne” w antologii opublikowanej przez magazyn The Selkie',
        descriptionEn: 'Flash fiction “Airborne” in an anthology published by The Selkie',
        modal: false,
        language: 'en'
    },
    {
        title: 'SHARKPACK Annual (2018)',
        type: 'press',
        year: '2018',
        filename: 'sharkpack',
        url: 'http://fathombooks.org/html/issueone.html',
        descriptionPl: '„8-bit Dreams” (fragment minipowieści „Nocturine”)',
        descriptionEn: '“8-bit Dreams” (Fragment of the novella “Nocturine”)',
        modal: false,
        language: 'en'
    },
    {
        title: 'Stoner Polski (1)',
        type: 'press',
        year: '2018',
        filename: 'stoner',
        url: 'http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html',
        descriptionPl: 'Flash fiction „Celuloza” (przekład tekstu „Cellulose”)',
        descriptionEn: 'Flash fiction “Celuloza” (translation of “Cellulose”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Underwood (September 2018)',
        type: 'press',
        year: '2018',
        filename: 'underwood',
        url: 'https://underwoodpress.com/inaugural-issue/september-2018/photosensitivity-by-lukasz-drobnik/',
        descriptionPl: 'Opowiadanie „Photosensitivity” (przekład tekstu „Światłoczułość”)',
        descriptionEn: 'Short story “Photosensitivity” (translation of “Światłoczułość”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Mojave Heart Review (September 2018)',
        type: 'press',
        year: '2018',
        filename: 'mojave',
        url: 'https://mojaveheart.com/cellulose/',
        descriptionPl: 'Flash fiction „Cellulose”',
        descriptionEn: 'Flash fiction “Cellulose”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Afront 2(5)/2018',
        type: 'press',
        year: '2018',
        filename: 'afront',
        url: 'https://afront.org.pl/',
        descriptionPl: 'Opowiadanie „Skomplikowane przeczucie” i flash fiction „Waleń” (przekład tekstu „Cetacean”)',
        descriptionEn: 'Short story “Skomplikowane przeczucie” and flash fiction “Waleń” (translation of “Cetacean”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'wydawnictwo j',
        type: 'press',
        year: '2018',
        filename: 'wydawnictwoj',
        url: 'http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/',
        descriptionPl: 'Fragment powieści „Vostok”',
        descriptionEn: 'Fragment of the novel “Vostok”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Magazyn Wizje (2/2018)',
        type: 'press',
        year: '2018',
        filename: 'wizje',
        url: 'http://magazynwizje.pl/lukasz-drobnik-swiatloczulosc/',
        descriptionPl: 'Opowiadanie „Światłoczułość”',
        descriptionEn: 'Short story “Światłoczułość”',
        modal: false,
        language: 'pl'

    },
    {
        title: 'Quarterly West (94)',
        type: 'press',
        year: '2018',
        filename: 'qw',
        url: 'https://www.quarterlywest.com/issue-94/cetacean',
        descriptionPl: 'Flash fiction „Cetacean”',
        descriptionEn: 'Flash fiction “Cetacean”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Obszary Przepisane (5)',
        type: 'press',
        year: '2018',
        filename: 'op',
        url: 'http://obszaryprzepisane.com/wp-content/uploads/2018/04/05op-1.pdf',
        descriptionPl: 'Flash fiction „Żywioły” (przekład tekstu „Elements”)',
        descriptionEn: 'Flash fiction “Żywioły” (translation of “Elements”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'The Chaffin Journal (2018)',
        type: 'press',
        year: '2018',
        filename: 'chaffin',
        url: 'https://english.eku.edu/chaffin-journal',
        descriptionPl: 'Flash fiction „Elements”',
        descriptionEn: 'Flash fiction “Elements”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Inter– (2(16)/2018)',
        type: 'press',
        year: '2018',
        filename: 'inter',
        url: 'https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/',
        descriptionPl: 'Flash fiction „Dewon” (przekład tekstu „Devonian”)',
        descriptionEn: 'Flash fiction “Dewon” (translation of “Devonian”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Helikopter (3/2018)',
        type: 'press',
        year: '2018',
        filename: 'helikopter',
        url: 'https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/',
        descriptionPl: 'Flash fiction „Drony” (przekład tekstu „Drones”)',
        descriptionEn: 'Flash fiction “Drony” (translation of “Drones”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Cartridge Lit (The Foul Play Temple Issue)',
        type: 'press',
        year: '2018',
        filename: 'cartridgelit',
        url: 'https://cartridgelit.com/2018/02/14/montezumas-revenge/',
        descriptionPl: 'Opowiadanie „montezuma’s revenge”',
        descriptionEn: 'Short story “montezuma’s revenge”',
        modal: false,
        language: 'en'
    },

    {
        title: 'The Write Launch (February 2018)',
        type: 'press',
        year: '2018',
        filename: 'thewritelaunch',
        url: 'https://thewritelaunch.com/2018/01/heart-mighty-power/',
        descriptionPl: '„Heart Mighty Power”, fragment minipowieści „Nocturine”',
        descriptionEn: '“Heart Mighty Power”, Fragment of the novella “Nocturine”',
        modal: false,
        language: 'en'
    },
    {
        title: 'The Gravity of the Thing (Winter 2018)',
        type: 'press',
        year: '2018',
        filename: 'thegravityofthething',
        url: 'http://thegravityofthething.com/devonian-lukasz-drobnik/',
        descriptionPl: 'Flash fiction „Devonian”',
        descriptionEn: 'Flash fiction “Devonian”',
        modal: false,
        language: 'en'
    },
    {
        title: 'Bare Fiction (10)',
        type: 'press',
        year: '2017',
        filename: 'barefiction10',
        url: 'http://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/',
        descriptionPl: 'Flash fiction „Drones”',
        descriptionEn: 'Flash fiction “Drones”',
        modal: false,
        language: 'en'
    },
    {
        title: '2017. Antologia współczesnych polskich opowiadań',
        type: 'collection',
        year: '2017',
        filename: 'antologia2017',
        url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',
        descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',
        descriptionEn: 'A collection featuring my piece “Jeśli zapłonę” (Forma)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Fabularie (10)',
        type: 'press',
        year: '2016',
        filename: 'fabularie',
        url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',
        descriptionPl: 'Flash fiction „Ćmy” (przekład tekstu „Moths”)',
        descriptionEn: 'Flash fiction “Ćmy” (translation of “Moths”)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Wyspa (4 - Suplement)',
        type: 'press',
        year: '2015',
        filename: 'wyspa',
        url: 'http://kwartalnikwyspa.pl/category/numer-2015suplement/',
        descriptionPl: 'Opowiadanie „Wszystkożerność”',
        descriptionEn: 'Short story “Wszystkożerność”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Lighthouse (10)',
        type: 'press',
        year: '2015',
        filename: 'lighthouse',
        url: 'http://www.gatehousepress.com/lighthouse/',
        descriptionPl: 'Flash fiction „Moths”',
        descriptionEn: 'Flash fiction “Moths”',
        modal: false,
        language: 'en'
    },
    {
        title: '2014. Antologia współczesnych polskich opowiadań',
        type: 'collection',
        year: '2014',
        filename: 'antologia2014',
        url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',
        descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',
        descriptionEn: 'A collection featuring my piece “Biegnący człowiek” (Forma)',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Lampa (3/2012)',
        type: 'press',
        year: '2012',
        filename: 'lampa2012',
        url: 'http://lampa.art.pl/',
        descriptionPl: 'Początkowe rozdziały powieści „Vostok”',
        descriptionEn: 'Initial chapters of the novel “Vostok”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Dodatek Literacki (9)',
        type: 'press',
        year: '2011',
        filename: 'dodatek',
        url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',
        descriptionPl: 'Fragment minipowieści „Nocturine”',
        descriptionEn: 'Fragment of the novella “Nocturine”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Nocturine. Cunninghamella',
        type: 'book',
        year: '2011',
        filename: 'noc-cun',
        url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',
        descriptionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',
        descriptionEn: 'A volume of two novellas published by Forma publishing house',
        modal: true,
        language: 'pl'
    },
    {
        title: 'Dwutygodnik.com (57)',
        type: 'press',
        year: '2011',
        filename: 'dwutygodnik',
        url: 'http://www.dwutygodnik.com/wydanie/2011/57',
        descriptionPl: 'Fragment minipowieści „Nocturine”',
        descriptionEn: 'Fragment of the novella “Nocturine”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Latarnia Morska (1–2 (11–12) 2009 / 1 (13) 2010)',
        type: 'press',
        year: '2009/2010',
        filename: 'latarniamorska',
        url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',
        descriptionPl: 'Fragment minipowieści „Nocturine”',
        descriptionEn: 'Fragment of the novella “Nocturine”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Pro Arte online 3 (61) 2006',
        type: 'press',
        year: '2006',
        filename: 'proarte',
        url: 'http://proarte.net.pl',
        descriptionPl: 'Opowiadanie „ośmiobitowe sny”',
        descriptionEn: 'Short story “ośmiobitowe sny”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Rita Baum (10)',
        type: 'press',
        year: '2006',
        filename: 'ritabaum',
        url: 'https://issuu.com/ritabaumwroclaw/docs/10',
        descriptionPl: 'Opowiadanie „Rozbieranie do snu”',
        descriptionEn: 'Short story “Rozbieranie do snu”',
        modal: false,
        language: 'pl'
    },
    {
        title: 'Lampa (6/2005)',
        type: 'press',
        year: '2005',
        filename: 'lampa2005',
        url: 'http://lampa.art.pl/',
        descriptionPl: 'Opowiadanie „Astroskopia”',
        descriptionEn: 'Short story “Astroskopia”',
        modal: false,
        language: 'pl'
    }
];

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
