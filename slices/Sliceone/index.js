import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import style from './slice.module.css'

/*
 * @typedef {import("@prismicio/client").Content.SliceoneSlice} SliceoneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliceoneSlice>} SliceoneProps
 * @param { SliceoneProps }
 */

const Sliceone = ({ slice }) => (
  <section className="title">
    <div className="container">

    {/* <pre>{JSON.stringify(slice, null, 2)}}</pre> */}
    <div className={style.red}><PrismicRichText field={slice.primary.title}/></div>
    <PrismicRichText field={slice.primary.description}/>
    <div className={style.image}><PrismicNextImage field={slice.primary.image}/></div>
    </div>
  </section>
)

export default Sliceone