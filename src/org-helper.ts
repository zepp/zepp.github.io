import './article.css';
import 'highlight.js/styles/default.min.css';
import './org-embedded.js';

import hljs from 'highlight.js/lib/core';

import java from 'highlight.js/lib/languages/java';
import kotlin from 'highlight.js/lib/languages/kotlin';
import gradle from 'highlight.js/lib/languages/gradle';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import ini from 'highlight.js/lib/languages/ini';

hljs.registerLanguage('java', java);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('gradle', gradle);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('ini', ini);

hljs.configure({ languageDetectRe: /\bsrc?-([\w-]+)\b/ });

function handleAnchorEvent(event: MouseEvent) {
    const a = event.target as HTMLAnchorElement;

    navigator.clipboard.writeText(a.href);
    console.debug(`copied: ${a.href}`)
}

document.addEventListener('DOMContentLoaded', event => {
    document.querySelectorAll<HTMLPreElement>('pre.src, pre.example')
        .forEach(element => hljs.highlightElement(element));

    document.querySelectorAll<HTMLAnchorElement>('h2 a')
        .forEach(element => element.addEventListener('click', handleAnchorEvent));
});
