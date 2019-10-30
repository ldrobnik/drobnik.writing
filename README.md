# Łukasz Drobnik’s Author Website

A new version of my [author website](https://www.drobnik.co/) built with **React**. You can also take a look at [the previous version](https://github.com/ldrobnik/drobnik.co) made with Angular.

## Main features:
* a fully **bilingual** site — language can be changed with a single click;
* a **showcase of literary works** dynamically loaded from a constant;
* a dynamically rendered, easy to update  **interactive list of publications**;
* **coloured** themes displayed depending on the current page;
* an optional **black-and-white mode** for better readability.

## Technicalities:

* a single-page app created with **React.js**;
* routes managed with **React-Router**;
* app state controlled with **Redux**;
* neat styles thanks to **Styled Components**;
* **Pose** to add extra oomph to animations;
* navigator bar buttons making use of **FontAwesome** icons;
* **React Waypoint** to display elements depending on the current scroll position;
* smooth scrolling to anchors by means of **react-anchor-link-smooth-scroll**.

## Overview

The app comprises three main components:

* **About.js** — the home page containing basic information about the author (i.e. yours truly);
* **Text.js** — a component displaying pieces written by said author;
* **QuickLinks.js** — a list of links for Instagram users.

They are all wrapped in a higher-order component **Layout.js** which contains a navigation bar.

### Basic project structure
       +---------+
       | App.js  |
       +----+----+
            |
            |
       +----+----+
       | Home.js |
       +----+----+
            |
            |
       +---------------Layout.js-----+
       |    |                        |
       |    |  +----------+          |
       |    +--+ About.js |          |
       |    |  +----------+          |
       |    |                        |
       |    |  +---------+           |
       |    +--+ Text.js |           |
       |    |  +---------+           |
       |    |                        |
       |    |  +---------------+     |
       |    +--+ QuickLinks.js |     |
       |    |  +---------------+     |
       |    |                        |
       +-----------------------------+
            |
            |  +---------------+
            +--+ DataNotice.js |
            |  +---------------+
            |
            |  +------------+
            +--+ Spinner.js |
               +------------+

       
## The Layout.js component

A higher-order component **Layout.js** that wraps around the three major components. It contains a navigation bar (**NavBar.js**).

The navigation bar’s minimalistic icon-based design contains the following elements:

* the logo which also acts as a home button;
* the actual home button (pointing to **App.js**);
* a button to change the language from English to Polish and vice versa;
* a button to toggle the black-and-white mode;
* a button displaying one of literary pieces available in the Reading Room.


### Layout component structure
          +-----------+
          | Layout.js |
          +----+------+
               |
               |   +-----------+
               +---+ NavBar.js |
                   +----+------+
                        |
                        |  +---------+
                        +--+ Logo.js |
                           +---------+



## About component structure
       +----------+
       | About.js |
       +----+-----+
            |
            |   +----------+
            +---+ Intro.js |
            |   +----+-----+
            |        |
            |        |  +-----------------+
            |        +--+ CentredPhoto.js |
            |        |  +-----------------+
            |        |
            |        |  +-------------------+
            |        +--+ SectionHeading.js |
            |        |  +-------------------+
            |        |
            |        |  +----------------+
            |        +--+ SocialLinks.js |
            |        |  +----------------+
            |        |
            |        |  +------------------+
            |        +--+ CentredButton.js |
            |        |  +------------------+
            |        |
            |        |  +-----------------+
            |        +--+ SectionLinks.js |
            |        |  +-----------------+
            |        |
            |        |  +---------------------+
            |        +--+ SectionSeparator.js |
            |           +---------------------+
            |
            |
            |   +--------------+
            +---+ Nocturine.js |
            |   +----+---------+
            |        |
            |        |  +-------------------+
            |        +--+ SectionHeading.js |
            |        |  +-------------------+
            |        |
            |        |  +--------------+
            |        +--+ QuoteList.js |
            |        |  +----+---------+
            |        |       |
            |        |       |  +----------+
            |        |       +--+ Quote.js |
            |        |          +----------+
            |        |
            |        |  +------------------+
            |        +--+ CentredButton.js |
            |        |  +------------------+
            |        |
            |        |  +-----------------+
            |        +--+ SectionLinks.js |
            |        |  +-----------------+
            |        |
            |        |  +---------------------+
            |        +--+ SectionSeparator.js |
            |           +---------------------+
            |
            |
            |   +---------+
            +---+ Pubs.js |
            |   +----+----+
            |        |
            |        |  +-------------------+
            |        +--+ SectionHeading.js |
            |        |  +-------------------+
            |        |
            |        |  +-----------------+
            |        +--+ ToggleSwitch.js |
            |        |  +-----------------+
            |        |
            |        |  +------------+
            |        +--+ PubList.js |
            |        |  +----+-------+
            |        |       |
            |        |       |  +------------+
            |        |       +--+ PubTile.js |
            |        |          +------------+
            |        |
            |        |  +-----------------+
            |        +--+ SectionLinks.js |
            |        |  +-----------------+
            |        |
            |        |  +---------------------+
            |        +--+ SectionSeparator.js |
            |           +---------------------+
            |
            |
            |   +---------+
            +---+ Read.js |
            |   +----+----+
            |        |
            |        |  +-------------------+
            |        +--+ SectionHeading.js |
            |        |  +-------------------+
            |        |
            |        |  +--------------------+
            |        +--+ ReadListElement.js |
            |        |  +--------------------+
            |        |
            |        |  +-----------------+
            |        +--+ SectionLinks.js |
            |        |  +-----------------+
            |        |
            |        |  +---------------------+
            |        +--+ SectionSeparator.js |
            |           +---------------------+
            |
            |
            |   +------------------+
            +---+ CopyrightNote.js |
                +------------------+
           

## Text component structure
        +---------+
        | Text.js |
        +----+----+
             |
             |   +------------+
             +---+ Credits.js |
             |   +------------+
             |
             |   +---------------------+
             +---+ DescriptionPanel.js |
             |   +---------------------+
             |
             |   +-----------------+
             +---+ NextTextLink.js |
             |   +-----------------+
             |
             |  +---------------------+
             +--+ SectionSeparator.js |
             |  +---------------------+
             |
             |   +------------------+
             +---+ CopyrightNote.js |
                 +------------------+

       
## The QuickLinks component

A simple list of quick links for Instagram users I made because I couldn’t afford [LikeShop](https://likeshop.me).

### QuickLinks component structure
         +---------------+
         | QuickLinks.js |
         +----+----------+
              |
              |   +--------------+
              +---+ QuickLink.js |
                  +--------------+

