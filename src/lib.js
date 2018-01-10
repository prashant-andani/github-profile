'use strict'
/**
 * Add github contribution calendar to the dom, provided github username
 * @param {String} userName Github Username
 * @param {Object} options configurable options
 */
const GithubProfile = (function() {

  let getCalendar = (userName, options) => {
    options = options || {};
    let url = `https://github.com/users/${userName}/contributions/`;

    // We need a proxy for CORS
    // Thanks, @izuzak (https://github.com/izuzak/urlreq)
    options.proxy = options.proxy || function (url) {
      return "https://urlreq.appspot.com/req?method=GET&url=" + url;
    };
    
    fetch(options.proxy(url))
    .then(function(response) { return response.text() })
    .then(function(data) { 
      document.getElementById('github-calendar').innerHTML = data;
      return data;
    })
  }

  return {
    getCalendar: getCalendar
  }
})();