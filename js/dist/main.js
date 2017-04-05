/*
** Header.js
** @description: this is an example of a module or component file
*/
define("components/header", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Header = (function () {
        function Header() {
        }
        Header.prototype.someMethod = function () {
            this.prop = "foo";
            return this.prop;
        };
        return Header;
    }());
    exports.Header = Header;
});
define("main", ["require", "exports", "jquery", "components/header"], function (require, exports, $, header_1) {
    "use strict";
    exports.__esModule = true;
    $(document).ready(function () {
        var header = new header_1.Header();
        header.someMethod();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4qKiBIZWFkZXIuanNcbioqIEBkZXNjcmlwdGlvbjogdGhpcyBpcyBhbiBleGFtcGxlIG9mIGEgbW9kdWxlIG9yIGNvbXBvbmVudCBmaWxlXG4qL1xuZGVmaW5lKFwiY29tcG9uZW50cy9oZWFkZXJcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgICB2YXIgSGVhZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIEhlYWRlci5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcCA9IFwiZm9vXCI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSGVhZGVyO1xuICAgIH0oKSk7XG4gICAgZXhwb3J0cy5IZWFkZXIgPSBIZWFkZXI7XG59KTtcbmRlZmluZShcIm1haW5cIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJqcXVlcnlcIiwgXCJjb21wb25lbnRzL2hlYWRlclwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsICQsIGhlYWRlcl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSBuZXcgaGVhZGVyXzEuSGVhZGVyKCk7XG4gICAgICAgIGhlYWRlci5zb21lTWV0aG9kKCk7XG4gICAgfSk7XG59KTtcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
