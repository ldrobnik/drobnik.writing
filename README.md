# Łukasz Drobnik’s Author Website

A new version of my author website I’m building with **React**. It is practically finished — I’m adding final touches and proofreading the copy. Here is the [live demo](https://drobnik-writing-new.netlify.com/). You can also take a look at [the previous version](https://github.com/ldrobnik/drobnik.co) made with Angular.

## Main features:
* a fully **bilingual** site – language change with a single click
* a **showcase of literary works** dynamically loaded from a constant
* a dynamically rendered **interactive list of publications**
* **coloured** themes displayed depending on the current page
* an optional **black-and-white mode** for better readability

## Technologies used:

* **React.js**
* **React-Router**
* **Redux**
* **Styled Components**
* **Pose**
* **FontAwesome**
* **React Waypoint**
* **react-anchor-link-smooth-scroll**

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
