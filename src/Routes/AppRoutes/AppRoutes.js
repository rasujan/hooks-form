import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PersonalDetailForm, Form } from '../../components/organisms';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/personal-info" element={<PersonalDetailForm />} />
    </Routes>
  );
}

export default AppRoute;
