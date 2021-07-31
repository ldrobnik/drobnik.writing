import * as actionTypes from './constants';

//Sets the current language
export const setLanguage = (language) => {
    return {
        type: actionTypes.SET_LANGUAGE,
        language
    }
};

//Sets the colour theme
export const setTheme = (theme) => {
    return {
        type: actionTypes.SET_THEME,
        theme
    }
};

//Toggles the black-and-white mode
export const setBWMode = (blackAndWhite) => {
    return {
        type: actionTypes.SET_BW_MODE,
        blackAndWhite
    }
};

//Sets the currently displayed text
export const setCurrentText = (currentText) => {
    return {
        type: actionTypes.SET_CURRENT_TEXT,
        currentText
    }
};

//Toggles NavBar visibility
export const setNavbarVisibility = (navbarVisible) => {
    return {
        type: actionTypes.SET_NAVBAR_VISIBILITY,
        navbarVisible
    }
};

//Toggles the visibility of the data storage notice
export const setDataNoticeVisible = (dataNoticeVisible) => {
    return {
        type: actionTypes.SET_DATA_NOTICE_VISIBLE,
        dataNoticeVisible
    }
};

//Specifies whether the date storage notice was acknowledged by the user
export const setDataNoticeAccepted = (dataNoticeAccepted) => {
    return {
        type: actionTypes.SET_DATA_NOTICE_ACCEPTED,
        dataNoticeAccepted
    }
};

//Specifies which page is currently displayed
export const SetPage = (pageDisplayed) => {
  return {
      type: actionTypes.SET_PAGE,
      pageDisplayed
  }
};

//Specifies whether the main page is currently displayed
export const setMainPage = (mainPageDisplayed) => {
    return {
        type: actionTypes.SET_MAIN_PAGE,
        mainPageDisplayed
    }
};

//Specifies whether the Book page is currently displayed
export const setBookPage = (bookPageDisplayed) => {
    return {
        type: actionTypes.SET_BOOK_PAGE,
        bookPageDisplayed
    }
};

//Specifies whether the Book page is currently displayed
export const setBlogPage = (blogPageDisplayed) => {
    return {
        type: actionTypes.SET_BOOK_PAGE,
        blogPageDisplayed
    }
};

//Specifies whether the page reloading animation should be played
export const setPageReload = (pageReload) => {
    return {
        type: actionTypes.SET_PAGE_RELOAD,
        pageReload
    }
};

//Specifies whether the spinner or the content should be shown
export const setPageLoaded = (pageLoaded) => {
    return {
        type: actionTypes.SET_PAGE_LOADED,
        pageLoaded
    }
};