import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import InfiniteUserList from './components/InfiniteUserList';
import UserDetailContainer from './components/UserDetailContainer';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>   
          <Router>
       <div className="App">
         <Routes>
           <Route path="/infinite" element={<InfiniteUserList />} />
           <Route path="/user/:userId" element={<UserDetailContainer />} />
         </Routes>
       </div>
     </Router>
    </QueryClientProvider>
  );
};

export default App;

