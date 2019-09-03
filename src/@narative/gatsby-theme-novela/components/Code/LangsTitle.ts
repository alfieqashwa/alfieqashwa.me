import { css } from '@emotion/core'
import styled from '@emotion/styled'

const LanguageHighlight = css`
  border-radius: 0 0 4px 4px;
  font-weight: 500;
  /* font-size: 0.75rem; */
  font-size: 0.8em;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace;
  letter-spacing: 0.1em;
  line-height: 1.3;
  padding: 0.2rem 0.4rem;
  position: absolute;
  left: 32px;
  text-align: left;
  text-transform: uppercase;
  top: 0;
`;

export const LangsTitle = styled.div`
  /* overflow: auto; */
  /* margin-right: -2.3125rem; */
  /* margin-left: -2.3125rem; */
  /* padding-right: 1em; */
  /*padding-left: 0.75em; */
  /* === PLUGIN-CODE === */
  pre[class*='language-js']::before {
    content: 'js';
    color: hsla(270, 17.119554496%, 0%, 0.92);
    background: #f7df1e;
    ${LanguageHighlight};
  }
  pre[class*='language-javascript']::before {
    content: 'js';
    color: hsla(270, 17.119554496%, 0%, 0.92);
    background: #f7df1e;
    ${LanguageHighlight};
  }
  pre[class*='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
    ${LanguageHighlight};
  }
  pre[class*='language-graphql']::before {
    content: 'GraphQL';
    background: #e10098;
    color: #ffffff;
    ${LanguageHighlight};
  }
  pre[class*='language-html']::before {
    content: 'html';
    background: #005a9c;
    color: #ffffff;
    ${LanguageHighlight};
  }
  pre[class*='language-css']::before {
    content: 'css';
    background: #ff9800;
    color: hsla(270, 17.119554496%, 0%, 0.92);
    ${LanguageHighlight};
  }
  pre[class*='language-shell']::before {
    content: 'shell';
    ${LanguageHighlight};
  }
  pre[class*='language-sh']::before {
    content: 'sh';
    background: rgb(34, 102, 61);
    color: white;
    ${LanguageHighlight};
  }
  pre[class*='language-bash']::before {
    content: 'bash';
    background: rgb(34, 102, 61);
    color: white;
    ${LanguageHighlight};
  }
  pre[class*='language-yaml']::before {
    content: 'yaml';
    background: #ffa8df;
    ${LanguageHighlight};
  }
  pre[class*='language-markdown']::before {
    content: 'md';
    ${LanguageHighlight};
  }
  pre[class*='language-json']::before {
    content: 'json';
    background: linen;
    ${LanguageHighlight};
  }
  pre[class*='language-json5']::before {
    content: 'json';
    background: linen;
    ${LanguageHighlight};
  }
  pre[class*='language-diff']::before {
    content: 'diff';
    background: #e6ffed;
    ${LanguageHighlight};
  }
  pre[class*='language-text']::before {
    content: 'text';
    background: #ffffff;
    ${LanguageHighlight};
  }
  pre[class*='language-flow']::before {
    content: 'flow';
    background: #e8bd36;
    ${LanguageHighlight};
  }
  pre[class*='language-python']::before {
    content: 'py';
    background: #306998;
    ${LanguageHighlight};
  }
  pre[class*='language-py']::before {
    content: 'py';
    background: #306998;
    ${LanguageHighlight};
  }
  pre[class*='language-golang']::before {
    content: 'go';
    background: #41c1f5;
    ${LanguageHighlight};
  }
  pre[class*='language-go']::before {
    content: 'go';
    background: #41c1f5;
    ${LanguageHighlight};
  }
`;

export const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`;
