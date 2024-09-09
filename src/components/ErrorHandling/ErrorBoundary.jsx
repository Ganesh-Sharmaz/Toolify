import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

  render() {
    if(this.state.hasError){
        return <h1 className='text-center text-3xl w-full bg-slate-100 font-bold font-grotesk text-black'>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary