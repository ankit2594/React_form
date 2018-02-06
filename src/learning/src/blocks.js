import React, { Component }from 'react';
import Input_block from './inputBlock';
import {Cards_block} from './cardsBlock';
class Block extends Component
{
   render()
   {
       return(
           <div>
           <Input_block/>
           <Cards_block/>
           </div>
       )
   }
}
export default Block;