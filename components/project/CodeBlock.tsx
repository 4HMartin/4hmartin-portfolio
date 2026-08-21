'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ code, language = 'typescript' }: { code: string; language?: string }) {
    return (
        <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                padding: '1rem'
            }}
            showLineNumbers
        >
            {code}
        </SyntaxHighlighter>
    );
}