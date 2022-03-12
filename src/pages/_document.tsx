import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { AppType, RenderPage } from 'next/dist/shared/lib/utils'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet()
    const originalRenderPage: RenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

export default MyDocument
