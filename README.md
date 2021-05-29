# Łukasz Drobnik’s Author Website

A new version of my [author website](https://drobnik.co/) built with **React**. You can also take a look at the Angular-based [previous version](https://github.com/ldrobnik/drobnik-writing-ver-1).

* [Main features](#main-features)
* [Technicalities](#technicalities)
* [Overview](#overview)
* [The Layout.js component](#the-layoutjs-component)
* [The About.js component](#the-aboutjs-component)
* [The Text.js component](#the-textjs-component)
* [The QuickLinks.js component](#the-quicklinksjs-component)


## Main features
* a fully **bilingual** site — the language can be changed with a single click;
* a **showcase of literary works** dynamically loaded from constants;
* a dynamically rendered, easy-to-update  **interactive list of publications**;
* **coloured** themes displayed depending on the current page;
* an optional **black-and-white mode** for better readability.

## Technicalities

* a single-page app created with **React.js**;
* routes managed with **React-Router**;
* app state controlled with **Redux**;
* neat styles thanks to **Styled Components**;
* **Pose** to add extra oomph to animations;
* navigation bar buttons making use of **FontAwesome** icons;
* **React Waypoint** to display elements depending on the current scroll position;
* smooth scrolling to anchors by means of **react-anchor-link-smooth-scroll**.

## Overview

The app comprises three main components:

* [**About.js**](#the-aboutjs-component) — the home page containing basic information about the author (i.e. yours truly);
* [**Text.js**](#the-textjs-component) — a component displaying pieces written by said author;
* [**QuickLinks.js**](#the-quicklinksjs-component) — a list of links for Instagram users.

They are all wrapped in a higher-order component [**Layout.js**](#the-layoutjs-component) which contains a navigation bar.

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

A higher-order component that wraps around the three major components. It contains a navigation bar (**NavBar.js**).

The navigation bar’s minimalistic icon-based design contains the following elements:

* a logo which also acts as a home button;
* the actual home button (pointing to **App.js**);
* a button to change the language from English to Polish and vice versa;
* a button to toggle the black-and-white mode;
* a button displaying one of several literary pieces available in the Reading Room ([**Text.js**](#the-textjs-component)).


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



## The About.js component

The home page of the website containing the following sections:

* basic information about the author (**Intro.js**);
* a teaser of the upcoming books (**Book.js**);
* an interactive list of publications — they are displayed as tiles and can be filtered by language (**Pubs.js**);
* a list of links to several literary works (**Read.js**).

### About component structure
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
            +---+ Book.js |
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
           

## The Text.js component

It hosts the Reading Room where the user can read some of my works. Information about the pieces as well as the pieces themselves are held in a number of easy-to-update constants.

### Text component structure
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

       
## The QuickLinks.js component

A simple list of links for Instagram users I made because I couldn’t afford [LikeShop](https://likeshop.me).

### QuickLinks component structure
         +---------------+
         | QuickLinks.js |
         +----+----------+
              |
              |   +--------------+
              +---+ QuickLink.js |
                  +--------------+

