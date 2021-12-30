import React, { useMemo } from 'react';

import NavMenu from "../nav-menu";


const NavMenuContainer = () => {

  const links = useMemo(() => (
    [
      { to: '/schedule', text: 'Расписание' },
      { to: '/info', text: 'Информация' },
      { to: '/help', text: 'Помощь' },
    ]
  ), []);

  return <NavMenu links={links}/>;
};

export default NavMenuContainer;