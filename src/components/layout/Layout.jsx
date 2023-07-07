import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from 'components/navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />

      <div>
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
