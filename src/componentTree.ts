import { createElement } from 'react'

type Provider<Props = {}> = [React.ElementType, Props?]

export function componentTree(providers: Provider[]) {
  return ({ children }: { children: JSX.Element }) => {
    const lastIndex = providers.length - 1
    let currentChildren = children

    for (let i = lastIndex; i >= 0; i--) {
      const [Provider, props = {}] = providers[i]!
      currentChildren = createElement(Provider, props, currentChildren)
    }

    return currentChildren
  }
}