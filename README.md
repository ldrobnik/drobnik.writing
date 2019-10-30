# Łukasz Drobnik’s Author Website

A new version of my [author website](https://www.drobnik.co/) built with **React**. You can also take a look at [the previous version](https://github.com/ldrobnik/drobnik.co) made with Angular.

## Main features:
* a fully **bilingual** site – language can be changed with a single click;
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

## Basic project structure
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

       
## Layout component structure
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

       
## QuickLinks component structure
         +---------------+
         | QuickLinks.js |
         +----+----------+
              |
              |   +--------------+
              +---+ QuickLink.js |
                  +--------------+

