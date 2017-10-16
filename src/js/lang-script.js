
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

lang.onclick = function langChange(e) {
    e.preventDefault();
    var langObj = e.target.closest('[data-lang]').dataset;
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