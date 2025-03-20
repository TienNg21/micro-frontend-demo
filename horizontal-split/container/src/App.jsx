import React, { Suspense } from 'react';

// Import remote modules
const ProductsList = React.lazy(() => import('products/ProductsList'));
const ShoppingCart = React.lazy(() => import('cart/ShoppingCart'));

function App() {
  return (
    <div>
      <h1>Micro Frontend Demo</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Suspense fallback={<div>Loading Products...</div>}>
          <ErrorBoundary>
            <ProductsList />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={<div>Loading Cart...</div>}>
          <ErrorBoundary>
            <ShoppingCart />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

// Add Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('MFE Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component</div>;
    }
    return this.props.children;
  }
}

export default App;