import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventAggregator from './pages/event-aggregator';
import Sidebar from './components/Sidebar';
import NotFound from './pages/not-found';
import Home from './pages/home';
import ApiGateway from './pages/api-gateway';
import Saga from './pages/saga';
import CircuitBreaker from './pages/circuit-breaker';
import DistributedTracing from './pages/distributed-tracing';
import IdempotentConsumer from './pages/idempotent-consumer';
import LogAggregator from './pages/log-aggregation';
import Factory from './pages/factory';
import Facade from './pages/facade';
import Builder from './pages/builder';
import Strategy from './pages/strategy';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aggregator" element={<EventAggregator/>} />
        <Route path="/api-gateway" element={<ApiGateway />} />
        <Route path="/saga" element={<Saga />} />
        <Route path="/circuit-breaker" element={<CircuitBreaker />} />
        <Route path="/distributed-tracing" element={<DistributedTracing />} />
        <Route path="/idempotent-consumer" element={<IdempotentConsumer />} />
        <Route path="/log-aggregation" element={<LogAggregator />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/facade" element={<Facade />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;

