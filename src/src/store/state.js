import React from 'react';
import { TitleProvider, TitleContext } from './TitleProvider';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }

  function ContextProvider({ children }) {
    return (
      <ProviderComposer
        contexts={[<TitleProvider />]}
      >
        {children}
      </ProviderComposer>
    );
  }
  
  export { ContextProvider };