import React from 'react';

import './error-boundary.styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-boundary">
          <div
            className="error-boundary__image"
            style={{ backgroundImage: 'url(https://i.imgur.com/A040Lxr.png)' }}
          />

          <p className="error-boundary__text">This Page is Lost in Space</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;