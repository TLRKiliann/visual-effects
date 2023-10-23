import React from 'react'

export default function SectionComp(props) {
  return (
    <>
      <section className={props.className}>
        <article>
          <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
        </article>
      </section>
    </>
  )
}
