(function (e) {

    e.matches || (e.matches = e.matchesSelector || function (selector) {
        var matches = document.querySelectorAll(selector), th = this;
        return Array.prototype.some.call(matches, function (e) {
            return e === th;
        });
    });

})(Element.prototype);

(function (e) {
    e.closest = e.closest || function (css) {
        var node = this;

        while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
        }
        return null;
    }
})(Element.prototype);

var lang = document.querySelector('[data-lang-component]');

lang.onclick = function langChange(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    var langObj = event.target.closest('[data-lang]').dataset;
    if (langObj.lang) {
        switch (langObj.lang) {
            case 'LAT':
                document.body.classList.remove('rus');
                return;
            case 'RUS':
                document.body.classList.add('rus');
                return;
        }

    }
};

var menuBarClassList = document.getElementById('menuBar').classList;
window.onscroll = function () {
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    if (scrollBarPosition < 10) {
        menuBarClassList.remove('menu-highlight')
    } else {
        if (scrollBarPosition > 10) {
            menuBarClassList.add('menu-highlight')
        }
    }
};