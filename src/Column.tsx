import { ColumnContainer, } from "./styles";
import { Card} from './Card'
import { AddNewItem } from "./AddNewItem";

type ColumnProps = { 
    text: string
}


export const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
           <Card text="Generate app scaffold" />
           <Card text="Learn more" />
              <Card text="Drink up" />

              <AddNewItem toggleButtonText="Add new item" 
              onAdd={() => console.log('dream')}
              />
        
        
        </ColumnContainer>
    )
}