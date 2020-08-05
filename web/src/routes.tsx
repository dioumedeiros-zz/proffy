import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exatc component={TeacherList} />
      <Route path="/give-class" exatc component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
