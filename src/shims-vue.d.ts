declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.jpg' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.svg' {
  const classes: { readonly [key: string]: string }
  export default classes
}