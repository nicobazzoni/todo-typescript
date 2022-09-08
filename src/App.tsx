import React from 'react';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { AppContainer } from './styles';

import './styles.ts';

export const App = () => { 
  return  <AppContainer>
   <Column text="Todo"/>
   <AddNewItem toggleButtonText='+ Add another List' 
   onAdd={() => console.log('item created')} />
  </AppContainer>
}