import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        resume: {
          css: {
            '--tw-prose-body': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-headings': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-links': '#3b82f6',
            '--tw-prose-bold': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-counters': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-bullets': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-hr': 'hsl(214.3, 31.8%, 91.4%)',
            '--tw-prose-quotes': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-quote-borders': 'hsl(214.3, 31.8%, 91.4%)',
            '--tw-prose-captions': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-code': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-pre-code': 'hsl(222.2, 84%, 4.9%)',
            '--tw-prose-pre-bg': 'hsl(214.3, 31.8%, 91.4%)',
            '--tw-prose-th-borders': 'hsl(214.3, 31.8%, 91.4%)',
            '--tw-prose-td-borders': 'hsl(214.3, 31.8%, 91.4%)',
            
            h1: {
              fontSize: '3.5rem',
              lineHeight: '1.1',
              marginTop: '2em',
              marginBottom: '0.5em',
              fontWeight: '900',
              letterSpacing: '-0.025em',
              color: 'hsl(222.2, 84%, 4.9%)',
            },
            h2: {
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginTop: '1.8em',
              marginBottom: '0.6em',
              fontWeight: '800',
              letterSpacing: '-0.015em',
              color: 'hsl(222.2, 84%, 4.9%)',
            },
            h3: {
              fontSize: '2rem',
              lineHeight: '1.3',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              fontWeight: '700',
              color: 'hsl(222.2, 84%, 4.9%)',
            },
            h4: {
              fontSize: '1.75rem',
              lineHeight: '1.35',
              marginTop: '1.3em',
              marginBottom: '0.4em',
              fontWeight: '600',
              color: 'hsl(222.2, 84%, 4.9%)',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              letterSpacing: '0.015em',
              color: 'hsl(222.2, 84%, 4.9%)',
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '2em', // 增加縮排
              listStyleType: 'disc', // 確保是圓點
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              paddingLeft: '2em',
              listStyleType: 'decimal',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              fontSize: '1.15rem',
              lineHeight: '1.7',
              paddingLeft: '0.25em', // 讓文字與圓點有距離
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: 'hsl(214.3, 31.8%, 91.4%)',
              paddingLeft: '1.5rem',
              marginLeft: '0',
              marginRight: '0',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              color: '#3b82f6',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#2563eb',
              },
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              margin: '2rem auto',
              maxHeight: '500px',
              objectFit: 'contain',
            },
            code: {
              fontSize: '0.9em',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              backgroundColor: 'hsl(214.3, 31.8%, 91.4%)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: 'hsl(214.3, 31.8%, 91.4%)',
              borderRadius: '0.5rem',
              padding: '1.25rem',
              overflowX: 'auto',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '2rem 0',
            },
            'th, td': {
              padding: '0.75rem 1rem',
              border: '1px solid hsl(214.3, 31.8%, 91.4%)',
            },
            hr: {
              marginTop: '2.5em',
              marginBottom: '2.5em',
              borderWidth: '1px',
              borderColor: 'hsl(214.3, 31.8%, 91.4%)',
            },
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config 