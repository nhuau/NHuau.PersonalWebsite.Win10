(function () {
    var validParameterNames = ["httpStatus", "failureName", "failureUrl"];

    function parseQueryParameters() {
        var query = window.location.search.substring(1);
        return query.split("&").reduce(function (queryParameters, rawPair) {
            var pair = rawPair.split("=").map(decodeURIComponent);
            queryParameters[pair[0]] = pair[1];
            return queryParameters;
        }, {});
    }

    function initialize() {
        var queryParameters = parseQueryParameters();
        validParameterNames.forEach(function (parameterName) {
            var parameterValue = queryParameters[parameterName] || "N/A";
            var elt = document.getElementById(parameterName + "Value");
            if (typeof (elt) != 'undefined' && elt != null) {
                elt.textContent = parameterValue;
            }
        });
    }

    function processResources() {
        WinJS.Resources.processAll();
    }

    document.addEventListener("DOMContentLoaded", processResources, false);
    document.addEventListener("DOMContentLoaded", initialize, false);


})();
