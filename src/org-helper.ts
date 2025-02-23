import './article.scss';
import 'highlight.js/styles/default.min.css';

import hljs from 'highlight.js/lib/core';

import java from 'highlight.js/lib/languages/java';
import kotlin from 'highlight.js/lib/languages/kotlin';
import javascript from 'highlight.js/lib/languages/javascript';
import lisp from 'highlight.js/lib/languages/lisp';
import gradle from 'highlight.js/lib/languages/gradle';
import bash from 'highlight.js/lib/languages/bash';
import powershell from 'highlight.js/lib/languages/powershell';
import json from 'highlight.js/lib/languages/json';
import ini from 'highlight.js/lib/languages/ini';

hljs.registerLanguage('java', java);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('lisp', lisp);
hljs.registerLanguage('gradle', gradle);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('powershell', powershell);
hljs.registerLanguage('json', json);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('conf', ini);

hljs.configure({
    languageDetectRe: /\bsrc-([\w-]+)\b/,
    cssSelector: 'pre.src'
});

function handleAnchorEvent(event: MouseEvent) {
    const a = event.target as HTMLAnchorElement;

    navigator.clipboard.writeText(a.href);
}

document.addEventListener('DOMContentLoaded', _ => {
    hljs.highlightAll();

    document.querySelectorAll<HTMLAnchorElement>('h2 a, h3 a')
        .forEach(element => element.addEventListener('click', handleAnchorEvent));
});
