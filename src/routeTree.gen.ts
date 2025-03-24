/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as demoDemoImport } from './routes/(demo)/demo'
import { Route as demoDemoIndexImport } from './routes/(demo)/demo/index'
import { Route as demoDemoIntroImport } from './routes/(demo)/demo/intro'
import { Route as demoDemoIdIndexImport } from './routes/(demo)/demo/$id/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const demoDemoRoute = demoDemoImport.update({
  id: '/(demo)/demo',
  path: '/demo',
  getParentRoute: () => rootRoute,
} as any)

const demoDemoIndexRoute = demoDemoIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => demoDemoRoute,
} as any)

const demoDemoIntroRoute = demoDemoIntroImport.update({
  id: '/intro',
  path: '/intro',
  getParentRoute: () => demoDemoRoute,
} as any)

const demoDemoIdIndexRoute = demoDemoIdIndexImport.update({
  id: '/$id/',
  path: '/$id/',
  getParentRoute: () => demoDemoRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/(demo)/demo': {
      id: '/(demo)/demo'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof demoDemoImport
      parentRoute: typeof rootRoute
    }
    '/(demo)/demo/intro': {
      id: '/(demo)/demo/intro'
      path: '/intro'
      fullPath: '/demo/intro'
      preLoaderRoute: typeof demoDemoIntroImport
      parentRoute: typeof demoDemoImport
    }
    '/(demo)/demo/': {
      id: '/(demo)/demo/'
      path: '/'
      fullPath: '/demo/'
      preLoaderRoute: typeof demoDemoIndexImport
      parentRoute: typeof demoDemoImport
    }
    '/(demo)/demo/$id/': {
      id: '/(demo)/demo/$id/'
      path: '/$id'
      fullPath: '/demo/$id'
      preLoaderRoute: typeof demoDemoIdIndexImport
      parentRoute: typeof demoDemoImport
    }
  }
}

// Create and export the route tree

interface demoDemoRouteChildren {
  demoDemoIntroRoute: typeof demoDemoIntroRoute
  demoDemoIndexRoute: typeof demoDemoIndexRoute
  demoDemoIdIndexRoute: typeof demoDemoIdIndexRoute
}

const demoDemoRouteChildren: demoDemoRouteChildren = {
  demoDemoIntroRoute: demoDemoIntroRoute,
  demoDemoIndexRoute: demoDemoIndexRoute,
  demoDemoIdIndexRoute: demoDemoIdIndexRoute,
}

const demoDemoRouteWithChildren = demoDemoRoute._addFileChildren(
  demoDemoRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/demo': typeof demoDemoRouteWithChildren
  '/demo/intro': typeof demoDemoIntroRoute
  '/demo/': typeof demoDemoIndexRoute
  '/demo/$id': typeof demoDemoIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/demo/intro': typeof demoDemoIntroRoute
  '/demo': typeof demoDemoIndexRoute
  '/demo/$id': typeof demoDemoIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/(demo)/demo': typeof demoDemoRouteWithChildren
  '/(demo)/demo/intro': typeof demoDemoIntroRoute
  '/(demo)/demo/': typeof demoDemoIndexRoute
  '/(demo)/demo/$id/': typeof demoDemoIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/demo' | '/demo/intro' | '/demo/' | '/demo/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/demo/intro' | '/demo' | '/demo/$id'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/(demo)/demo'
    | '/(demo)/demo/intro'
    | '/(demo)/demo/'
    | '/(demo)/demo/$id/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  demoDemoRoute: typeof demoDemoRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  demoDemoRoute: demoDemoRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/(demo)/demo"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/(demo)/demo": {
      "filePath": "(demo)/demo.tsx",
      "children": [
        "/(demo)/demo/intro",
        "/(demo)/demo/",
        "/(demo)/demo/$id/"
      ]
    },
    "/(demo)/demo/intro": {
      "filePath": "(demo)/demo/intro.tsx",
      "parent": "/(demo)/demo"
    },
    "/(demo)/demo/": {
      "filePath": "(demo)/demo/index.tsx",
      "parent": "/(demo)/demo"
    },
    "/(demo)/demo/$id/": {
      "filePath": "(demo)/demo/$id/index.tsx",
      "parent": "/(demo)/demo"
    }
  }
}
ROUTE_MANIFEST_END */
