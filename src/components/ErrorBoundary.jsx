import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="bg-red-900 text-white p-10 min-h-screen z-[99999] relative overflow-auto">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <h2 className="text-xl font-mono mb-2">{this.state.error && this.state.error.toString()}</h2>
                    <details className="whitespace-pre-wrap font-mono text-sm bg-black/50 p-4 rounded">
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
