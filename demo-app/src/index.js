import { customElement, LitElement, html, css } from 'lit-element';
import '@app/lit-docs/index';
import './intro-page.js';
import './lit-docs-ui-usage/index.js';
import './lit-docs-ui-usage/sub-menus.js';
import './lit-docs-style-usage.js';
import './code-block-usage.js';
import './demo-component/index.js';


@customElement('lit-docs-documentation')
export class LitDocsDocumentation extends LitElement {

    render() {
        return html`
            <lit-docs-ui
                .docsTitle=${'LitDocs'}
                .pages=${this.pages}
            ></lit-docs-ui>
        `;
    }

    get pages() {
        return [
            {
                title: 'Introduction',
                path: 'intro-page',
                template: html`<intro-page></intro-page>`
            },
            {
                title: 'LitDocs UI',
                path: 'lit-docs-ui',
                template: html`<lit-docs-ui-usage></lit-docs-ui-usage>`,
                submenu: [
                    {
                        title: 'Submenus',
                        path: 'sub-menus',
                        template: html`<sub-menus></sub-menus>`
                    }
                ]
            },
            {
                title: 'LitDocsStyle',
                path: 'lit-docs-style',
                template: html`<lit-docs-style-usage></lit-docs-style-usage>`
            },
            {
                title: 'Code block',
                path: 'code-block',
                template: html`<code-block-usage></code-block-usage>`
            },
            {
                title: 'Demo component',
                path: 'demo-component',
                template: html`<demo-component></demo-component>`
            }
        ];
    }

    static get styles() {

        return css`
            :host {
                display: block;
                min-height: 100vh;
            }
        `;

    }

}
