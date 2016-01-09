angular.module('app.directives', [])
.directive("loadingIndicator", function (loadingCounts, $timeout) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            scope.$on("loading-started", function (e) {
                loadingCounts.enable_count++;
                console.log("displaying indicator " + loadingCounts.enable_count);
                //only show if longer than one sencond
                 if (loadingCounts.enable_count > loadingCounts.disable_count) {
                     element.css({ "display": "" });
                     console.log(element);
                 }
            });
            scope.$on("loading-complete", function (e) {
                loadingCounts.disable_count++;
                console.log("hiding indicator " + loadingCounts.disable_count);
                if (loadingCounts.enable_count == loadingCounts.disable_count) {
                    element.css({ "display": "none" });
                    console.log(element);
                }
            });
        }
    };
});/**
 * Created by hamdiceylan on 7.01.2016.
 */
