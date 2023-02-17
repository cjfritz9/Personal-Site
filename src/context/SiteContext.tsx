import React from 'react';

export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isHovering: false
  };

  setIsHovering = (bool: boolean) => {
    this.setState({ isHovering: bool });
  };

  render() {
    return <SiteContext.Provider
      value={{
        ...this.state,
        setIsHovering: this.setIsHovering
      }}
    >
      {
        // @ts-ignore
        this.props.children
      }
    </SiteContext.Provider>;
  }
}
