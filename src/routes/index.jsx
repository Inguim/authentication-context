import React from 'react';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import { useAuth } from '../contexts/auth';

const Routes = () => {
    const { signed } = useAuth();

    console.log(signed);

    return signed ? <OtherRoutes /> : <SignRoutes />;
}

export default Routes;