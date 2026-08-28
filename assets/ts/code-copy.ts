import * as params from '@params';

export function setupCodeCopy() {
    const highlights = document.querySelectorAll('.article-content div.highlight');
    const copyText = params.codeblock.copy || '复制';
    const copiedText = params.codeblock.copied || '已复制！';

    if (!navigator.clipboard) {
        console.warn('Clipboard API not supported, copy button will not work.');
        return;
    }

    highlights.forEach(highlight => {
        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.textContent = copyText;
        copyButton.classList.add('copyCodeButton');
        highlight.appendChild(copyButton);

        const codeBlock = highlight.querySelector('code[data-lang]');
        if (!codeBlock) return;

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.textContent || '')
                .then(() => {
                    copyButton.textContent = copiedText;
                    setTimeout(() => {
                        copyButton.textContent = copyText;
                    }, 1000);
                })
                .catch(error => {
                    console.error('Copy failed', error);
                });
        });
    });
}
