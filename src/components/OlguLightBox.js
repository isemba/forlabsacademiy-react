import { View, Text } from 'react-native'
import React from 'react'
import Lightbox from 'react-native-lightbox-v2';
export default function OlguLightBox({children}) {
  return (
    <Lightbox navigator={navigator}   activeProps={{width:"80%",height:"60%",marginLeft:'auto',marginRight:"auto"}}>
         {children}
    </Lightbox>
  )
}